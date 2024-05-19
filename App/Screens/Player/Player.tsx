import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Appbar, Dialog, List, Portal, Text, Tooltip } from 'react-native-paper';
import { song } from '../../Storage/store/player';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DesktopModeProvider, Loader } from '../../Components';
import { Audio } from 'expo-av';
import { LyricsViewer, MusicInfo, PlayButton } from '../../Components/Player';
import { Cue } from '../../Util/webvtt/types';
import { parseWebVTT } from '../../Util/webvtt/parse';
import { Subtitle, fetchLyrics, fetchSubtitles, songUrl } from '../../API/song';
import { Navigation } from '../../Navigation/Navigation';
import { ProgressBar } from '../../Components/Player/ProgressBar';
import { onMount, onMountAsync } from '../../../Framework/Components/Actions';
import { colors } from '../../colors';
import { ReactNativeKeysKeyCode, useHotkey } from 'react-native-hotkeys';

interface Props {
    appNavigation: any;
    navigation: any;
}

function Player(props: Props) {
    const desktop = useContext(DesktopModeProvider);
    const navigation = new Navigation(props.navigation);
    const appNavigation = new Navigation(props.appNavigation);

    const choosenSong = song.get();

    const [visible, setVisible] = useState(false);
    const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
    const [cues, setCues] = useState<Cue[]>([]);

    const [audio, setAudio] = useState<Audio.Sound>();
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [audioPosition, setAudioPosition] = useState(0);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    onMountAsync(async () => {
        setSubtitles((await fetchSubtitles(choosenSong.id)) ?? []);

        const { sound } = await Audio.Sound.createAsync({
            uri: songUrl(choosenSong.id),
        });

        setAudio(sound);
    });

    useHotkey(ReactNativeKeysKeyCode.KeyK, _ => {
        if (audioPlaying) pause();
        else play();
    });

    useHotkey(ReactNativeKeysKeyCode.KeyL, skipForward);
    useHotkey(ReactNativeKeysKeyCode.KeyJ, skipBack);

    onMount(() => {
        showDialog();

        navigation.setTitle(`${choosenSong.title} - WordView`);
        navigation.emptyHeaderTitle();
        navigation.setHeaderLeft(
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Appbar.Action
                    style={{ marginLeft: 5 }}
                    icon='arrow-left'
                    onPress={() => {
                        appNavigation.go('home');
                    }}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text variant='bodyLarge' style={{ fontWeight: '700', color: colors.icon }}>
                        {choosenSong.title}
                    </Text>
                    <Text
                        variant='bodySmall'
                        style={{ fontWeight: '600', color: colors.iconDarker }}
                    >
                        {choosenSong.artist}
                    </Text>
                </View>
            </View>,
        );
    });

    // TODO: this needs some testing before updating it to a onUpdate hook
    useEffect(
        () => () => {
            audio?.stopAsync();
        },
        [audio],
    );

    // TODO: this as well
    useEffect(() => {
        const updateAudioPosition = async () => {
            if (audioPlaying) {
                const position = await getCurrentTime();
                if (position) {
                    setAudioPosition(Math.round(position));
                }
            }
        };

        const interval = setInterval(updateAudioPosition, 20);

        return () => clearInterval(interval);
    }, [audioPlaying]);

    function subtitleList() {
        return subtitles.map(subtitle => (
            <List.Item
                title={subtitle.name}
                key={subtitle.language}
                description={subtitle.language}
                style={{ marginBottom: hp(1) }}
                onPress={() => {
                    hideDialog();
                    getLyrics(subtitle.language);
                }}
            />
        ));
    }

    async function getLyrics(lang: string) {
        const lyrics = await fetchLyrics(choosenSong.id, lang);
        if (!lyrics) return;

        const cues = parseWebVTT(lyrics);
        setCues(cues);
    }

    async function getAudioInfo() {
        const playbackInfo = await audio?.getStatusAsync();
        if (!playbackInfo || !playbackInfo.isLoaded) {
            console.warn('Playblack is not loaded!');
            return;
        }

        return playbackInfo;
    }

    async function getCurrentTime() {
        const playbackInfo = await getAudioInfo();
        return playbackInfo?.positionMillis;
    }

    function play() {
        audio?.playAsync();
        setAudioPlaying(true);
    }

    function pause() {
        audio?.pauseAsync();
        setAudioPlaying(false);
    }

    function goto(position: number) {
        audio?.playFromPositionAsync(position);
        setAudioPlaying(true);
    }

    async function skipBack() {
        const playbackInfo = await getAudioInfo();
        if (!playbackInfo) return;

        const skipped = playbackInfo.positionMillis - 5000;

        if (playbackInfo.durationMillis && skipped < 0) {
            goto(0);
        } else {
            goto(skipped);
        }
    }

    async function skipForward() {
        const playbackInfo = await getAudioInfo();
        if (!playbackInfo) return;

        const skipped = playbackInfo.positionMillis + 5000;

        if (playbackInfo.durationMillis && skipped > playbackInfo.durationMillis) {
            goto(playbackInfo.durationMillis);
        } else {
            goto(skipped);
        }
    }

    return (
        <>
            <Portal>
                <Dialog
                    visible={visible}
                    dismissable={false}
                    style={[
                        desktop && { width: wp(25), alignSelf: 'center' },
                        styles.subtitlePickerModal,
                    ]}
                >
                    <Dialog.Title>Choose a subtitle</Dialog.Title>
                    <Dialog.Content>
                        <Loader loading={subtitles.length == 0} children={subtitleList()} />
                    </Dialog.Content>
                </Dialog>
            </Portal>
            <Image
                style={{ height: '100%', width: '100%' }}
                // for some reason source doesn't accept a string altough it supports opening a url (???)
                source={`https://img.youtube.com/vi/${choosenSong.id}/maxresdefault.jpg` as any}
                blurRadius={5}
            />
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    opacity: 0.6,
                }}
            />

            <View style={styles.controls}>
                <ProgressBar
                    audioPosition={audioPosition}
                    getAudioInfo={getAudioInfo}
                    style={{ marginTop: 2 }}
                />
                <View style={styles.playerControlsContainer}>
                    <Tooltip title='Retroceder (J)'>
                        <Appbar.Action
                            icon='skip-backward'
                            style={{ padding: 0, marginRight: 0 }}
                            size={24}
                            onPress={skipBack}
                        />
                    </Tooltip>
                    <PlayButton
                        isAudioPlaying={audioPlaying}
                        size={28}
                        onPlay={play}
                        onPause={pause}
                    />
                    <Tooltip title='Avançar (L)'>
                        <Appbar.Action
                            icon='skip-forward'
                            style={{ padding: 0, marginLeft: 0 }}
                            size={24}
                            onPress={skipForward}
                        />
                    </Tooltip>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
    },
    controls: {
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: colors.interface,
        position: 'absolute',
        borderTopColor: colors.interfaceBorder,
        borderTopWidth: 1,
        overflow: 'hidden',
    },
    subtitlePickerModal: {
        overflow: 'scroll',
        maxHeight: hp(40),
    },
    playerControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
    },
});

export default Player;

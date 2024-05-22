import { formatTime } from '../../Util/time';
import { Text } from 'react-native-paper';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useContext, useState } from 'react';
import { DesktopModeProvider } from '../Provider';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AVPlaybackStatusSuccess } from 'expo-av';
import { onUpdateAsync } from '../../../Framework/Components/Actions/update';
import { colors } from '../../colors';

interface ProgressBarProps {
    audioPosition: number;
    getAudioInfo: () => Promise<AVPlaybackStatusSuccess | undefined>;
    style?: StyleProp<ViewStyle>;
}

export function ProgressBar(props: ProgressBarProps) {
    const desktop = useContext(DesktopModeProvider);
    const [audioInfo, setAudioInfo] = useState<AVPlaybackStatusSuccess>();

    // ugly workaround to get the audio duration, fix later
    onUpdateAsync([props.getAudioInfo], async () => {
        const info = await props.getAudioInfo();
        if (!info) return;
        setAudioInfo(info);
    });

    function percentage(numberToGetPercentageOf: number, wholeNumber: number) {
        return (numberToGetPercentageOf / wholeNumber) * 100;
    }

    return (
        <View style={[styles.progressBarRoot, props.style]}>
            <Text
                variant='bodySmall'
                style={{
                    marginRight: 10,
                    fontFamily: 'OpenSans',
                    fontWeight: '600',
                    color: colors.icon,
                }}
            >
                {formatTime(props.audioPosition)}
            </Text>
            <View style={styles.progressBar}>
                <View
                    style={[
                        styles.songPositionBar,
                        {
                            width: `${percentage(
                                props.audioPosition,
                                audioInfo?.durationMillis ?? Infinity,
                            )}%`,
                        },
                    ]}
                />
            </View>
            <Text
                variant='bodySmall'
                style={{
                    marginLeft: 10,
                    fontFamily: 'OpenSans',
                    fontWeight: '600',
                    color: colors.icon,
                }}
            >
                {formatTime((audioInfo?.durationMillis ?? 0) - props.audioPosition)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    progressBarRoot: {
        height: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    timeContainer: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressBar: {
        width: '92%',
        height: hp(0.8),
        borderRadius: 20,
        backgroundColor: '#4C4850',
    },
    songPositionBar: {
        height: hp(0.8),
        borderRadius: 20,
        backgroundColor: '#9563FF',
    },
});

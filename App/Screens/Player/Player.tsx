import { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Dialog, List, Portal, Text } from 'react-native-paper'
import { song, tutorialing } from '../../Storage/store/player'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { DesktopModeProvider, Loader } from '../../Components'
import { Subtitle, getAvailableSubtitles, getLyrics } from '../../../modules/api/song'
import { Audio } from 'expo-av'
import { url } from '../../../modules/api/client'
import { formatTime } from '../../Util/time'
import { LyricsViewer, MusicInfo, PlayButton } from '../../Components/Player'
import { Cue } from '../../Util/webvtt/types'
import { parseWebVTT } from '../../Util/webvtt/parse'

interface Props {
  appNavigation: any
  navigation: any
}

function Player(props: Props) {
  const tutorial = tutorialing.get()
  const desktop = useContext(DesktopModeProvider)
  const choosenSong = song.get()

  const [visible, setVisible] = useState(false)
  const [subtitles, setSubtitles] = useState<Subtitle[]>([])
  const [cues, setCues] = useState<Cue[]>([])

  const [audio, setAudio] = useState<Audio.Sound>()
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [audioPosition, setAudioPosition] = useState(0)

  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  useEffect(() => {
    if (tutorial) props.navigation.navigate('TutorialWelcome')

    showDialog()
    ;(async function fetch() {
      setSubtitles((await getAvailableSubtitles(choosenSong.id)) ?? [])

      const { sound } = await Audio.Sound.createAsync({
        uri: url(`/music/download?id=${choosenSong.id}`),
      })

      setAudio(sound)
    })()

    props.navigation.setOptions({
      title: `${choosenSong.title} - WordView`,
      headerTitle: '',
      headerLeft: () => (
        <Appbar.Action
          icon='arrow-left'
          onPress={() => {
            if (tutorial) tutorialing.set(false)
            props.appNavigation.navigate('home')
          }}
        />
      ),
    })
  }, [])

  useEffect(
    () => () => {
      audio?.stopAsync()
    },
    [audio],
  )

  useEffect(() => {
    const updateAudioPosition = async () => {
      if (audioPlaying) {
        const position = await getCurrentTime()
        if (position) {
          setAudioPosition(Math.round(position))
        }
      }
    }

    const interval = setInterval(updateAudioPosition, 20)

    return () => clearInterval(interval)
  }, [audioPlaying])

  function subtitleList() {
    return subtitles.map(subtitle => (
      <List.Item
        title={subtitle.name}
        description={subtitle.language}
        style={{ marginBottom: hp(1) }}
        onPress={() => {
          hideDialog()
          fetchLyrics(subtitle.language)
        }}
      />
    ))
  }

  async function fetchLyrics(lang: string) {
    const lyrics = await getLyrics(choosenSong.id, lang)
    if (!lyrics) return

    const cues = parseWebVTT(lyrics)
    setCues(cues)
  }

  async function getAudioInfo() {
    const playbackInfo = await audio?.getStatusAsync()
    if (!playbackInfo || !playbackInfo.isLoaded) {
      console.warn('Playblack is not loaded!')
      return
    }

    return playbackInfo
  }

  async function getCurrentTime() {
    const playbackInfo = await getAudioInfo()
    return playbackInfo?.positionMillis
  }

  function play() {
    audio?.playAsync()
    setAudioPlaying(true)
  }

  function pause() {
    audio?.pauseAsync()
    setAudioPlaying(false)
  }

  function goto(position: number) {
    audio?.playFromPositionAsync(position)
    setAudioPlaying(true)
  }

  async function skipBack() {
    const playbackInfo = await getAudioInfo()
    if (!playbackInfo) return

    let skipped = playbackInfo.positionMillis - 5000

    if (playbackInfo.durationMillis && skipped < 0) {
      goto(0)
    } else {
      goto(skipped)
    }
  }

  async function skipForward() {
    const playbackInfo = await getAudioInfo()
    if (!playbackInfo) return

    let skipped = playbackInfo.positionMillis + 5000

    if (playbackInfo.durationMillis && skipped > playbackInfo.durationMillis) {
      goto(playbackInfo.durationMillis)
    } else {
      goto(skipped)
    }
  }

  return (
    <>
      <Portal>
        <Dialog
          visible={visible}
          dismissable={false}
          style={[desktop && { width: wp(25), alignSelf: 'center' }, styles.subtitlePickerModal]}
        >
          <Dialog.Title>Choose a subtitle</Dialog.Title>
          <Dialog.Content>
            <Loader loading={subtitles.length == 0} children={subtitleList()} />
          </Dialog.Content>
        </Dialog>
      </Portal>
      <View style={styles.root}>
        <LyricsViewer cues={cues} audioPosition={audioPosition} />
        <View style={styles.musicInfo}>
          <MusicInfo song={choosenSong} />
          <View style={styles.playerBarCenter}>
            <View style={styles.playerControlsContainer}>
              <Appbar.Action icon='skip-backward' size={20} onPress={skipBack} />
              <PlayButton isAudioPlaying={audioPlaying} onPlay={play} onPause={pause} />
              <Appbar.Action icon='skip-forward' size={20} onPress={skipForward} />
            </View>
            <Text variant='bodySmall'>{formatTime(audioPosition)}</Text>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  lyricsViewer: {
    width: '98%',
    height: '84%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#CB495E',
    overflow: 'scroll',
  },
  musicInfo: {
    width: '98%',
    alignSelf: 'center',
    height: hp(14),
  },
  subtitlePickerModal: {
    overflow: 'scroll',
    maxHeight: hp(40),
  },
  playerBarCenter: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
  },
  playerControlsContainer: { flexDirection: 'row', alignItems: 'center' },
})

export default Player

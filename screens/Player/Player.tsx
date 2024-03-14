import { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Dialog, List, Portal, Text } from 'react-native-paper'
import { song, tutorialing } from '../../storage/store/player'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { DesktopModeProvider, Loader } from '../../components'
import { Subtitle, getAvailableSubtitles, getLyrics } from '../../modules/api/song'
import { Audio } from 'expo-av'
import { url } from '../../modules/api/client'
import { formatTime } from '../../modules/time/time'
import { LyricsViewer, MusicInfo, PlayButton } from '../../components/Player'
import { Cue } from '../../components/Player/types'
const { WebVTTParser } = require('webvtt-parser')

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

  useEffect(() => {
    let pooler: NodeJS.Timeout

    pooler = setInterval(async () => {
      if (!audioPlaying) return

      const position = await getCurrentTime()
      if (position) setAudioPosition(Math.round(position))
    }, 20)

    return () => clearInterval(pooler)
  }, [audioPlaying])

  function subtitleList() {
    const subtitlesList = []

    for (const subtitle of subtitles) {
      subtitlesList.push(
        <List.Item
          title={subtitle.name}
          description={subtitle.language}
          style={{ marginBottom: hp(1) }}
          onPress={() => fetchLyrics(subtitle.language)}
        />,
      )
    }

    return subtitlesList
  }

  async function fetchLyrics(lang: string) {
    hideDialog()

    const cues: Cue[] = []

    const lyrics = await getLyrics(choosenSong.id, lang)

    const parser = new WebVTTParser()

    const tree = parser.parse(lyrics, 'metadata')

    for (const cue of tree.cues) {
      cues.push(cue as Cue)
    }

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

  async function skipBack() {
    const playbackInfo = await getAudioInfo()
    if (!playbackInfo) return

    let skipped = playbackInfo.positionMillis - 5000

    if (playbackInfo.durationMillis && skipped < 0) {
      audio?.playFromPositionAsync(0)
    } else {
      audio?.playFromPositionAsync(skipped)
    }

    setAudioPlaying(true)
  }

  async function skipForward() {
    const playbackInfo = await getAudioInfo()
    if (!playbackInfo) return

    let skipped = playbackInfo.positionMillis + 5000

    if (playbackInfo.durationMillis && skipped > playbackInfo.durationMillis) {
      audio?.playFromPositionAsync(playbackInfo.durationMillis)
    } else {
      audio?.playFromPositionAsync(skipped)
    }

    setAudioPlaying(true)
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

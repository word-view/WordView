import { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ActivityIndicator, Appbar, Dialog, List, Portal, Text } from 'react-native-paper'
import { song, tutorialing } from '../../storage/store/player'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { DesktopModeProvider } from '../../components'
import { Subtitle, getAvailableSubtitles, getLyrics } from '../../modules/api/song'
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
  const [lyrics, setLyrics] = useState('')

  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  useEffect(() => {
    if (tutorial) props.navigation.navigate('TutorialWelcome')

    showDialog()
    ;(async function fetch() {
      setSubtitles((await getAvailableSubtitles(choosenSong.id)) ?? [])
    })()

    props.navigation.setOptions({
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

    const lyric = []

    const lyrics = await getLyrics(choosenSong.id, lang)

    const parser = new WebVTTParser()

    const tree = parser.parse(lyrics, 'metadata')

    for (const cue of tree.cues) {
      lyric.push(cue.text)
    }

    setLyrics(lyric.join('\n'))
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
            {subtitles.length == 0 ? (
              <ActivityIndicator animating={true} color='#DDD8DD' size={'large'} />
            ) : (
              subtitleList()
            )}
          </Dialog.Content>
        </Dialog>
      </Portal>
      <View style={styles.root}>
        <View style={styles.lyricsViewer}>{lyrics}</View>
        <View style={styles.musicInfo}>
          <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
            <Image style={{ height: 75, width: 75, borderRadius: 10 }} source={choosenSong.cover} />
            <View style={{ height: '100%', justifyContent: 'center', marginLeft: 10 }}>
              <Text variant='labelLarge'>{choosenSong.title}</Text>
              <Text variant='labelSmall'>{choosenSong.artist}</Text>
            </View>
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
  },
  musicInfo: {
    width: '98%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: hp(14),
  },
  subtitlePickerModal: {
    overflow: 'scroll',
    maxHeight: hp(40),
  },
})

export default Player

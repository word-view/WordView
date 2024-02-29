import { useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import { song, tutorialing } from '../../storage/store/player'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
  appNavigation: any
  navigation: any
}

function Player(props: Props) {
  const tutorial = tutorialing.get()
  const choosenSong = song.get()

  useEffect(() => {
    if (tutorial) props.navigation.navigate('TutorialWelcome')

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

  return (
    <View style={styles.root}>
      <View style={styles.lyricsViewer}></View>
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
})

export default Player

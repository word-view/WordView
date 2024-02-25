import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import { song, tutorialing } from '../../../storage/store/player'
import { Input, Song } from '../../../components'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import images from '../../../config/images'

interface Props {
  appNavigation: any
  navigation: any
}

function TutorialWelcome(props: Props) {
  const tutorial = tutorialing.get()

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <Appbar.Action
          icon='arrow-left'
          onPress={() => {
            props.appNavigation.navigate('home')
          }}
        />
      ),
    })
  }, [])

  return (
    <View style={styles.root}>
      <Text variant='headlineSmall' style={{ fontWeight: '800' }}>
        Bem vindo!
      </Text>
      <Text variant='titleSmall' style={{ textAlign: 'center' }}>
        Para começar, escolha uma musica abaixo ou {'\n'} pesquise uma de sua preferência
      </Text>

      <Input
        mode='outlined'
        label='Pesquise artistas ou músicas'
        style={{ width: 360, marginTop: hp(6) }}
      />

      <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
        <Song
          img={images.yoruNiCover}
          title='夜に駆ける'
          artist='YOASOBI'
          onPress={() => {
            song.set({ title: '夜に駆ける', artist: 'YOASOBI', image: images.yoruNiCover })
            props.navigation.navigate('TutorialFinish')
          }}
        />
        <Song
          img={images.mirrorCover}
          title='Englishman in New York'
          artist='majiko'
          onPress={() => {
            song.set({
              title: 'Englishman in New York',
              artist: 'majiko',
              image: images.mirrorCover,
            })
            props.navigation.navigate('TutorialFinish')
          }}
        />
        <Song
          img={images.kataomoiCover}
          title='Kataomoi'
          artist='Aimer'
          onPress={() => {
            song.set({
              title: 'Kataomoi',
              artist: 'Aimer',
              image: images.kataomoiCover,
            })
            props.navigation.navigate('TutorialFinish')
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
})

export default TutorialWelcome

import { StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import { song, tutorialing } from '../../../Storage/store/player'
import { Input, Song } from '../../../Components'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Navigation } from '../../../Navigation/Navigation'
import { onMount } from '../../../../Framework/Component/Actions'
import { getImageJpeg } from '../../../../Framework/Resources/image'

interface Props {
  appNavigation: any
  navigation: any
}

function TutorialWelcome(props: Props) {
  const tutorial = tutorialing.get()
  const navigation = new Navigation(props.navigation)

  onMount(() => {
    navigation.emptyHeaderTitle()
    navigation.setHeaderLeft(
      <Appbar.Action
        icon='arrow-left'
        onPress={() => {
          props.appNavigation.navigate('home')
        }}
      />,
    )
  })

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
          img={getImageJpeg('builtin/YoruNi_Cover')}
          title='夜に駆ける'
          artist='YOASOBI'
          onPress={() => {
            song.set({
              id: '1',
              title: '夜に駆ける',
              artist: 'YOASOBI',
              cover: getImageJpeg('builtin/YoruNi_Cover'),
            })
            props.navigation.navigate('TutorialFinish')
          }}
        />
        <Song
          img={getImageJpeg('bultin/Mirror_Cover')}
          title='Englishman in New York'
          artist='majiko'
          onPress={() => {
            song.set({
              id: '2',
              title: 'Englishman in New York',
              artist: 'majiko',
              cover: getImageJpeg('bultin/Mirror_Cover'),
            })
            props.navigation.navigate('TutorialFinish')
          }}
        />
        <Song
          img={getImageJpeg('bultin/Kataomoi_Cover')}
          title='Kataomoi'
          artist='Aimer'
          onPress={() => {
            song.set({
              id: '3',
              title: 'Kataomoi',
              artist: 'Aimer',
              cover: getImageJpeg('bultin/Kataomoi_Cover'),
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

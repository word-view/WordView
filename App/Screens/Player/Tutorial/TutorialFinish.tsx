import { StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import { SmallButton, Song } from '../../../Components'
import { song } from '../../../Storage/store/player'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Navigation } from '../../../Navigation/Navigation'
import { onMount } from '../../../../Framework/Component/Actions'

interface Props {
  appNavigation: any
  navigation: any
}

function TutorialFinish(props: Props) {
  const choosenSong = song.get()
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
        Como funciona?
      </Text>
      <Text variant='titleSmall' style={{ textAlign: 'center' }}>
        Você ouvirá a música normalmente como {'\n'}
        qualquer app de streaming, preste atenção na {'\n'}
        letra, ao final dela haverá uma aula feita {'\n'}a partir da letra da música
      </Text>

      <Song
        img={choosenSong.cover}
        title={choosenSong.title}
        artist={choosenSong.artist}
        style={{ marginTop: hp(6) }}
        onPress={() => {}}
      />

      <SmallButton
        text='Iniciar'
        icon='play'
        color={{
          text: '#fff',
          button: '#8951FF',
        }}
        style={{ marginTop: hp(6) }}
        onPress={() => navigation.go('Player')}
      />
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

export default TutorialFinish

import { memo } from 'react'
import { Section, SmallButton } from '../../../components'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native'
import { tutorialing } from '../../../storage/store/player'

interface WelcomeProps {
  marginLeft?: number
  marginTop?: number
  appNav: any
}

function $Welcome(props: WelcomeProps) {
  function beginTutorial() {
    tutorialing.set(true)
    props.appNav.navigate('player')
  }

  return (
    <Section
      title='Bem-vindo!'
      description='Preparamos um breve aula pra explicar como o app funciona'
      fill={true}
      style={{ marginTop: hp(props.marginTop ?? 0), marginLeft: wp(props.marginLeft ?? 0) }}
    >
      <SmallButton
        text='Iniciar'
        icon='play'
        color={{
          text: '#fff',
          button: '#8951FF',
        }}
        style={{ marginTop: hp(2) }}
        onPress={beginTutorial}
      />
    </Section>
  )
}

const styles = StyleSheet.create({
  wvIcon: {
    height: 68,
    width: 84,
  },
})

export const Welcome = memo($Welcome)

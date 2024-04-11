import { ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native-paper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AccountLoginButton, ContentHolder, DesktopModeProvider, onMount } from '../../Components'

interface Props {
  appNavigation: any
  navigation: any
}

function Login(props: Props) {
  const desktop = useContext(DesktopModeProvider)

  onMount(() => {
    props.navigation.setOptions({ title: 'Bem vindo de volta!' })

    if (desktop) props.navigation.setOptions({ headerTitle: '' })
  })

  return (
    <ScrollView style={!desktop && { backgroundColor: '#2C2831' }}>
      <ContentHolder title='Bem vindo de volta!'>
        <AccountLoginButton
          icon='email'
          text='Login por email'
          color={{ text: 'white', button: '#8951FF' }}
          onPress={() => props.navigation.navigate('EmailLogin')}
        />

        <Button
          mode='text'
          onPress={() => props.navigation.navigate('Register')}
          style={{ marginTop: hp(2) }}
        >
          Ou crie sua conta
        </Button>
      </ContentHolder>
    </ScrollView>
  )
}

export default Login

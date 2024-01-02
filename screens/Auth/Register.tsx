import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Button as RNPButton } from 'react-native-paper'
import {
  AuthInput,
  Button,
  ContentHolder,
  ResponsiveLayout,
} from '../../components'

interface Props {
  appNavigation: any
  navigation: any
}

function Register(props: Props) {
  const { isDesktop } = ResponsiveLayout()

  useEffect(() => {
    props.navigation.setOptions({ title: 'Criar uma conta' })
    if (isDesktop) props.navigation.setOptions({ title: '' })
  }, [])

  return (
    <ScrollView style={!isDesktop && { backgroundColor: '#2C2831' }}>
      <ContentHolder title='Criar uma conta'>
        <AuthInput
          label='Email'
          errorText={'emailErrorText'}
          erroring={false}
          onChangeText={() => {}}
        />
        <AuthInput
          label='Nome de Usuário'
          errorText={'usernameErrorText'}
          erroring={false}
          onChangeText={() => {}}
        />
        <AuthInput
          label='Senha'
          secure={true}
          errorText={'passwordErrorText'}
          erroring={false}
          onChangeText={() => {}}
        />
        <AuthInput
          label='Repita a senha'
          secure={true}
          errorText={'confirmErrorText'}
          erroring={false}
          onChangeText={() => {}}
        />

        <Button
          text='Criar'
          color={{ text: 'white', button: '#8951FF' }}
          onPress={() => {}}
          disabled={true}
          marginTop={3}
        />

        <RNPButton
          mode='text'
          onPress={() => props.navigation.navigate('LanguagePicker')}
          style={{ marginTop: hp(1) }}
        >
          Ou entre na sua conta
        </RNPButton>
      </ContentHolder>
    </ScrollView>
  )
}

export default Register

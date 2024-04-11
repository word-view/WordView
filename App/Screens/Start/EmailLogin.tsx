import { ScrollView } from 'react-native'
import { Button, ContentHolder, AuthInput, DesktopModeProvider, onMount } from '../../Components'
import { useContext } from 'react'

interface Props {
  appNavigation: any
  navigation: any
}

function EmailLogin(props: Props) {
  const desktop = useContext(DesktopModeProvider)

  onMount(() => {
    props.navigation.setOptions({ title: 'Login por email' })
    if (desktop) props.navigation.setOptions({ headerTitle: '' })
  })

  return (
    <ScrollView style={!desktop && { backgroundColor: '#2C2831' }}>
      <ContentHolder title='Login por email'>
        <AuthInput
          label='Email'
          errorText={'emailErrorText'}
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

        <Button
          text='Entrar'
          color={{ text: 'white', button: '#8951FF' }}
          onPress={() => {}}
          disabled={true}
          marginTop={4}
        />
      </ContentHolder>
    </ScrollView>
  )
}

export default EmailLogin

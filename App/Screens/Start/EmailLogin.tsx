import { ScrollView } from 'react-native'
import { Button, ContentHolder, AuthInput, DesktopModeProvider } from '../../Components'
import { useContext } from 'react'
import { Navigation } from '../../Navigation/Navigation'
import { onMount } from '../../../Framework/Component/Actions'

interface Props {
  appNavigation: any
  navigation: any
}

function EmailLogin(props: Props) {
  const desktop = useContext(DesktopModeProvider)
  const navigation = new Navigation(props.navigation)

  onMount(() => {
    navigation.setTitle('Login por email')
    if (desktop) navigation.emptyHeaderTitle()
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

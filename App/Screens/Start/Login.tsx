import { ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AccountLoginButton, ContentHolder, DesktopModeProvider } from '../../Components';
import { Navigation } from '../../Navigation/Navigation';
import { onMount } from '../../../Framework/Component/Actions';

interface Props {
  appNavigation: any;
  navigation: any;
}

function Login(props: Props) {
  const desktop = useContext(DesktopModeProvider);
  const navigation = new Navigation(props.navigation);

  onMount(() => {
    navigation.setTitle('Bem vindo de volta!');
    if (desktop) navigation.emptyHeaderTitle();
  });

  return (
    <ScrollView style={!desktop && { backgroundColor: '#2C2831' }}>
      <ContentHolder title='Bem vindo de volta!'>
        <AccountLoginButton
          icon='email'
          text='Login por email'
          color={{ text: 'white', button: '#8951FF' }}
          onPress={() => navigation.go('EmailLogin')}
        />

        <Button mode='text' onPress={() => navigation.go('Register')} style={{ marginTop: hp(2) }}>
          Ou crie sua conta
        </Button>
      </ContentHolder>
    </ScrollView>
  );
}

export default Login;

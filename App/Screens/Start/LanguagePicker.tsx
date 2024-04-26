import { useContext } from 'react';
import { Button, ContentHolder, DesktopModeProvider } from '../../Components';
import { ScrollView } from 'react-native';
import { Navigation } from '../../Navigation/Navigation';
import { onMount } from '../../../Framework/Component/Actions';

interface Props {
  appNavigation: any;
  navigation: any;
}

function LanguagePicker(props: Props) {
  const desktop = useContext(DesktopModeProvider);
  const navigation = new Navigation(props.navigation);
  const appNavigation = new Navigation(props.appNavigation);

  onMount(() => {
    navigation.setTitle('Selecione um idioma');
    if (desktop) navigation.emptyHeaderTitle();
  });

  function saveLanguageChoiceAndProceed() {
    appNavigation.go('home');
  }

  return (
    <ScrollView style={!desktop && { backgroundColor: '#2C2831' }}>
      <ContentHolder title='Selecione um idioma'>
        <Button
          text='🇺🇸 Inglês'
          color={{
            text: 'white',
            button: '#ff5151',
          }}
          onPress={saveLanguageChoiceAndProceed}
        />
      </ContentHolder>
    </ScrollView>
  );
}

export default LanguagePicker;

import { useContext } from 'react'
import { Button, ContentHolder, DesktopModeProvider, onMount } from '../../Components'
import { ScrollView } from 'react-native'

interface Props {
  appNavigation: any
  navigation: any
}

function LanguagePicker(props: Props) {
  const desktop = useContext(DesktopModeProvider)

  onMount(() => {
    props.navigation.setOptions({ title: 'Selecione um idioma' })
    if (desktop) props.navigation.setOptions({ headerTitle: '' })
  })

  function saveLanguageChoiceAndProceed() {
    props.appNavigation.navigate('home')
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
  )
}

export default LanguagePicker

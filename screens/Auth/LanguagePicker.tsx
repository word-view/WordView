import { useEffect } from 'react'
import { Button, ContentHolder, ResponsiveLayout } from '../../components'
import { ScrollView } from 'react-native'

interface Props {
  appNavigation: any
  navigation: any
}

function LanguagePicker(props: Props) {
  const { isDesktop } = ResponsiveLayout()

  useEffect(() => {
    props.navigation.setOptions({ title: 'Selecione um idioma' })
    if (isDesktop) props.navigation.setOptions({ title: '' })
  }, [])

  function saveLanguageChoiceAndProceed() {
    props.appNavigation.navigate('home')
  }

  return (
    <ScrollView style={!isDesktop && { backgroundColor: '#2C2831' }}>
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

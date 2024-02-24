import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { tutorialing } from '../../storage/store/player'

interface Props {
  appNavigation: any
  navigation: any
}

function Player(props: Props) {
  const tutorial = tutorialing.get()

  useEffect(() => {
    console.log(`Doing tutorial? ${tutorial}`)
    props.navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <Appbar.Action
          icon='arrow-left'
          onPress={() => {
            if (tutorial) tutorialing.set(false)
            props.appNavigation.navigate('home')
          }}
        />
      ),
    })
  }, [])

  return <View style={styles.root}></View>
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
})

export default Player

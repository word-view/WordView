import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar } from 'react-native-paper'

interface Props {
  appNavigation: any
  navigation: any
}

function Player(props: Props) {
  props.navigation.setOptions({
    headerTitle: '',
    headerLeft: () => <Appbar.Action icon='arrow-left' onPress={() => props.appNavigation.navigate('home')} />,
  })

  return <View style={styles.root}></View>
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
})

export default Player

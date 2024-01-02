import { View, StyleSheet } from 'react-native'
import { Appbar, BottomNavigation } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { ResponsiveLayout, WVLogo } from '../../components'
import { SideNavigation } from '../../components/Home/SideNavigation'
import Main from './Main'
import Progress from './Progress'

interface Props {
  appNavigation: any
  navigation: any
}

function Home(props: Props) {
  const { isDesktop } = ResponsiveLayout()

  useEffect(() => {
    props.navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.wvTitleHolder}>
          <WVLogo />
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <Appbar.Action
            icon='cog'
            onPress={() => props.navigation.navigate('Settings')}
          />
        </View>
      ),
    })
  }, [])

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {
      key: 'learn',
      title: 'Learn',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'progress',
      title: 'Your Progress',
      focusedIcon: 'road-variant',
      unfocusedIcon: 'road-variant',
    },
  ])

  const renderScene = BottomNavigation.SceneMap({
    learn: () => <Main nav={props.navigation} />,
    progress: () => <Progress nav={props.navigation} />,
  })

  return (
    <>
      {isDesktop && (
        <SideNavigation
          onPressHome={() => setIndex(0)}
          onPressProgress={() => setIndex(1)}
        />
      )}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        sceneAnimationEnabled={true}
        shifting={true}
        barStyle={isDesktop && { height: 0 }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  wvTitleHolder: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
  },
})

export default Home

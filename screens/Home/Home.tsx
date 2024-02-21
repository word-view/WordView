import { BottomNavigation } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { HeaderLeft, HeaderRight, ResponsiveLayout } from '../../components'
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
      headerLeft: () => <HeaderLeft />,
      headerRight: () => (
        <HeaderRight onPressCog={() => props.navigation.navigate('Settings')} />
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
      component: () => (
        <Main marginLeft={isDesktop ? 8 : 0} appNav={props.appNavigation} />
      ),
    },
    {
      key: 'progress',
      title: 'Your Progress',
      focusedIcon: 'road-variant',
      unfocusedIcon: 'road-variant',
      component: () => <Progress nav={props.navigation} />,
    },
  ])

  const renderScene = BottomNavigation.SceneMap({
    learn: routes[0].component,
    progress: routes[1].component,
  })

  return (
    <>
      {isDesktop && <SideNavigation routes={routes} setIndex={setIndex} />}
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

export default Home

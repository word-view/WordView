import { BottomNavigation } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { HeaderLeft, HeaderRight, ResponsiveLayout } from '../../components'
import { Route, SideNavigation } from '../../components/Home/SideNavigation'
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
      title: 'Home - WordView',
      headerTitle: '',
      headerLeft: () => <HeaderLeft />,
      headerRight: () => <HeaderRight onPressCog={() => props.navigation.navigate('Settings')} />,
    })
  }, [])

  const [index, setIndex] = useState(0)
  const routes: Route[] = [
    {
      key: 'learn',
      title: 'Learn',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
      mobileOnly: false,
      component: () => <Main marginLeft={isDesktop ? 8 : 0} appNav={props.appNavigation} />,
    },
    {
      key: 'explore',
      title: 'Explore',
      focusedIcon: 'compass',
      unfocusedIcon: 'compass-outline',
      mobileOnly: true,
      component: () => <></>,
    },
    {
      key: 'progress',
      title: 'Progress',
      focusedIcon: 'timeline-text',
      unfocusedIcon: 'timeline-text-outline',
      mobileOnly: false,
      component: () => <Progress nav={props.navigation} />,
    },
  ]

  const sceneMap = routes.reduce((map: any, route) => {
    map[route.key] = route.component
    return map
  }, {})

  return (
    <>
      {isDesktop && <SideNavigation routes={routes} setIndex={setIndex} />}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={BottomNavigation.SceneMap(sceneMap)}
        sceneAnimationEnabled={true}
        shifting={false}
        barStyle={isDesktop && { height: 0 }}
      />
    </>
  )
}

export default Home

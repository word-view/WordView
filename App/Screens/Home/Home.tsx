import { BottomNavigation } from 'react-native-paper'
import { useContext, useState } from 'react'
import { DesktopModeProvider, HeaderLeft, HeaderRight } from '../../Components'
import { Route, SideNavigation } from '../../Components/Home/SideNavigation'
import Main from './Main'
import Progress from './Progress'
import Explore from './Explore'
import { onUpdate, onMount } from '../../../Framework/Component/Actions'
import { Navigation } from '../../Navigation/Navigation'

interface Props {
  appNavigation: any
  navigation: any
}

function Home(props: Props) {
  const desktop = useContext(DesktopModeProvider)
  const navigation = new Navigation(props.navigation)

  onMount(() => {
    navigation.setTitle('Learn - WordView')
    navigation.emptyHeaderTitle()
    navigation.setHeaderLeft(<HeaderLeft />)
    navigation.setHeaderRight(
      <HeaderRight onPressMag={() => setIndex(1)} onPressCog={() => navigation.go('Settings')} />,
    )
  })

  const [index, setIndex] = useState(0)
  const routes: Route[] = [
    {
      key: 'learn',
      title: 'Learn',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
      component: () => (
        <Main marginTop={2} marginLeft={desktop ? 8 : 0} appNav={props.appNavigation} />
      ),
    },
    {
      key: 'explore',
      title: 'Explore',
      focusedIcon: 'compass',
      unfocusedIcon: 'compass-outline',
      component: () => (
        <Explore marginTop={2} marginLeft={desktop ? 8 : 0} nav={props.navigation} />
      ),
    },
    {
      key: 'progress',
      title: 'Progress',
      focusedIcon: 'chart-line',
      unfocusedIcon: 'chart-line-stacked',
      component: () => (
        <Progress marginTop={2} marginLeft={desktop ? 8 : 0} nav={props.navigation} />
      ),
    },
  ]

  const sceneMap = routes.reduce((map: any, route) => {
    map[route.key] = route.component
    return map
  }, {})

  onUpdate([index], () => {
    const pickedRoute = routes[index]
    navigation.setTitle(`${pickedRoute.title} - WordView`)
  })

  return (
    <>
      {desktop && <SideNavigation routes={routes} setIndex={setIndex} />}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={BottomNavigation.SceneMap(sceneMap)}
        sceneAnimationEnabled={true}
        shifting={false}
        barStyle={desktop && { height: 0 }}
      />
    </>
  )
}

export default Home

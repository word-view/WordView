import { NavigationContainer } from '@react-navigation/native'
import { CombinedDarkTheme } from './theme'
import { createStackNavigator } from '@react-navigation/stack'
import { navStyles } from './nav-styles'
import Home from '../screens/Home/Home'
import Settings from '../screens/Home/Settings'
import Lesson from '../screens/Lesson/Lesson'

const Navigator = createStackNavigator().Navigator
const Screen = createStackNavigator().Screen

interface Props {
  navigation: any
}

function HomeNavigation(props: Props) {
  return (
    <NavigationContainer theme={CombinedDarkTheme} independent={true}>
      <Navigator
        initialRouteName='Home'
        screenOptions={{
          animationEnabled: true,
          headerStyle: navStyles.headerStyle,
          headerTitleStyle: navStyles.headerTitleStyle,
        }}
      >
        <Screen name='Home'>
          {$props => <Home {...$props} appNavigation={props.navigation} />}
        </Screen>
        <Screen name='Settings' component={Settings} />
        <Screen
          name='Lesson'
          component={Lesson}
          options={{ headerTransparent: true, title: '' }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigation

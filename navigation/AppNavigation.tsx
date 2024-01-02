import { NavigationContainer } from '@react-navigation/native'
import { CombinedDarkTheme } from './theme'
import { createStackNavigator } from '@react-navigation/stack'
import AuthNavigation from './AuthNavigation'
import HomeNavigation from './HomeNavigation'

const Navigator = createStackNavigator().Navigator
const Screen = createStackNavigator().Screen

interface Props {
  hideSplashCallback?: any
}

function AppNavigation(props: Props) {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <Navigator
        initialRouteName='auth'
        screenOptions={{
          animationEnabled: true,
          headerShown: false,
        }}
      >
        <Screen name='auth'>
          {$props => (
            <AuthNavigation
              {...$props}
              hideSplashCallback={props.hideSplashCallback}
            />
          )}
        </Screen>
        <Screen name='home' component={HomeNavigation} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

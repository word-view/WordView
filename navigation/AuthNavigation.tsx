import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CombinedDarkTheme } from './theme'
import { navStyles } from './nav-styles'
import Login from '../screens/Auth/Login'
import Welcome from '../screens/Auth/Welcome'
import Register from '../screens/Auth/Register'
import EmailLogin from '../screens/Auth/EmailLogin'
import LanguagePicker from '../screens/Auth/LanguagePicker'

const Navigator = createStackNavigator().Navigator
const Screen = createStackNavigator().Screen

interface Props {
  navigation: any
  hideSplashCallback?: any
}

function AuthNavigation(props: Props) {
  return (
    <NavigationContainer theme={CombinedDarkTheme} independent={true}>
      <Navigator
        initialRouteName='Welcome'
        screenOptions={{
          animationEnabled: true,
          headerStyle: navStyles.headerStyle,
          headerTitleStyle: navStyles.headerTitleStyle,
        }}
      >
        <Screen name='Welcome' options={{ title: 'Bem vindo ao WordView!' }}>
          {$props => (
            <Welcome
              {...$props}
              appNavigation={props.navigation}
              onLayoutRootView={props.hideSplashCallback}
            />
          )}
        </Screen>
        <Screen name='Login'>
          {$props => <Login {...$props} appNavigation={props.navigation} />}
        </Screen>
        <Screen name='Register'>
          {$props => <Register {...$props} appNavigation={props.navigation} />}
        </Screen>
        <Screen name='EmailLogin'>
          {$props => (
            <EmailLogin {...$props} appNavigation={props.navigation} />
          )}
        </Screen>
        <Screen name='LanguagePicker'>
          {$props => (
            <LanguagePicker {...$props} appNavigation={props.navigation} />
          )}
        </Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation

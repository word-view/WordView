import { NavigationContainer } from '@react-navigation/native';
import { CombinedDarkTheme } from './theme';
import { createStackNavigator } from '@react-navigation/stack';
import StartNavigation from './StartNavigation';
import HomeNavigation from './HomeNavigation';
import PlayerNavigation from './PlayerNavigation';

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

interface Props {
  hideSplashCallback?: any;
}

function AppNavigation(props: Props) {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <Navigator
        initialRouteName='start'
        screenOptions={{
          animationEnabled: true,
          headerShown: false,
        }}
      >
        <Screen name='start'>
          {$props => <StartNavigation {...$props} hideSplashCallback={props.hideSplashCallback} />}
        </Screen>
        <Screen name='home' component={HomeNavigation} />
        <Screen name='player' component={PlayerNavigation} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

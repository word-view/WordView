import { NavigationContainer } from '@react-navigation/native';
import { CombinedDarkTheme } from './theme';
import { createStackNavigator } from '@react-navigation/stack';
import { navStyles } from './nav-styles';
import Home from '../Screens/Home/Home';
import Settings from '../Screens/Home/Settings';

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

interface Props {
    navigation: any;
}

function HomeNavigation(props: Props) {
    return (
        <NavigationContainer theme={CombinedDarkTheme} independent={true}>
            <Navigator
                initialRouteName='Home'
                screenOptions={{
                    animationEnabled: true,
                    headerStyle: navStyles.headerStyleV1,
                    headerTitleStyle: navStyles.headerTitleStyle,
                }}
            >
                <Screen name='Home'>
                    {$props => <Home {...$props} appNavigation={props.navigation} />}
                </Screen>
                <Screen name='Settings' component={Settings} />
            </Navigator>
        </NavigationContainer>
    );
}

export default HomeNavigation;

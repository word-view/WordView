import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { CombinedDarkTheme } from './theme';
import { createStackNavigator } from '@react-navigation/stack';
import { navStyles } from './nav-styles';
import Player from '../Screens/Player/Player';
import { StyleSheet } from 'react-native';

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

interface Props {
    navigation: NavigationProp<any, any>;
}

function PlayerNavigation(props: Props) {
    return (
        <NavigationContainer theme={CombinedDarkTheme} independent={true}>
            <Navigator
                initialRouteName='Player'
                screenOptions={{
                    animationEnabled: true,
                    headerStyle: navStyles.headerStyleV1,
                    headerTitleStyle: navStyles.headerTitleStyle,
                }}
            >
                <Screen name='Player'>
                    {$props => <Player {...$props} appNavigation={props.navigation} />}
                </Screen>
            </Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        borderBottomColor: '#1C1B1F',
        shadowColor: '#1C1B1F',
        backgroundColor: '#1C1B1F',
    },
});

export default PlayerNavigation;

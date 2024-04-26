import { NavigationContainer } from '@react-navigation/native';
import { CombinedDarkTheme } from './theme';
import { createStackNavigator } from '@react-navigation/stack';
import { navStyles } from './nav-styles';
import React from 'react';
import Player from '../Screens/Player/Player';
import { StyleSheet } from 'react-native';
import TutorialWelcome from '../Screens/Player/Tutorial/TutorialWelcome';
import TutorialFinish from '../Screens/Player/Tutorial/TutorialFinish';

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

interface Props {
  navigation: any;
}

function PlayerNavigation(props: Props) {
  return (
    <NavigationContainer theme={CombinedDarkTheme} independent={true}>
      <Navigator
        initialRouteName='Player'
        screenOptions={{
          animationEnabled: true,
          headerStyle: styles.headerStyle,
          headerTitleStyle: navStyles.headerTitleStyle,
        }}
      >
        <Screen name='Player'>
          {$props => <Player {...$props} appNavigation={props.navigation} />}
        </Screen>
        <Screen name='TutorialWelcome'>
          {$props => <TutorialWelcome {...$props} appNavigation={props.navigation} />}
        </Screen>
        <Screen name='TutorialFinish'>
          {$props => <TutorialFinish {...$props} appNavigation={props.navigation} />}
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

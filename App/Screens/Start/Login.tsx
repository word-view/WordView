import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { Text } from 'react-native-paper';
import { Button, DesktopModeProvider, Input } from '../../Components';
import { Navigation } from '../../Navigation/Navigation';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Props {
  appNavigation: any;
  navigation: any;
}

export default function Login(props: Props) {
  const desktop = useContext(DesktopModeProvider);

  const navigation = new Navigation(props.navigation);
  const appNavigation = new Navigation(props.appNavigation);

  const inputDimensions = { w: 400, h: 55 };
  const inputMobileDimensions = { w: 375, h: 60 };

  return (
    <View style={styles.root}>
      <Text style={[styles.text, { marginTop: hp(5) }]}>Welcome back!</Text>
      <Input
        label='Email'
        style={{ marginTop: hp(5) }}
        dimensions={inputDimensions}
        mobileDimensions={inputMobileDimensions}
      />
      <Input
        label='Password'
        secure={true}
        style={{ marginTop: hp(2.5) }}
        dimensions={inputDimensions}
        mobileDimensions={inputMobileDimensions}
      />
      <Button
        text='Log in'
        textColor='white'
        buttonColor='#8951FF'
        style={{ marginTop: hp(5) }}
        dimensions={inputDimensions}
        mobileDimensions={inputMobileDimensions}
        onPress={() => appNavigation.go('home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1C1B1F',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 30,
    textAlign: 'center',
    color: '#CAC4D0',
  },
});

import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '../../Components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Navigation } from '../../Navigation/Navigation';
import { onMount } from '../../../Framework/Components/Actions';
import images from '../../image';

interface Props {
  appNavigation: any;
  navigation: any;
  onLayoutRootView: any;
}

export default function Welcome(props: Props) {
  const navigation = new Navigation(props.navigation);

  onMount(() => navigation.hideHeader());

  const buttonDimensions = { w: 400, h: 55 };
  const buttonMobileDimensions = { w: 375, h: 60 };

  return (
    <View style={styles.root} onLayout={props.onLayoutRootView}>
      <View style={styles.logo}>
        <Image style={styles.icon} source={images.wvIcon} />
        <Image style={styles.title} source={images.wvTitle} />

        <Text style={styles.text}>The smart way to learn{'\n'}a language</Text>
      </View>

      <Button
        text='Start learning'
        textColor='white'
        buttonColor='#8951FF'
        style={{ marginTop: hp(20) }}
        dimensions={buttonDimensions}
        mobileDimensions={buttonMobileDimensions}
        onPress={() => navigation.go('LanguagePicker')}
      />

      <Button
        text='I have a account already'
        textColor='#B3B3B3'
        buttonColor='#2C2831'
        style={{ marginTop: hp(3) }}
        dimensions={buttonDimensions}
        mobileDimensions={buttonMobileDimensions}
        onPress={() => navigation.go('Login')}
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
  logo: { alignItems: 'center', top: 0, marginTop: hp(15) },
  icon: {
    height: 82,
    width: 101,
    marginBottom: 15,
  },
  title: {
    height: 36,
    width: 220,
    marginBottom: 15,
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    textAlign: 'center',
    color: '#B3B3B3',
  },
});

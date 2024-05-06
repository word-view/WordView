import { useContext } from 'react';
import { Button, ContentHolder, DesktopModeProvider } from '../../Components';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Navigation } from '../../Navigation/Navigation';
import { onMount } from '../../../Framework/Components/Actions';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Props {
  appNavigation: any;
  navigation: any;
}

export default function LanguagePicker(props: Props) {
  const desktop = useContext(DesktopModeProvider);
  const navigation = new Navigation(props.navigation);
  const appNavigation = new Navigation(props.appNavigation);

  onMount(() => {
    navigation.setTitle('Pick a language');
  });

  const inputDimensions = { w: 600, h: 60 };
  const inputMobileDimensions = { w: 375, h: 60 };

  return (
    <View style={styles.root}>
      <Button
        text='🇯🇵 Japanese'
        textColor='white'
        buttonColor='#ff6363'
        style={{ marginTop: hp(5) }}
        dimensions={inputDimensions}
        mobileDimensions={inputMobileDimensions}
        onPress={() => appNavigation.go('home')}
      />
      <Button
        text='🇧🇷 Brazilian Portuguese'
        textColor='white'
        buttonColor='#6bff63'
        style={{ marginTop: hp(2.5) }}
        dimensions={inputDimensions}
        mobileDimensions={inputMobileDimensions}
        onPress={() => appNavigation.go('home')}
      />
      <Button
        text='🇺🇸 American English'
        textColor='white'
        buttonColor='#63b9ff'
        style={{ marginTop: hp(2.5) }}
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
});

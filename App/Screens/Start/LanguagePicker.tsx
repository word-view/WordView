import { Button } from '../../Components';
import { StyleSheet, View } from 'react-native';
import { Navigation } from '../../Navigation/Navigation';
import { onMount } from '../../../Framework/Components/Actions';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../colors';

interface Props {
  appNavigation: any;
  navigation: any;
}

export default function LanguagePicker(props: Props) {
  const navigation = new Navigation(props.navigation);
  const appNavigation = new Navigation(props.appNavigation);

  onMount(() => {
    navigation.setTitle('Pick a language');
  });

  const dimensions = { w: 600, h: 60 };
  const mobileDimensions = { w: 375, h: 60 };

  return (
    <View style={styles.root}>
      <Button
        text='🇯🇵 Japanese'
        textColor='white'
        buttonColor='#ff6363'
        style={{ marginTop: hp(5) }}
        dimensions={dimensions}
        mobileDimensions={mobileDimensions}
        onPress={() => appNavigation.go('home')}
      />
      <Button
        text='🇧🇷 Brazilian Portuguese'
        textColor='white'
        buttonColor='#6bff63'
        style={{ marginTop: hp(2.5) }}
        dimensions={dimensions}
        mobileDimensions={mobileDimensions}
        onPress={() => appNavigation.go('home')}
      />
      <Button
        text='🇺🇸 American English'
        textColor='white'
        buttonColor='#63b9ff'
        style={{ marginTop: hp(2.5) }}
        dimensions={dimensions}
        mobileDimensions={mobileDimensions}
        onPress={() => appNavigation.go('home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});

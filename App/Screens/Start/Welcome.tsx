import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '../../Components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Navigation } from '../../Navigation/Navigation';
import { onMount } from '../../../Framework/Components/Actions';
import images from '../../image';
import { colors } from '../../colors';
import { NavigationProp } from '@react-navigation/native';

interface Props {
    appNavigation: NavigationProp<any, any>;
    navigation: NavigationProp<any, any>;
    onLayoutRootView: any;
}

export default function Welcome(props: Props) {
    const navigation = new Navigation(props.navigation);

    onMount(() => navigation.hideHeader());

    const dimensions = { w: 400, h: 55 };
    const mobileDimensions = { w: 375, h: 60 };

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
                buttonColor={colors.accent}
                style={{ marginTop: hp(20) }}
                dimensions={dimensions}
                mobileDimensions={mobileDimensions}
                onPress={() => navigation.go('LanguagePicker')}
            />

            <Button
                text='I have a account already'
                textColor={colors.text}
                buttonColor={colors.interface}
                style={{ marginTop: hp(3) }}
                dimensions={dimensions}
                mobileDimensions={mobileDimensions}
                onPress={() => navigation.go('Login')}
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
        color: colors.text,
    },
});

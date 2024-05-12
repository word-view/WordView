import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button, Input } from '../../Components';
import { Navigation } from '../../Navigation/Navigation';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../colors';

interface Props {
    appNavigation: any;
    navigation: any;
}

export default function Login(props: Props) {
    const appNavigation = new Navigation(props.appNavigation);

    const dimensions = { w: 400, h: 55 };
    const mobileDimensions = { w: 375, h: 60 };

    return (
        <View style={styles.root}>
            <Text style={[styles.text, { marginTop: hp(5) }]}>Welcome back!</Text>
            <Input
                label='Email'
                style={{ marginTop: hp(5) }}
                dimensions={dimensions}
                mobileDimensions={mobileDimensions}
            />
            <Input
                label='Password'
                secure={true}
                style={{ marginTop: hp(2.5) }}
                dimensions={dimensions}
                mobileDimensions={mobileDimensions}
            />
            <Button
                text='Log in'
                textColor='white'
                buttonColor={colors.accent}
                style={{ marginTop: hp(5) }}
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
    text: {
        fontFamily: 'OpenSans',
        fontSize: 30,
        textAlign: 'center',
        color: colors.text,
    },
});

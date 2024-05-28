import { memo, useState } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { ContinueHearing, Welcome } from './Sections';
import { onMountAsync } from '../../../Framework/Components/Actions';
import { checkAPIAvailable } from '../../API/check';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import images from '../../image';
import { colors } from '../../colors';

interface MainScreenProps {
    marginLeft?: number;
    marginTop?: number;
    appNav: any;
}

function Main(props: MainScreenProps) {
    const isFirstLaunch = false;
    const [connectionAvailable, setConnectionAvailable] = useState<boolean>(true);

    onMountAsync(async () => setConnectionAvailable(await checkAPIAvailable()));

    if (!connectionAvailable) {
        return (
            <ScrollView
                style={{ marginLeft: wp(props.marginLeft ?? 0) }}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image style={styles.radio} source={images.radio} />
                <Text variant='headlineMedium' style={styles.errorTitle}>
                    Sem acesso a internet
                </Text>
                <Text variant='headlineSmall' style={styles.errorDescription}>
                    Não foi possível acessar o servidor. {'\n'} Verifique sua conexão com a internet
                </Text>
            </ScrollView>
        );
    }

    return (
        <ScrollView>
            {isFirstLaunch ? (
                <Welcome
                    marginTop={props.marginTop}
                    marginLeft={props.marginLeft}
                    appNav={props.appNav}
                />
            ) : (
                <ContinueHearing
                    marginTop={props.marginTop}
                    marginLeft={props.marginLeft}
                    appNav={props.appNav}
                />
            )}
        </ScrollView>
    );
}

export default memo(Main);

const styles = StyleSheet.create({
    radio: {
        height: 320,
        width: 300,
        marginTop: 20,
    },
    errorTitle: {
        fontFamily: 'OpenSans',
        fontWeight: '700',
        marginTop: 12,
        color: colors.icon,
    },
    errorDescription: {
        fontFamily: 'OpenSans',
        marginTop: 4,
        textAlign: 'center',
        color: colors.iconDarker,
    },
});

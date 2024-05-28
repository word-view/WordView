import { memo, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { ContinueHearing, Welcome } from './Sections';
import { onMountAsync } from '../../../Framework/Components/Actions';
import { checkAPIAvailable } from '../../API/check';
import images from '../../image';

interface MainScreenProps {
    marginLeft?: number;
    marginTop?: number;
    appNav: any;
}

function Main(props: MainScreenProps) {
    const isFirstLaunch = false;
    const [connectionAvailable, setConnectionAvailable] = useState<boolean>();

    onMountAsync(async () => {
        setConnectionAvailable(await checkAPIAvailable());
        console.log(await checkAPIAvailable());
    });

    if (!connectionAvailable) {
        return <ScrollView></ScrollView>;
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

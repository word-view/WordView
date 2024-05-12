import { memo } from 'react';
import { Icon, Text, TouchableRipple } from 'react-native-paper';
import { Route } from './SideNavigation';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

interface SidebarItemProps {
    onPress?: () => void;
    route: Route;
}

function $SidebarItem(props: SidebarItemProps) {
    return (
        <TouchableRipple
            onPress={props.onPress}
            rippleColor='#CAC4D04D'
            borderless={true}
            style={styles.touchable}
        >
            <>
                <Icon source={props.route.focusedIcon} color='#CAC4D0' size={24} />
                <Text variant='labelSmall'>{props.route.title}</Text>
            </>
        </TouchableRipple>
    );
}

const styles = StyleSheet.create({
    touchable: {
        borderRadius: 5,
        padding: 10,
        marginTop: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
        width: 58,
    },
});

export const SidebarItem = memo($SidebarItem);

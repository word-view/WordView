import { memo, useContext, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Switch, Text } from 'react-native-paper';
import { DesktopModeProvider } from '../Provider';

interface SettingEntryProps {
    title: string;
    description?: string;
    type: 'switch';
    settingDaemonId: string;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

function $SettingEntry(props: SettingEntryProps) {
    const desktop = useContext(DesktopModeProvider);

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => {
        if (props.disabled) return;
        setIsSwitchOn(!isSwitchOn);
    };

    return (
        <View
            style={[
                styles.background,
                desktop ? { width: wp(45) } : { width: wp(95) },
                props.style,
                !props.description && { height: 50 },
                props.disabled && styles.disabled,
            ]}
        >
            <View style={styles.entryInfo}>
                <Text variant='bodyLarge' style={styles.title}>
                    {props.title}
                </Text>
                {props.description && (
                    <Text variant='bodySmall' style={styles.description}>
                        {props.description}
                    </Text>
                )}
            </View>

            <View style={[styles.settingActivationArea]}>
                <Switch
                    style={{ alignSelf: 'flex-end' }}
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    disabled: {
        opacity: 0.5,
    },
    entryInfo: {
        width: '75%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    settingActivationArea: {
        width: '25%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    background: {
        backgroundColor: '#2C2831',
        height: 70,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
    },
    title: {
        fontWeight: '700',
    },
    description: {
        color: '#A5A3A7',
    },
});

export const SettingEntry = memo($SettingEntry);

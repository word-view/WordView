import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { useContext } from 'react';
import { DesktopModeProvider } from '../Provider';

interface DiffFlareProps {
    type: 'starter' | 'intermidiate' | 'advanced';
    style?: StyleProp<ViewStyle>;
}

export function DiffFlare(props: DiffFlareProps) {
    const desktop = useContext(DesktopModeProvider);

    let color, label;

    switch (props.type) {
        case 'starter':
            color = '#5EC956';
            label = 'Iniciante';
            break;
        case 'intermidiate':
            color = '#CABD56';
            label = 'Intermediário';
            break;
        case 'advanced':
            color = '#C95456';
            label = 'Avançado';
            break;
    }

    return (
        <View
            style={[
                {
                    backgroundColor: color,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    width: 100,
                    padding: 5,
                },
                props.style,
                desktop ? { height: 25 } : { height: 30 },
            ]}
        >
            <Text variant='titleSmall' style={{ fontWeight: 'bold' }}>
                {label}
            </Text>
        </View>
    );
}

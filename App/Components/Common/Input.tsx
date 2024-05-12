import { memo, useContext } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import { DesktopModeProvider } from '../Provider';

interface Props {
    label: string;
    style?: StyleProp<TextStyle>;
    secure?: boolean;
    dimensions: { w: number; h: number };
    mobileDimensions: { w: number; h: number };
    onChangeText?: ((text: string) => void) & Function;
    value?: string;
}

function $Input(props: Props) {
    const desktop = useContext(DesktopModeProvider);

    return (
        <TextInput
            mode='outlined'
            testID='input'
            value={props.value}
            label={props.label}
            style={[
                {
                    width: desktop ? props.dimensions.w : props.mobileDimensions.w,
                    height: desktop ? props.dimensions.h : props.mobileDimensions.h,
                    backgroundColor: '#49454FFF',
                },
                props.style,
            ]}
            outlineStyle={{ borderRadius: 20 }}
            textColor='#CAC4D0'
            secureTextEntry={props.secure}
            outlineColor='#49454FFF'
            activeOutlineColor='#D0BCFFFF'
            onChangeText={props.onChangeText}
        />
    );
}

export const Input = memo($Input);

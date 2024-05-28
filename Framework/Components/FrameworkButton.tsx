import { Surface, TouchableRipple, Text } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import color from 'color';

interface FrameworkButtonProps {
    text: string;
    textColor: string;
    buttonColor: string;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
    dimensions: { w: number; h: number };
    borderRadius?: number;
    fontWeight?:
        | '100'
        | 'bold'
        | 'normal'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900'
        | undefined;
    children?: React.JSX.Element;
    gradientColors?: string[];
}

/**
 * A customizable button component that may be styled and extended to match the design of the app.
 * @param {FrameworkButtonProps} props - The properties for this component
 * @returns {JSX.Element} The button itself
 */
export function FrameworkButton(props: FrameworkButtonProps): JSX.Element {
    const buttonStyling = {
        width: props.dimensions.w,
        height: props.dimensions.h,
        borderRadius: props.borderRadius,
    };

    const testID = 'framework-button';

    return (
        <Surface
            style={[
                { backgroundColor: props.buttonColor, elevation: 1 },
                buttonStyling,
                props.style,
            ]}
            testID={`${testID}-container`}
        >
            <TouchableRipple
                borderless
                rippleColor={color(props.textColor).alpha(0.12).rgb().string()}
                onPress={props.onPress}
                style={[buttonStyling, { alignItems: 'center', justifyContent: 'center' }]}
                testID={testID}
            >
                <LinearGradient
                    colors={props.gradientColors ?? ['transparent', 'rgba(28,27,31,0.5)']}
                    end={{ x: 0, y: 0 }}
                    style={[buttonStyling, { alignItems: 'center', justifyContent: 'center' }]}
                    testID={`${testID}-gradient`}
                >
                    <Text
                        variant='labelLarge'
                        selectable={false}
                        numberOfLines={1}
                        testID={`${testID}-text`}
                        style={{
                            fontWeight: props.fontWeight ?? '400',
                            color: props.textColor,
                            fontFamily: 'OpenSans',
                        }}
                    >
                        {props.text}
                    </Text>
                </LinearGradient>
            </TouchableRipple>
        </Surface>
    );
}

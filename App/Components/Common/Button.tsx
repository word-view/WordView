import { StyleProp, ViewStyle } from 'react-native';
import { memo, useContext } from 'react';
import { FrameworkButton } from '../../../Framework/Components/FrameworkButton';
import { DesktopModeProvider } from '../Provider';

interface ButtonProps {
  text: string;
  textColor: string;
  buttonColor: string;
  style?: StyleProp<ViewStyle>;
  dimensions: { w: number; h: number };
  mobileDimensions: { w: number; h: number };
  onPress: () => void;
}

function $Button(props: ButtonProps) {
  const desktop = useContext(DesktopModeProvider);

  return (
    <FrameworkButton
      text={props.text}
      textColor={props.textColor}
      buttonColor={props.buttonColor}
      fontWeight='600'
      style={props.style}
      dimensions={desktop ? props.dimensions : props.mobileDimensions}
      borderRadius={20}
      gradientColors={
        // for some reason the orders get inverted between mobile and desktop
        desktop ? ['rgba(28,27,31,0.5)', 'transparent'] : ['transparent', 'rgba(28,27,31,0.5)']
      }
      onPress={props.onPress}
    />
  );
}

export const Button = memo($Button);

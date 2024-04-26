import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Button as RNPButton } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { memo, useContext } from 'react';
import { DesktopModeProvider } from '../Provider';

interface ButtonProps {
  text: string;
  icon?: string;
  disabled?: boolean;
  color: {
    text: string;
    button: string;
  };
  /** As heightPercentageToDP */
  marginTop?: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  pressable?: boolean;
}

function $Button(props: ButtonProps) {
  const desktop = useContext(DesktopModeProvider);

  return (
    <RNPButton
      mode='elevated'
      disabled={props.disabled}
      textColor={props.color.text}
      icon={props.icon}
      buttonColor={props.color.button}
      onPress={() => {
        if (props.pressable || props.pressable == undefined) props.onPress();
      }}
      style={{ marginTop: hp(props.marginTop ?? 0), borderRadius: 10 }}
      labelStyle={[{ fontWeight: '600' }, desktop && { fontSize: 16 }]}
      contentStyle={[
        styles.button,
        desktop ? desktopStyles.button : mobileStyles.button,
        props.style,
      ]}
    >
      {props.text}
    </RNPButton>
  );
}

const mobileStyles = StyleSheet.create({
  button: {
    width: wp(90),
  },
});

const desktopStyles = StyleSheet.create({
  button: {
    width: wp(30),
  },
});

const styles = StyleSheet.create({
  button: {
    height: 55,
  },
});

export const Button = memo($Button);

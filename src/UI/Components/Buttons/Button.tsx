import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ResponsiveChecker from "../Backend/ResponsiveChecker";
import { memo } from "react";

interface DefaultButtonProps {
  children: any;
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

function DefaultButton(props: DefaultButtonProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <Button
      mode="elevated"
      disabled={props.disabled}
      textColor={props.color.text}
      icon={props.icon}
      buttonColor={props.color.button}
      onPress={() => {
        if (props.pressable || props.pressable == undefined) props.onPress();
      }}
      style={{ marginTop: hp(props.marginTop ?? 0), borderRadius: 10 }}
      labelStyle={[{ fontWeight: "600" }, isDesktop && { fontSize: 16 }]}
      contentStyle={[
        styles.button,
        isDesktop ? desktopStyles.button : mobileStyles.button,
        props.style,
      ]}
    >
      {props.children}
    </Button>
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
    height: 60,
  },
});

export default memo(DefaultButton);

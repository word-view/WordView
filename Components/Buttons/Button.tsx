import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ResponsiveChecker from "../Backend/ResponsiveChecker";

interface DefaultButtonProps {
  children: any;
  icon?: string;
  color: {
    text: string;
    button: string;
  };
  /** As heightPercentageToDP */
  marginTop?: number;
  onPress: () => void;
}

export default function DefaultButton(props: DefaultButtonProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <Button
      mode="elevated"
      textColor={props.color.text}
      icon={props.icon}
      buttonColor={props.color.button}
      onPress={props.onPress}
      style={{ marginTop: hp(props.marginTop ?? 0), borderRadius: 5 }}
      labelStyle={isDesktop && { fontSize: 16 }}
      contentStyle={[
        styles.button,
        isDesktop ? desktopStyles.button : mobileStyles.button,
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

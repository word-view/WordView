import { View, Image, StyleSheet } from "react-native";
import React from "react";
import images from "../images";
import globalStyles from "../globalStyles";
import UnderlineTextButton from "../Components/Login&Register/UnderlineTextButton";
import Button from "../Components/Button";
import CredentialsInput from "../Components/Login&Register/CredentialsInput";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../BackendComponents/ResponsiveChecker";
import { ReactiveComponent } from "../Components/types";

function InputContainer({
  isDesktop,
  navigation,
}: ReactiveComponent & { navigation: any }) {
  return (
    <View
      style={[
        globalStyles.container,
        { width: isDesktop ? "50%" : "100%" },
        isDesktop ? desktopStyles.logoContainer : mobileStyles.inputContainer,
      ]}
    >
      <CredentialsInput
        placeholder="email@email.com"
        placeholderTextColor="#CECECE"
        label="Email"
        labelColor="white"
      />
      <CredentialsInput
        placeholder="********"
        placeholderTextColor="#CECECE"
        label="Senha"
        labelColor="white"
        secure={true}
        style={{
          marginTop: isDesktop ? hp(5) : hp(1.5),
        }}
      />
      <UnderlineTextButton
        text="Esqueceu sua senha?"
        pressableAlign="flex-end"
        pressAction={() => navigation.navigate("Home")}
        {...{ isDesktop }}
      />
      <Button
        text="Entrar"
        color="#8951FF"
        textColor="white"
        style={{
          marginTop: isDesktop ? hp(7.5) : hp(4),
        }}
      />
      <UnderlineTextButton
        text="Crie sua conta"
        pressableAlign="center"
        pressAction={() => navigation.navigate("Register")}
        style={{
          marginTop: isDesktop ? hp(2) : hp(3),
        }}
        {...{ isDesktop }}
      />
    </View>
  );
}

export default function Login({ navigation }: ScreenProps) {
  const { isDesktop } = ResponsiveChecker();

  return (
    <View
      style={{
        height: "100%",
        flexDirection: isDesktop ? "row" : "column",
        backgroundColor: "#353535",
      }}
    >
      <View
        style={[
          globalStyles.container,
          { width: isDesktop ? "50%" : "100%" },
          isDesktop ? desktopStyles.logoContainer : mobileStyles.logoContainer,
        ]}
      >
        <Image style={globalStyles.wvIcon} source={images.wvIcon} />
        <Image style={globalStyles.wvTitle} source={images.wvTitle} />
      </View>

      <InputContainer {...{ isDesktop, navigation }} />
    </View>
  );
}

const desktopStyles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mobileStyles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    height: 150,
    paddingTop: hp(20),
    zIndex: 20,
  },
  inputContainer: {
    position: "absolute",
    paddingTop: hp(32.5),
  },
});

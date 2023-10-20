import { View, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import images from "../images";
import globalStyles from "../globalStyles";
import UnderlineTextButton from "../Components/Login&Register/UnderlineTextButton";
import CredentialsInput from "../Components/Login&Register/CredentialsInput";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ReactiveComponent } from "../Components/types";
import { Button, TextInput } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Register(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  useEffect(() => {
    scrProps.navigation.setOptions({ title: "" });
  });

  return (
    <View
      style={[
        styles.background,
        { flexDirection: isDesktop ? "row" : "column" },
      ]}
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

      <InputContainer isDesktop={isDesktop} navigation={scrProps.navigation} />
    </View>
  );
}

function InputContainer({
  isDesktop,
  navigation,
}: ReactiveComponent & { navigation: any }) {
  function goLogin() {
    navigation.navigate("Login");
  }

  return (
    <View
      style={[
        globalStyles.container,
        { width: isDesktop ? "50%" : "100%" },
        isDesktop ? desktopStyles.logoContainer : mobileStyles.inputContainer,
      ]}
    >
      <TextInput
        label="Email"
        mode="flat"
        style={{
          backgroundColor: "#4C4850",
          marginTop: hp(2.5),
        }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
      />
      <TextInput
        label="Senha"
        mode="flat"
        secureTextEntry={true}
        style={{
          backgroundColor: "#4C4850",
          marginTop: hp(2.5),
        }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
      />
      <TextInput
        label="Repita a senha"
        mode="flat"
        secureTextEntry={true}
        style={{
          backgroundColor: "#4C4850",
          marginTop: hp(2.5),
        }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
      />
      <Button
        mode="elevated"
        textColor="white"
        buttonColor="#8951FF"
        style={{ marginTop: hp(10), borderRadius: 5 }}
        labelStyle={isDesktop && { fontSize: 16 }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
      >
        Entrar
      </Button>
      <Button
        mode="text"
        onPress={goLogin}
        style={{
          marginTop: isDesktop ? hp(2) : hp(3),
        }}
      >
        Entre na sua conta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "#2C2831",
  },
  button: {
    height: 60,
  },
});

const desktopStyles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: wp(30),
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
  button: {
    width: wp(90),
  },
});

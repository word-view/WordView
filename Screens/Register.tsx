import { View, Image, StyleSheet } from "react-native";
import React from "react";
import images from "../images";
import globalStyles from "../globalStyles";
import UnderlineTextButton from "../Components/Login&Register/UnderlineTextButton";
import Button from "../Components/Button";
import CredentialsInput from "../Components/Login&Register/CredentialsInput";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/BackendComponents/ResponsiveChecker";
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
      <CredentialsInput
        placeholder="********"
        placeholderTextColor="#CECECE"
        label="Repita a senha"
        labelColor="white"
        secure={true}
        style={{
          marginTop: isDesktop ? hp(5) : hp(1.5),
        }}
      />
      <Button
        text="Criar"
        color="#8951FF"
        textColor="white"
        style={{ marginTop: 50 }}
      />
      <UnderlineTextButton
        text="Entre na sua conta"
        pressableAlign="center"
        style={{ marginTop: 25 }}
        pressAction={() => navigation.navigate("Login")}
      />
    </View>
  );
}

export default function Register({ navigation, testing }: ScreenProps) {
  const isDesktop = testing ? true : ResponsiveChecker().isDesktop;

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

      <InputContainer {...{ isDesktop, navigation }} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "#353535",
  },
});

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

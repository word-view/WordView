import { View, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import images from "../images";
import globalStyles from "../globalStyles";
import UnderlineTextButton from "../Components/Login&Register/UnderlineTextButton";
import Button from "../Components/Button";
import CredentialsInput from "../Components/Login&Register/CredentialsInput";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ReactiveComponent } from "../Components/types";
import { login } from "../modules/api";

export default function Login(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <View
      style={[
        { flexDirection: isDesktop ? "row" : "column" },
        styles.container,
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value: string) => setEmail(value);
  const handlePasswordChange = (value: string) => setPassword(value);

  async function confirmLogin() {
    const response = await login(email, password);

    if (response.status == 201) {
      navigation.navigate("Home");
    } else {
      showError(response.data);
    }
  }

  function goHome() {
    navigation.navigate("Home");
  }
  function goRegister() {
    navigation.navigate("Register");
  }

  function showError(message: string) {}

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
        onChangeText={handleEmailChange}
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
        onChangeText={handlePasswordChange}
      />
      <UnderlineTextButton
        text="Esqueceu sua senha?"
        pressableAlign="flex-end"
        onPress={goHome} // debug
      />
      <Button
        text="Entrar"
        color="#8951FF"
        textColor="white"
        style={{
          marginTop: isDesktop ? hp(7.5) : hp(4),
        }}
        onPress={confirmLogin}
      />
      <UnderlineTextButton
        text="Crie sua conta"
        pressableAlign="center"
        onPress={goRegister}
        style={{
          marginTop: isDesktop ? hp(2) : hp(3),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

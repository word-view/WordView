import { View, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import images from "../images";
import globalStyles from "../globalStyles";
import { Button, TextInput } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ReactiveComponent } from "../Components/types";
import { login } from "../modules/api";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Text } from "react-native-paper";

export default function Login(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  useEffect(() => {
    scrProps.navigation.setOptions({ title: "" });
  });

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View
        style={[
          globalStyles.container,
          { marginBottom: hp(10), marginTop: hp(2.5) },
        ]}
      >
        <Text variant="displaySmall">Bem vindo de volta!</Text>
      </View>

      <View
        style={[globalStyles.container, { width: isDesktop ? wp(25) : wp(90) }]}
      >
        <Button
          icon="email"
          mode="elevated"
          buttonColor="#8951FF"
          textColor="white"
          style={{
            width: "90%",
            alignSelf: "center",
            marginBottom: hp(2),
          }}
          onPress={() => console.log("Pressed")}
        >
          Login usando o email
        </Button>
        <Button
          icon="google"
          mode="elevated"
          buttonColor="white"
          textColor="black"
          style={{
            width: "90%",
            alignSelf: "center",
          }}
          onPress={() => console.log("Pressed")}
        >
          Login com o Google
        </Button>

        <Button
          mode="text"
          onPress={() => {}}
          style={{
            marginTop: isDesktop ? hp(2) : hp(3),
            alignSelf: "center",
          }}
        >
          Ou crie sua conta
        </Button>
      </View>
    </ScrollView>
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
    }
  }

  function goHome() {
    navigation.navigate("Home");
  }
  function goRegister() {
    navigation.navigate("Register");
  }
  return (
    <View
      style={[globalStyles.container, { width: isDesktop ? "50%" : "100%" }]}
    >
      <TextInput
        label="Email"
        mode="flat"
        style={{ backgroundColor: "#4C4850" }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
        onChangeText={handleEmailChange}
      />
      <TextInput
        label="Senha"
        mode="flat"
        secureTextEntry={true}
        style={{
          backgroundColor: "#4C4850",
          marginTop: hp(5),
        }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
        onChangeText={handlePasswordChange}
      />
      <View style={isDesktop ? desktopStyles.button : mobileStyles.button}>
        <Button
          mode="text"
          onPress={goHome}
          style={{ marginTop: hp(2), alignSelf: "flex-end" }}
        >
          Esqueceu sua senha?
        </Button>
      </View>

      <Button
        mode="elevated"
        textColor="white"
        buttonColor="#8951FF"
        onPress={confirmLogin}
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
        onPress={goRegister}
        style={{
          marginTop: isDesktop ? hp(2) : hp(3),
        }}
      >
        Crie sua conta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  button: {
    width: wp(90),
  },
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

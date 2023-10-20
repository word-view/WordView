import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import images from "../images";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { WelcomeScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { Button } from "react-native-paper";

export default function Welcome({
  navigation,
  onLayoutRootView,
}: WelcomeScreenProps) {
  const { isDesktop } = ResponsiveChecker();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image style={styles.wvIcon} source={images.wvIcon} />
      <Image style={styles.wvTitle} source={images.wvTitle} />
      <Text style={styles.wvText}>
        A maneira inteligente de {"\n"} aprender idiomas
      </Text>

      <Button
        mode="elevated"
        textColor="white"
        buttonColor="#8951FF"
        onPress={() => navigation.navigate("PickLanguage")}
        style={{ marginTop: hp(15), borderRadius: 5 }}
        labelStyle={isDesktop && { fontSize: 16 }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
      >
        Começar
      </Button>

      <Button
        mode="elevated"
        buttonColor="#5171ff"
        textColor="white"
        onPress={() => navigation.navigate("PickLanguage")}
        style={{ marginTop: hp(2), borderRadius: 5 }}
        labelStyle={isDesktop && { fontSize: 16 }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
      >
        Testar sem uma conta
      </Button>

      <Button
        mode="elevated"
        buttonColor="white"
        textColor="black"
        onPress={() => navigation.navigate("Login")}
        style={{ marginTop: hp(2), borderRadius: 5 }}
        labelStyle={isDesktop && { fontSize: 16 }}
        contentStyle={[
          styles.button,
          isDesktop ? desktopStyles.button : mobileStyles.button,
        ]}
      >
        Já tenho uma conta
      </Button>
    </View>
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
  container: {
    flex: 1,
    backgroundColor: "#2C2831",
    alignItems: "center",
    justifyContent: "center",
  },
  wvIcon: {
    height: 82,
    width: 101,
    marginBottom: 15,
  },
  wvTitle: {
    height: 36,
    width: 220,
    marginBottom: 15,
  },
  wvText: {
    fontFamily: "OpenSansSBold",
    fontSize: 20,
    textAlign: "center",
    color: "#B3B3B3",
  },
});

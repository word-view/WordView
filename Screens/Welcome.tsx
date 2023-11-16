import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import images from "../images";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { WelcomeScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import Button from "../Components/Buttons/Button";

export default function Welcome({
  navigation,
  onLayoutRootView,
}: WelcomeScreenProps) {
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
        color={{ text: "white", button: "#8951FF" }}
        onPress={() => navigation.navigate("Register")}
        marginTop={15}
      >
        Começar
      </Button>
      <Button
        color={{ text: "white", button: "#5171ff" }}
        onPress={() => navigation.navigate("PickLanguage")}
        marginTop={2}
      >
        Testar sem uma conta
      </Button>
      <Button
        color={{ text: "black", button: "white" }}
        onPress={() => navigation.navigate("Login")}
        marginTop={2}
      >
        Já tenho uma conta
      </Button>
    </View>
  );
}

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

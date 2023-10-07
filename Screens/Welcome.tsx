import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import images from "../images";
import Button from "../Components/Button";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { WelcomeScreenProps } from "./types";

export default function Welcome({
  navigation,
  onLayoutRootView,
}: WelcomeScreenProps) {
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image style={styles.wvIcon} source={images.wvIcon} />
      <Image style={styles.wvTitle} source={images.wvTitle} />
      <Text style={styles.wvText}>
        A maneira inteligente de {"\n"} aprender idiomas
      </Text>
      <Button
        text="Começar"
        color="#8951FF"
        textColor="white"
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: hp(15) }}
      />
      <Button
        text="Já tenho uma conta"
        color="white"
        textColor="black"
        onPress={() => navigation.navigate("Login")}
        style={{ marginTop: hp(2) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
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

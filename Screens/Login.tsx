import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import globalStyles from "../globalStyles";
import { Button } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Text } from "react-native-paper";

export default function Login(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  useEffect(() => {
    scrProps.navigation.setOptions({ title: "" });
  });

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={!isDesktop && { backgroundColor: "#2C2831" }}
    >
      <View
        style={[
          { marginTop: hp(5) },
          isDesktop && {
            backgroundColor: "#2C2831",

            padding: 15,
            paddingBottom: 35,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      >
        <View style={[globalStyles.container, { marginBottom: hp(10) }]}>
          <Text variant="displaySmall">Bem vindo de volta!</Text>
        </View>

        <View
          style={[
            globalStyles.container,
            { width: isDesktop ? wp(25) : wp(90) },
          ]}
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
            onPress={() => scrProps.navigation.navigate("PickLanguage")}
            style={{
              marginTop: isDesktop ? hp(2) : hp(3),
              alignSelf: "center",
            }}
          >
            Ou crie sua conta
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

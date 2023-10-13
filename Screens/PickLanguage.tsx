import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LanguageBar from "../Components/PickLanguage/LanguageBar";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";

export default function PickLanguage({ navigation }: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <>
      <View style={[styles.header, isDesktop ? { height: 60 } : {}]}>
        <Text
          style={[
            styles.infoText,
            isDesktop
              ? { alignSelf: "flex-start", marginLeft: 25, fontSize: 22 }
              : {},
          ]}
        >
          Que idioma você quer aprender?
        </Text>
      </View>
      <View style={styles.container}>
        <ScrollView style={{ marginTop: 15, width: "100%" }}>
          {isDesktop ? (
            <>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <LanguageBar text="Inglês" />
                <LanguageBar text="Inglês" />
              </View>
            </>
          ) : (
            <>
              <LanguageBar text="Inglês" />
              <LanguageBar text="Inglês" />
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#353535",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  container: {
    backgroundColor: "#353535",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  infoText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "400",
    letterSpacing: 0.25,
    color: "white",
  },
});

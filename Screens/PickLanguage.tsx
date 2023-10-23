import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import globalStyles from "../globalStyles";
import { testing } from "../store/state";
import { Text } from "react-native-paper";
import Button from "../Components/Buttons/Button";

export default function PickLanguage(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  useEffect(() => {
    if (isDesktop) setPageTitle("", scrProps.navigation);
  });

  useEffect(() => {
    scrProps.navigation.addListener("beforeRemove", (e: any) =>
      e.preventDefault()
    );
  });

  scrProps.navigation.setOptions({
    headerLeft: null,
  });

  return (
    <ScrollView style={!isDesktop && { backgroundColor: "#2C2831" }}>
      <View
        style={[
          globalStyles.container,
          { alignSelf: "center", marginTop: hp(5) },
          isDesktop ? desktopStyles.buttonsView : { width: wp(150) },
        ]}
      >
        {isDesktop && (
          <View style={isDesktop ? { width: wp(30) } : { width: "100%" }}>
            <Text
              variant="titleMedium"
              style={{
                fontFamily: "OpenSansSBold",
                alignSelf: "flex-start",
                marginBottom: hp(2.5),
              }}
            >
              Selecione um idioma
            </Text>
          </View>
        )}

        <Button
          icon="code-json"
          color={{
            text: "white",
            button: "#ff5151",
          }}
          onPress={() => scrProps.navigation.navigate("Home")}
        >
          Inglês
        </Button>
      </View>
    </ScrollView>
  );
}

function setPageTitle(title: string, nav: any) {
  if (testing.get()) return;
  nav.setOptions({ title: title });
}

const desktopStyles = StyleSheet.create({
  buttonsView: {
    marginTop: hp(10),
    padding: 20,
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
});

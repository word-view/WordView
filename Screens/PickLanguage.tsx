import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { Button } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import globalStyles from "../globalStyles";
import { testing } from "../store/state";
import { Text } from "react-native-paper";

export default function PickLanguage(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  useEffect(() => {
    if (isDesktop) setPageTitle("", scrProps.navigation);
  });

  return (
    <ScrollView style={!isDesktop && { backgroundColor: "#2C2831" }}>
      <View
        style={[
          globalStyles.container,
          { alignSelf: "center", marginTop: hp(5) },
          !isDesktop && { width: wp(150) },
          isDesktop && desktopStyles.buttonsView,
        ]}
      >
        {isDesktop && (
          <View style={isDesktop ? desktopStyles.button : mobileStyles.button}>
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
          mode="elevated"
          textColor="white"
          buttonColor="#ff5151"
          icon="code-json"
          onPress={() => scrProps.navigation.navigate("Home")}
          style={{ borderRadius: 5 }}
          labelStyle={isDesktop && { fontSize: 16 }}
          contentStyle={[
            styles.button,
            isDesktop ? desktopStyles.button : mobileStyles.button,
          ]}
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

const mobileStyles = StyleSheet.create({
  button: {
    width: "100%",
  },
});

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
  button: {
    width: wp(30),
  },
});

const styles = StyleSheet.create({
  button: {
    height: 60,
  },
});

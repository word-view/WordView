import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../Components/Home/Header";
import globalStyles from "../globalStyles";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ScreenProps } from "./types";
import SVGButton from "../Components/SVGButton";
import BackArrowIcon from "../Components/SVGComponents/BackArrowIcon";

export default function Settings({ navigation, testing }: ScreenProps) {
  const isDesktop = testing ? true : ResponsiveChecker().isDesktop;

  return (
    <>
      <Header {...{ isDesktop }}>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            position: "absolute",
          }}
        >
          <SVGButton
            style={{ alignSelf: "flex-start", marginLeft: 15 }}
            onHoverAnimationDirection="left"
            onPress={() => {
              navigation.goBack();
            }}
            {...{ isDesktop }}
          >
            <BackArrowIcon />
          </SVGButton>
          <Text
            style={[
              globalStyles.mediumUIText,
              { fontWeight: "800", marginHorizontal: 15 },
            ]}
          >
            Configurações
          </Text>
        </View>
      </Header>

      <View style={styles.container}>
        <ScrollView
          style={[styles.scrollView, isDesktop && { paddingHorizontal: 15 }]}
        >
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
          <Text>Setting entry</Text>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
    position: "relative",
  },
  borderAvoider: {
    marginTop: 20,
    marginLeft: 20,
  },
  attentionBox1: {
    width: "100%",
    alignItems: "center",
    zIndex: 20,
    position: "absolute",
  },
  continueButton: {
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  scrollView: {
    width: "100%",
    marginTop: hp(2.5),
    alignSelf: "center",
  },
  sectionLabel: {
    fontWeight: "600",
  },
  sectionLabelDetails: {
    fontWeight: "400",
    color: "#CCCCCC",
    fontSize: 12,
    marginBottom: 10,
  },
  inProgressLabel: {
    marginLeft: 20,
    alignSelf: "flex-start",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../Components/Home/Header";
import globalStyles from "../globalStyles";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ScreenProps } from "./types";
import SVGButton from "../Components/SVG/SVGButton";
import BackArrowIcon from "../Components/SVG/BackArrowIcon";
import HeaderText from "../Components/Text/HeaderText";

export default function Settings(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  function goBack() {
    scrProps.navigation.goBack();
  }

  return (
    <>
      <Header isDesktop={isDesktop} color="#353535">
        <View style={styles.headerControlsView}>
          <SVGButton
            style={{ marginLeft: 15 }}
            onPress={goBack}
            icon={<BackArrowIcon />}
          />
          <HeaderText></HeaderText>
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
  headerControlsView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "#353535",
    position: "relative",
  },
  scrollView: {
    width: "100%",
    marginTop: hp(2.5),
    alignSelf: "center",
  },
});

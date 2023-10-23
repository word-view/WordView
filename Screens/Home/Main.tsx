import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ScreenProps } from "../types";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, Button, Dialog, Portal, Text } from "react-native-paper";
import globalStyles from "../../globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import images from "../../images";
import HorizontalScrollView from "../../Components/HorizontalScrollView";
import Lesson from "../../Components/Lesson";

export default function Main(scrProps: ScreenProps) {
  scrProps.navigation.setOptions({
    headerRight: () => (
      <View style={{ flexDirection: "row" }}>
        <Appbar.Action
          icon="account"
          onPress={() => scrProps.navigation.navigate("AccountSettings")}
        />
        <Appbar.Action
          icon="cog"
          onPress={() => scrProps.navigation.navigate("Settings")}
        />
      </View>
    ),
  });

  return (
    <ScrollView>
      <View style={[globalStyles.container, styles.recomendedSection]}>
        <Text variant="titleLarge">Aulas sugeridas</Text>
        <Text variant="titleSmall">
          Aulas simples para você entender como o app funciona
        </Text>

        <HorizontalScrollView>
          <Lesson
            img={images.cac}
            text="Plants"
            style={{ marginTop: hp(1) }}
            onPress={() => scrProps.navigation.navigate("Lesson")}
          />
        </HorizontalScrollView>
      </View>

      <View
        style={[
          {
            marginTop: hp(3),
            alignItems: "flex-start",
            paddingLeft: wp(2.5),
          },
        ]}
      >
        <Text variant="titleLarge">Natureza</Text>

        <HorizontalScrollView>
          <Lesson
            img={images.cac}
            text="Plants"
            style={{ marginTop: hp(1) }}
            onPress={() => scrProps.navigation.navigate("Lesson")}
          />
        </HorizontalScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  recomendedSection: {
    alignItems: "flex-start",
    padding: 5,
    paddingLeft: wp(2.5),
    marginTop: hp(2.5),
    backgroundColor: "#2C2831FF",
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

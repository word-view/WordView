import React from "react";
import { StyleSheet, View } from "react-native";
import ResponsiveChecker from "../../Components/Backend/ResponsiveChecker";
import { ScreenProps } from "../types";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, Avatar, Text, TouchableRipple } from "react-native-paper";
import globalStyles from "../../globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import images from "../../images";

export default function Main(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  scrProps.navigation.setOptions({
    headerRight: () => (
      <Appbar.Action
        icon="cog"
        onPress={() => scrProps.navigation.navigate("Settings")}
      />
    ),
  });

  // const [suggestedLessons, setSuggestedLessons] = useState([] as Lesson[]);
  // getLessons("starter").then((data) => setSuggestedLessons(data));

  return (
    <ScrollView>
      <View
        style={[
          globalStyles.container,
          {
            alignItems: "flex-start",
            padding: 5,
            paddingLeft: wp(2.5),
            marginTop: hp(2.5),
          },
        ]}
      >
        <Text variant="titleLarge">Aulas sugeridas</Text>
        <Text variant="titleSmall">
          Aulas simples para você entender como o app funciona
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableRipple
            onPress={() => scrProps.navigation.navigate("Lesson")}
            rippleColor="#CAC4D04D"
            borderless={true}
            style={{ borderRadius: 5, padding: 10, marginTop: hp(2) }}
          >
            <View style={{ alignItems: "center" }}>
              <Avatar.Image
                size={175}
                style={{ backgroundColor: "#D0BCFF66" }}
                source={images.cac}
              />
              <Text variant="labelLarge" style={{ marginTop: hp(1) }}>
                Plants
              </Text>
            </View>
          </TouchableRipple>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

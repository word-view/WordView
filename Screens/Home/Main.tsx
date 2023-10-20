import React from "react";
import { StyleSheet, View } from "react-native";
import { ScreenProps } from "../types";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, Text } from "react-native-paper";
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
      <View style={[globalStyles.container, styles.recomendedSection]}>
        <Text variant="titleLarge">Aulas sugeridas</Text>
        <Text variant="titleSmall">
          Aulas simples para você entender como o app funciona
        </Text>

        <HorizontalScrollView>
          <Lesson
            img={images.cac}
            text={"Plants"}
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
  },
});

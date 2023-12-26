import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import images from "../../images";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { withNavigation } from "react-navigation";
import { NavigationScreen } from "../UI/Screens/NavigationScreen";
import Lesson from "../UI/Components/Interactive/Lesson";
import HorizontalScrollView from "../UI/Components/Views/HorizontalScrollView";
import Section from "./Components/Section";

interface MainScreenProps {
  nav: any;
}

function Main(props: MainScreenProps) {
  return (
    <ScrollView>
      <Section title="Natureza" fill={true} style={{ marginTop: hp(2.5) }}>
        <HorizontalScrollView>
          <Lesson
            img={images.cac}
            text="Plants"
            style={{ marginTop: hp(1) }}
            onPress={() => props.nav.navigate("Lesson")}
          />
        </HorizontalScrollView>
      </Section>
    </ScrollView>
  );
}

export default memo(Main);

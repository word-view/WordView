import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import { Appbar, Surface, Text } from "react-native-paper";
import globalStyles from "../../globalStyles";
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

class Main extends NavigationScreen {
  componentDidMount() {
    this.headerRight(
      <View style={{ flexDirection: "row" }}>
        <Appbar.Action
          icon="account"
          onPress={() => this.navigateTo("AccountSettings")}
        />
        <Appbar.Action icon="cog" onPress={() => this.navigateTo("Settings")} />
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <Section title="Natureza" fill={true} style={{ marginTop: hp(2.5) }}>
          <HorizontalScrollView>
            <Lesson
              img={images.cac}
              text="Plants"
              style={{ marginTop: hp(1) }}
              onPress={() => this.navigateTo("Lesson")}
            />
          </HorizontalScrollView>
        </Section>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  suggestedSurface: {
    alignSelf: "center",
    marginTop: hp(2.5),
    padding: 20,
    borderRadius: 5,
    alignItems: "flex-start",
  },
});

const desktopStyles = StyleSheet.create({
  infoContainer: {
    width: wp(75),
  },
});

const mobileStyles = StyleSheet.create({
  infoContainer: {
    width: wp(96),
  },
});

export default withNavigation(Main);

import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, Surface, Text } from "react-native-paper";
import globalStyles from "../../globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import images from "../../images";
import HorizontalScrollView from "../../Components/HorizontalScrollView";
import Lesson from "../../Components/Lesson";
import { NavigationScreen } from "../Components/NavigationScreen";
import { withNavigation } from "react-navigation";

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
        <Surface
          elevation={4}
          style={[
            globalStyles.container,
            styles.suggestedSurface,
            this.desktop
              ? desktopStyles.infoContainer
              : mobileStyles.infoContainer,
          ]}
        >
          <Text variant="titleLarge">Aulas sugeridas</Text>
          <Text variant="titleSmall">
            Aulas simples para você entender como o app funciona
          </Text>

          <HorizontalScrollView>
            <Lesson
              img={images.cac}
              text="Plants"
              style={{ marginTop: hp(1) }}
              onPress={() => this.navigateTo("Lesson")}
            />
          </HorizontalScrollView>
        </Surface>

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
              onPress={() => this.navigateTo("Lesson")}
            />
          </HorizontalScrollView>
        </View>
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

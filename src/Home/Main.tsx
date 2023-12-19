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
import { currentLesson } from "../../store/lesson";
import { withNavigation } from "react-navigation";
import { NavigationScreen } from "../UI/Screens/NavigationScreen";
import HorizontalScrollView from "../UI/Components/HorizontalScrollView";
import Lesson from "../UI/Components/Lesson";

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
          <Text variant="titleLarge" style={{ fontWeight: "600" }}>
            Aulas sugeridas
          </Text>
          <Text variant="titleSmall">
            Aulas simples para você entender como o app funciona
          </Text>

          <HorizontalScrollView>
            <Lesson
              img={images.cac}
              text="Plants"
              style={{ marginTop: hp(1) }}
              onPress={() => {
                currentLesson.set({
                  id: 1,
                  title: "Plants",
                  difficulty: "starter",
                });
                this.navigateTo("Lesson");
              }}
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
          <Text variant="titleLarge" style={{ fontWeight: "600" }}>
            Natureza
          </Text>

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

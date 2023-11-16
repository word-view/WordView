import { withNavigation } from "react-navigation";
import { NavigationScreen } from "../Components/NavigationScreen";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Surface, Text } from "react-native-paper";
import globalStyles from "../../globalStyles";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import images from "../../images";
import Button from "../../Components/Buttons/Button";
import WordLearnedCard from "../../Components/WordLearnedCard";
import LessonProgressBar from "../../Components/LessonProgressBar";
import DiffFlare from "../../Components/DiffFlare";
import { currentLesson } from "../../store/lesson";

class Statistics extends NavigationScreen {
  componentDidMount() {
    if (this.desktop) {
      this.setTitle(currentLesson.get().title);
      this.hideHeader();
    }
  }

  render() {
    return (
      <>
        <ScrollView>
          <Surface
            elevation={4}
            style={[
              globalStyles.container,
              styles.surface,
              this.desktop ? { width: wp(45) } : {},
            ]}
          >
            <Avatar.Image
              size={124}
              style={[globalStyles.shadow, { backgroundColor: "#D0BCFF66" }]}
              source={images.cac}
            />
            <View
              style={{
                marginLeft: wp(2.5),
                width: "75%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Text variant="titleLarge">{currentLesson.get().title}</Text>
              <DiffFlare
                type={currentLesson.get().difficulty}
                style={{ marginBottom: hp(2.5) }}
              />
              <LessonProgressBar percentage={64} />
            </View>
          </Surface>

          <View
            style={[
              { alignSelf: "center" },
              this.desktop ? { width: wp(45) } : { width: wp(90) },
            ]}
          >
            <Text
              variant="headlineSmall"
              style={{
                marginTop: hp(7.5),
                marginBottom: hp(2.5),
                fontWeight: "600",
              }}
            >
              Palavras aprendidas nesta aula
            </Text>

            <WordLearnedCard />
          </View>
        </ScrollView>
        <View
          style={{
            alignContent: "center",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            bottom: 0,
            marginBottom: hp(2.5),
            width: wp(20),
          }}
        >
          <Button
            color={{ text: "white", button: "#55D962" }}
            onPress={() => this.navigateTo("Home")}
            marginTop={15}
          >
            Concluir
          </Button>
        </View>
      </>
    );
  }
}

export default withNavigation(Statistics);

const styles = StyleSheet.create({
  surface: {
    alignSelf: "center",
    marginTop: hp(2.5),
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

import { StyleSheet, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Text } from "react-native-paper";
import { withNavigation } from "react-navigation";
import { NavigationScreen } from "../UI/Screens/NavigationScreen";
import { userRegister } from "../../store/register";
import globalStyles from "../../globalStyles";
import Button from "../UI/Components/Buttons/Button";

class PickLanguage extends NavigationScreen {
  componentDidMount() {
    if (this.desktop) {
      this.setTitle("");
      this.hideHeader();
    }
    this.removeBackAction();

    console.log(userRegister.get());
  }

  render() {
    return (
      <ScrollView style={!this.desktop && { backgroundColor: "#2C2831" }}>
        <View
          style={[
            globalStyles.container,
            { alignSelf: "center", marginTop: hp(5) },
            this.desktop ? desktopStyles.buttonsView : { width: wp(150) },
          ]}
        >
          {this.desktop && (
            <View style={this.desktop ? { width: wp(30) } : { width: "100%" }}>
              <Text
                variant="titleMedium"
                style={{
                  alignSelf: "flex-start",
                  marginBottom: hp(2.5),
                }}
              >
                Selecione um idioma
              </Text>
            </View>
          )}

          <Button
            icon="code-json"
            color={{
              text: "white",
              button: "#ff5151",
            }}
            onPress={() => this.navigateTo("Home")}
          >
            Inglês
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const desktopStyles = StyleSheet.create({
  buttonsView: {
    marginTop: hp(10),
    padding: 20,
    borderRadius: 5,
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

export default withNavigation(PickLanguage);
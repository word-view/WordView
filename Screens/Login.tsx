import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import globalStyles from "../globalStyles";
import { Button, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AccountLoginButton from "../Components/Buttons/AccountLoginButton";
import { NavigationScreen } from "./Components/NavigationScreen";
import { withNavigation } from "react-navigation";

class Login extends NavigationScreen {
  componentDidMount() {
    this.setTitle("");
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={!this.desktop && { backgroundColor: "#2C2831" }}
      >
        <View
          style={[
            { marginTop: hp(5) },
            this.desktop && styles.buttonsContainer,
          ]}
        >
          <View style={[globalStyles.container, { marginBottom: hp(10) }]}>
            <Text variant="displaySmall">Bem vindo de volta!</Text>
          </View>

          <View
            style={[
              globalStyles.container,
              { width: this.desktop ? wp(25) : wp(90) },
            ]}
          >
            <AccountLoginButton
              icon="email"
              color={{ text: "white", button: "#8951FF" }}
              onPress={() => {}}
            >
              Login por Email
            </AccountLoginButton>

            <AccountLoginButton
              icon="google"
              color={{ text: "black", button: "white" }}
              marginTop={2}
              onPress={() => {}}
            >
              Login com o Google
            </AccountLoginButton>

            <Button
              mode="text"
              onPress={() => this.navigateTo("PickLanguage")}
              style={{ marginTop: this.desktop ? hp(2) : hp(3) }}
            >
              Ou crie sua conta
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#2C2831",

    padding: 15,
    paddingBottom: 35,
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

export default withNavigation(Login);

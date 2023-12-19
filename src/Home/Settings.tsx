import React from "react";
import { ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { NavigationScreen } from "../UI/Screens/NavigationScreen";

class Settings extends NavigationScreen {
  render() {
    return <ScrollView></ScrollView>;
  }
}

export default withNavigation(Settings);
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { NavigationScreen } from "../Components/NavigationScreen";

class Settings extends NavigationScreen {
  render() {
    return <ScrollView></ScrollView>;
  }
}

export default withNavigation(Settings);

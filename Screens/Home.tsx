import { StyleSheet, View } from "react-native";
import { ScreenProps } from "./types";
import Main from "./Home/Main";
import Settings from "./Home/Settings";
import WVLogo from "../Components/WVLogo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { CombinedDarkTheme } from "../theme";
import { useEffect } from "react";
import Lesson from "./Home/Lesson";

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

export default function Home(scrProps: ScreenProps) {
  useEffect(() => {
    scrProps.navigation.addListener(
      "beforeRemove",
      (e: any) => e.preventDefault() // ask to close the app
    );
  });

  // const [suggestedLessons, setSuggestedLessons] = useState([] as Lesson[]);
  // getLessons("starter").then((data) => setSuggestedLessons(data));

  return (
    <NavigationContainer independent={true} theme={CombinedDarkTheme}>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          animationEnabled: true,
          headerStyle: {
            borderBottomColor: "#2C2831",
            shadowColor: "#2C2831",
          },
          headerTitleStyle: {
            fontFamily: "OpenSansSBold",
          },
        }}
      >
        <Screen
          options={{
            title: "",
            headerLeft: () => (
              <View style={styles.wvTitleHolder}>
                <WVLogo />
              </View>
            ),
          }}
          name="Home"
          component={Main}
        />
        <Screen name="Settings" component={Settings} />
        <Screen name="Lesson" options={{ title: "" }} component={Lesson} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wvTitleHolder: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
});

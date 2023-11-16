import { BackHandler, StyleSheet, View } from "react-native";
import { ScreenProps } from "./types";
import Main from "./Home/Main";
import Settings from "./Home/Settings";
import WVLogo from "../Components/WVLogo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { CombinedDarkTheme } from "../theme";
import { useEffect } from "react";
import Lesson from "./Home/Lesson";
import AccountSettings from "./Home/AccountSettings";
import React from "react";
import { Dialog, Portal, Text, Button } from "react-native-paper";
import Statistics from "./Home/Statistics";

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

export default function Home(scrProps: ScreenProps) {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const leaveApp = () => BackHandler.exitApp();

  useEffect(() => {
    scrProps.navigation.addListener("beforeRemove", (e: any) => {
      e.preventDefault();
      showDialog();
    });
  });

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Are you sure you want to leave?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={leaveApp}>Leave</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

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
          <Screen
            name="AccountSettings"
            options={{ title: "Account Settings" }}
            component={AccountSettings}
          />
          <Screen
            name="Statistics"
            options={{ title: "" }}
            component={Statistics}
          />
        </Navigator>
      </NavigationContainer>
    </>
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

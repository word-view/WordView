import { BackHandler, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { CombinedDarkTheme } from "../../theme";
import Main from "./Main";
import Settings from "./Settings";
import AccountSettings from "./AccountSettings";
import Statistics from "./Statistics";
import Lesson from "../Lesson/Lesson";
import { NavigationScreen } from "../UI/Screens/NavigationScreen";
import WVLogo from "../UI/Components/WVLogo";

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

export default class Home extends NavigationScreen {
  constructor(args: any) {
    super(args);

    this.state = {
      dialogVisible: false,
    };
  }

  private showDialog = () => this.setState({ dialogVisible: true });
  private hideDialog = () => this.setState({ dialogVisible: false });
  private leaveApp = () => BackHandler.exitApp();

  componentDidMount() {
    this.overrideDefaultBack(this.showDialog);
  }

  render() {
    return (
      <>
        <Portal>
          <Dialog
            visible={(this.state as any).dialogVisible}
            onDismiss={this.hideDialog}
          >
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Are you sure you want to leave?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this.leaveApp}>Leave</Button>
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
              headerTitleStyle: {},
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

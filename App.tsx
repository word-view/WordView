import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import PickLanguage from "./Screens/PickLanguage";
import FontLoader from "./Components/Backend/FontLoader";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { CombinedDarkTheme } from "./theme";
import PickUsername from "./Screens/PickUsername";
import Home from "./Screens/Home";
import EmailLogin from "./Screens/EmailLogin";

SplashScreen.preventAutoHideAsync();

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

export default function App() {
  const { fontsLoaded, onLayoutRootView } = FontLoader();
  if (!fontsLoaded) return null;

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
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
          <Screen name="Welcome" options={{ title: "Bem vindo ao WordView!" }}>
            {(props) => (
              <Welcome {...props} onLayoutRootView={onLayoutRootView} />
            )}
          </Screen>
          <Screen
            name="Login"
            component={Login}
            options={{ title: "Entre na sua conta" }}
          />
          <Screen
            name="Register"
            component={Register}
            options={{ title: "Criar uma conta" }}
          />
          <Screen
            name="PickLanguage"
            component={PickLanguage}
            options={{ title: "Selecione um idioma" }}
          />
          <Screen
            name="PickUsername"
            component={PickUsername}
            options={{ title: "Escolha um nome de usuário" }}
          />
          <Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              title: "",
            }}
          />
          <Screen
            name="EmailLogin"
            options={{ title: "Login com email" }}
            component={EmailLogin}
          />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

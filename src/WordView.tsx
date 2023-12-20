import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { CombinedDarkTheme } from "../theme";
import Home from "./Home/Home";
import Login from "./Intro/Auth/Login";
import Register from "./Intro/Auth/Register";
import EmailLogin from "./Intro/Auth/EmailLogin";
import PickLanguage from "./Intro/PickLanguage";
import PickUsername from "./Intro/PickUsername";
import Welcome from "./Intro/Welcome";

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

interface WordViewArguments {
  hideSplashCallback?: any;
}

export default function WordView(args: WordViewArguments) {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          animationEnabled: true,
          headerStyle: {
            borderBottomColor: "#2C2831",
            shadowColor: "#2C2831",
          },
          headerTitleStyle: {
            fontFamily: "OpenSans",
          },
        }}
      >
        <Screen name="Welcome" options={{ title: "Bem vindo ao WordView!" }}>
          {(props) => (
            <Welcome {...props} onLayoutRootView={args.hideSplashCallback} />
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
  );
}

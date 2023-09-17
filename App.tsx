import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import PickLanguage from "./Screens/PickLanguage";
import Home from "./Screens/Home";
import FontLoader from "./BackendComponents/FontLoader";
import { StatusBar } from "expo-status-bar";
import Settings from "./Screens/Settings";

SplashScreen.preventAutoHideAsync();

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

export default function App() {
    const { fontsLoaded, onLayoutRootView } = FontLoader();

    if (!fontsLoaded) return null;

    return (
        <>
            <NavigationContainer>
                <Navigator
                    initialRouteName="Welcome"
                    screenOptions={{
                        animationEnabled: true,
                        headerShown: false,
                    }}
                >
                    <Screen
                        name="Welcome"
                        options={{ title: "Bem vindo ao WordView!" }}
                    >
                        {(props) => (
                            <Welcome
                                {...props}
                                onLayoutRootView={onLayoutRootView}
                            />
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
                        options={{ title: "Criar sua conta" }}
                    />
                    <Screen
                        name="PickLanguage"
                        component={PickLanguage}
                        options={{ title: "Que idioma você quer aprender?" }}
                    />
                    <Screen
                        name="Home"
                        component={Home}
                        options={{ title: "WordView" }}
                    />
                    <Screen
                        name="Settings"
                        component={Settings}
                        options={{ title: "Configurações" }}
                    />
                </Navigator>
            </NavigationContainer>
            <StatusBar style="light" />
        </>
    );
}

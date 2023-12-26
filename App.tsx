import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { CombinedDarkTheme } from "./src/theme";
import FontLoader from "./src/UI/Components/Backend/FontLoader";
import WordView from "./src/WordView";
import * as NavigationBar from "expo-navigation-bar";

SplashScreen.preventAutoHideAsync();
NavigationBar.setBackgroundColorAsync("#2C2831");

export default function App() {
  const { fontsLoaded, onLayoutRootView } = FontLoader();
  if (!fontsLoaded) return null;

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <WordView hideSplashCallback={onLayoutRootView} />
      <StatusBar style="light" translucent={true} />
    </PaperProvider>
  );
}

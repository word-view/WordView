import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { CombinedDarkTheme } from "./theme";
import FontLoader from "./src/UI/Components/Backend/FontLoader";
import WordView from "./src/WordView";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = FontLoader();
  if (!fontsLoaded) return null;

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <WordView hideSplashCallback={onLayoutRootView} />
      <StatusBar style="light" />
    </PaperProvider>
  );
}

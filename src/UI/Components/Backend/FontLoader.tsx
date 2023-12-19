import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { testing } from "../../../../store/state";

export default function FontLoader() {
  if (testing.get()) return testingMode();

  const [fontsLoaded, fontsError] = useFonts({
    OpenSans: require("../../../../assets/fonts/open-sans/static/OpenSans-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  return { fontsLoaded, onLayoutRootView };
}

function testingMode() {
  let fontsLoaded = true;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}

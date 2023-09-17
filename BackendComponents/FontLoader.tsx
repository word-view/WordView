import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function FontLoader() {
  const [fontsLoaded] = useFonts({
    OpenSansSBold: require("../assets/fonts/open-sans/static/OpenSans-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}

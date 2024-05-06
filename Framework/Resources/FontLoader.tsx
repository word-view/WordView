import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { FontSource, useFonts } from 'expo-font';

export function fontLoader(fonts: Record<string, FontSource>, testing: boolean = false) {
  if (testing) return testingMode();

  const [fontsLoaded, fontsError] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  return { fontsLoaded, onLayoutRootView };
}

function testingMode() {
  const fontsLoaded = true;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}

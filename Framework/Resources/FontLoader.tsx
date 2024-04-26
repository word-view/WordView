import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export function FontLoader(testing: boolean = false) {
  if (testing) return testingMode();

  const [fontsLoaded, fontsError] = useFonts({
    OpenSans: require('../../assets/fonts/open-sans/static/OpenSans-SemiBold.ttf'),
  });

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

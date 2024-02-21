import React from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import * as NavigationBar from 'expo-navigation-bar'
import AppNavigation from './navigation/AppNavigation'
import { FontLoader } from './components'
import { CombinedDarkTheme } from './config/theme'

SplashScreen.preventAutoHideAsync()
NavigationBar.setBackgroundColorAsync('#2C2831')

export default function App() {
  const { fontsLoaded, onLayoutRootView } = FontLoader()
  if (!fontsLoaded) return null

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <AppNavigation hideSplashCallback={onLayoutRootView} />
      <StatusBar style='light' translucent={true} />
    </PaperProvider>
  )
}

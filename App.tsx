import React from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import * as NavigationBar from 'expo-navigation-bar'
import AppNavigation from './navigation/AppNavigation'
import { DesktopModeProvider, FontLoader, ResponsiveLayout } from './components'
import { CombinedDarkTheme } from './config/theme'

SplashScreen.preventAutoHideAsync()
NavigationBar.setBackgroundColorAsync('#2C2831')

export default function App() {
  const { isDesktop } = ResponsiveLayout()
  const { fontsLoaded, onLayoutRootView } = FontLoader()
  if (!fontsLoaded) return null

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <DesktopModeProvider.Provider value={isDesktop}>
        <AppNavigation hideSplashCallback={onLayoutRootView} />
        <StatusBar style='light' translucent={true} />
      </DesktopModeProvider.Provider>
    </PaperProvider>
  )
}

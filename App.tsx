/*
 Copyright (c) 2024 Arthur Araujo

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import * as NavigationBar from 'expo-navigation-bar';
import AppNavigation from './App/Navigation/AppNavigation';
import { DesktopModeProvider, appLayout } from './App/Components';
import { CombinedDarkTheme } from './App/theme';
import { apiAvailable, testing } from './App/Storage/store/state';
import { checkAPIAvailable } from './App/API/check';
import { onMountAsync } from './Framework/Components/Actions';
import { fontLoader } from './Framework/Resources/FontLoader';
import { KeysProvider } from 'react-native-hotkeys';

SplashScreen.preventAutoHideAsync();
const warn = console.warn;
if (testing.get()) console.warn = () => {};
NavigationBar.setBackgroundColorAsync('#2C2831');
console.warn = warn;

export default function App() {
    const { isDesktop } = appLayout();

    onMountAsync(async () => {
        const available = await checkAPIAvailable();
        apiAvailable.set(available);
    });

    const { fontsLoaded, onLayoutRootView } = fontLoader({
        OpenSans: require('./assets/fonts/open-sans/static/OpenSans-SemiBold.ttf'),
    });

    if (!fontsLoaded) return null;

    return (
        <PaperProvider theme={CombinedDarkTheme}>
            <DesktopModeProvider.Provider value={isDesktop}>
                <KeysProvider>
                    <AppNavigation hideSplashCallback={onLayoutRootView} />
                    <StatusBar style='light' translucent={true} />
                </KeysProvider>
            </DesktopModeProvider.Provider>
        </PaperProvider>
    );
}

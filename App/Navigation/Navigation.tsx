import { NavigationProp } from '@react-navigation/native';

/**
 * Utility class for manipulating react-navigation's navigation object.
 */
export class Navigation {
    navigation: NavigationProp<any, any>;

    /**
     * Initializes Navigation object with the provided navigation object.
     * @param navigation The react-navigation navigation object.
     */
    constructor(navigation: NavigationProp<any, any>) {
        this.navigation = navigation;
    }

    go(screenName: string) {
        this.navigation.navigate(screenName);
    }

    hideHeader() {
        this.navigation.setOptions({ headerShown: false });
    }

    setTitle(title: string) {
        this.navigation.setOptions({ title: title });
    }

    setHeaderTitle(title: string) {
        this.navigation.setOptions({ headerTitle: title });
    }

    emptyHeaderTitle() {
        this.navigation.setOptions({ headerTitle: '' });
    }

    setHeaderLeft(element: React.JSX.Element) {
        this.navigation.setOptions({ headerLeft: () => element });
    }

    setHeaderRight(element: React.JSX.Element) {
        this.navigation.setOptions({ headerRight: () => element });
    }
}

import React from "react";
import { Animated, StyleProp, View, ViewStyle } from "react-native";
import AdaptableScreen from "./AdaptableScreen";

export class NavigationScreen extends AdaptableScreen<{
  navigation: any;
}> {
  navigateTo = this.props.navigation.navigate;
  desktop: boolean = (this.state as any).desktop;

  headerLeft(component?: React.JSX.Element) {
    if (!component) return;

    this.props.navigation.setOptions({
      headerLeft: () => component,
    });
  }

  headerRight(component?: React.JSX.Element) {
    if (!component) return;

    this.props.navigation.setOptions({
      headerRight: () => component,
    });
  }

  headerStyle(style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>) {
    if (!style) return;
    this.props.navigation.setOptions({ headerStyle: style });
  }

  setTitle(title: string) {
    this.props.navigation.setOptions({ title: title });
  }

  removeBackAction() {
    this.headerLeft(<View />);
    this.props.navigation.addListener("beforeRemove", (e: any) =>
      e.preventDefault()
    );
  }
}
import { StyleProp } from "react-native";

export interface ChildrenableComponent {
  children?: any;
}

export interface ReactiveComponent {
  isDesktop?: boolean;
}

export interface TextableComponent {
  text: string;
}

export interface PressableComponent {
  pressAction?: () => void;
}

export interface StyleableComponent<T1> {
  style?: StyleProp<T1>;
}

import { Difficulty } from "@wordview/api";
import { StyleProp, ViewStyle } from "react-native";

export interface SVGButtonProps
  extends PressableComponent,
    ChildrenableComponent,
    StyleableComponent<ViewStyle>,
    ReactiveComponent {
  onHoverAnimationDirection?: "top" | "left";
}

export interface ContinueProgressBarProps
  extends StyleableComponent<ViewStyle>,
    ReactiveComponent {
  percentage: number;
}

export interface DifficultyLabelProps extends StyleableComponent<ViewStyle> {
  difficulty: Difficulty;
}

export interface ActivitySquareProps
  extends StyleableComponent<ViewStyle>,
    ReactiveComponent,
    PressableComponent {
  children?: any;
  color: string;
  textUnder?: string;
  difficulty?: Difficulty;
}

export interface AttentionBoxProps extends StyleableComponent<ViewStyle> {
  children?: any;
  level: 1 | 2;
}

export interface ButtonProps
  extends StyleableComponent<ViewStyle>,
    PressableComponent,
    TextableComponent {
  color: string;
  textColor: string;
}

export interface CredentialsInputProps extends StyleableComponent<ViewStyle> {
  placeholder: string;
  placeholderTextColor: string;
  label: string;
  labelColor: string;
  secure?: boolean;
  onChangeText?: (value: string) => void;
}

export interface RoundedButtonProps
  extends StyleableComponent<ViewStyle>,
    PressableComponent,
    TextableComponent,
    ReactiveComponent {
  color: string;
  textColor: string;
}

export interface LinkButtonProps
  extends StyleableComponent<ViewStyle>,
    PressableComponent,
    TextableComponent,
    ReactiveComponent {
  pressableAlign: "flex-start" | "center" | "flex-end";
}

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

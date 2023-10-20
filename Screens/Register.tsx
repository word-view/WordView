import React, { useEffect } from "react";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ScrollView } from "react-native-gesture-handler";

export default function Register(scrProps: ScreenProps) {
  useEffect(() => {
    scrProps.navigation.setOptions({ title: "" });
  });

  return <ScrollView></ScrollView>;
}

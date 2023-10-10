import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import images from "../images";

function randomColor() {
  const colors = ["#63A1FF", "#63FF72", "#FF6363"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Lesson() {
  return (
    <View style={[styles.container, { backgroundColor: randomColor() }]}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

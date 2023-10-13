import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  wvIcon: {
    height: 82,
    width: 101,
    marginBottom: 15,
  },
  wvTitle: {
    height: 36,
    width: 220,
    marginBottom: 15,
  },
  regularUIText: {
    color: "white",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "400",
    letterSpacing: 0.25,
  },
  mediumUIText: {
    color: "white",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "400",
    letterSpacing: 0.25,
  },
  full: {
    width: "100%",
    height: "100%",
  },
});

export default globalStyles;

import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2831",
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textShadow: {
    textShadowColor: "#00000066",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 2.62,
  },
});

export default globalStyles;

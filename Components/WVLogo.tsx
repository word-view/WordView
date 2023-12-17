import { memo } from "react";
import images from "../images";
import ResponsiveChecker from "./Backend/ResponsiveChecker";
import { Image, StyleSheet } from "react-native";

function WVLogo() {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <>
      <Image style={styles.wvIcon} source={images.wvIcon} />
      {isDesktop && <Image style={styles.wvTitle} source={images.wvTitle} />}
    </>
  );
}

const styles = StyleSheet.create({
  wvIcon: {
    height: 34,
    width: 42,
    marginLeft: 15,
  },
  wvTitle: {
    height: 20,
    width: 120,
    marginLeft: 15,
  },
});

export default memo(WVLogo);

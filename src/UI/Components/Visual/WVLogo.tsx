import { memo } from "react";
import { Image, StyleSheet } from "react-native";
import ResponsiveChecker from "../Backend/ResponsiveChecker";
import images from "../../../../images";

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

import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Text } from "react-native-paper";
import ResponsiveChecker from "../Backend/ResponsiveChecker";
import globalStyles from "../../../../globalStyles";

interface ContentHolderProps {
  title: string;
  children?: any;
  style?: any;
}

/**
 * Fills a mobile screen but act as a popover on desktop
 * @param props
 */
export default function ContentHolder(props: ContentHolderProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <View
      style={[
        globalStyles.container,
        { alignSelf: "center", marginTop: hp(5) },
        isDesktop ? styles.contentHolder : { width: wp(150) },
      ]}
    >
      {isDesktop && (
        <View style={isDesktop ? { width: wp(30) } : { width: "100%" }}>
          <Text
            variant="titleMedium"
            style={{
              alignSelf: "flex-start",
              marginBottom: hp(2.5),
            }}
          >
            {props.title}
          </Text>
        </View>
      )}

      <View
        style={[
          isDesktop
            ? desktopStyles.childrenHolder
            : mobileStyles.childrenHolder,
          {
            alignSelf: "center",
            alignItems: "center",
          },
        ]}
      >
        {props.children}
      </View>
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  childrenHolder: {
    width: wp(90),
  },
});

const desktopStyles = StyleSheet.create({
  childrenHolder: {
    width: wp(30),
  },
});

const styles = StyleSheet.create({
  contentHolder: {
    marginTop: hp(10),
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

import { memo } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Avatar, TouchableRipple, Text } from "react-native-paper";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface LessonProps {
  img: AvatarImageSource;
  text: String;

  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

function Lesson(props: LessonProps) {
  return (
    <TouchableRipple
      onPress={props.onPress}
      rippleColor="#CAC4D04D"
      borderless={true}
      style={[{ borderRadius: 5, padding: 10 }, props.style]}
    >
      <View style={{ alignItems: "center" }}>
        <Avatar.Image
          size={124}
          style={{ backgroundColor: "#D0BCFF66" }}
          source={props.img}
        />
        <Text variant="labelLarge" style={{ marginTop: hp(1) }}>
          {props.text}
        </Text>
      </View>
    </TouchableRipple>
  );
}

export default memo(Lesson);

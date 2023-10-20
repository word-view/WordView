import { StyleSheet, View } from "react-native";
import { Avatar, TouchableRipple, Text } from "react-native-paper";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface LessonProps {
  img: AvatarImageSource;
  text: String;
  onPress: () => void;
}

export default function Lesson(props: LessonProps) {
  return (
    <TouchableRipple
      onPress={props.onPress}
      rippleColor="#CAC4D04D"
      borderless={true}
      style={{ borderRadius: 5, padding: 10, marginTop: hp(2) }}
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

const styles = StyleSheet.create({});

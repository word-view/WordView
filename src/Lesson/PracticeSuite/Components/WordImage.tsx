import { Avatar } from "react-native-paper";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";
import { StyleProp, ViewStyle } from "react-native";
import globalStyles from "../../../../globalStyles";

interface WordImageProps {
  size: number;
  source: AvatarImageSource;
  style?: StyleProp<ViewStyle>;
}

export default function WordImage(props: WordImageProps) {
  return (
    <Avatar.Image
      size={props.size}
      style={[{ backgroundColor: "#B9E8EE" }, globalStyles.shadow, props.style]}
      source={props.source}
    />
  );
}

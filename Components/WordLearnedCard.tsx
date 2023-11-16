import { Avatar, Surface, Text } from "react-native-paper";
import images from "../images";
import { StyleSheet, View } from "react-native";

interface WordLearnedCardProps {
  word?: any;
}

export default function WordLearnedCard(props: WordLearnedCardProps) {
  return (
    <Surface elevation={2} style={styles.surface}>
      <Avatar.Image size={75} source={images.cac} style={styles.wordImage} />
      <View style={styles.wordsContainer}>
        <Text variant="bodyLarge" style={{ fontWeight: "bold" }}>
          Cactus
        </Text>
        <Text variant="bodySmall">Cacto</Text>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    backgroundColor: "#2C2831",
    width: "100%",
    height: 75,
    borderRadius: 20,
    flexDirection: "row",
  },
  wordImage: {
    backgroundColor: "#2C283100",
  },
  wordsContainer: { height: "100%", justifyContent: "center" },
});

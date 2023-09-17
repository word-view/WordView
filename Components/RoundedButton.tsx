import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { RoundedButtonProps } from "./types";

export default function RoundedButton({
    text,
    color,
    textColor,
    pressAction,
    isDesktop = false,
    style,
}: RoundedButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                {
                    backgroundColor: color,
                },
                isDesktop
                    ? {
                          height: 50,
                      }
                    : {},
            ]}
            onPress={pressAction}
        >
            <Text style={[styles.buttonText, { color: textColor }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 400,
        height: 60,
        borderRadius: 64,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
    },
});

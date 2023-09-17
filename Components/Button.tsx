import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";

export default function Button({
    text,
    color,
    textColor,
    pressAction,
    style,
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                {
                    backgroundColor: color,
                },
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
        borderRadius: 12,
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

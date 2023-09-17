import {
    StyleSheet,
    Animated,
    View,
    TouchableOpacity,
    Text,
} from "react-native";

export default function LanguageBar({
    text,
    pressAction,
}: {
    text: string;
    pressAction?: () => void;
}) {
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.9];
    const scale = animation.interpolate({ inputRange, outputRange });

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        Animated.spring(animation, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={1}
                    onPressIn={onPressIn}
                    onPressOut={onPressOut}
                >
                    <Text style={styles.btnText}>{text}</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
    button: {
        height: 70,
        width: 400,
        backgroundColor: "#63A1FF",
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: "#fff",
        fontSize: 25,
    },
});

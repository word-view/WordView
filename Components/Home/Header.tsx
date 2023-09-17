import { View, StyleSheet, StatusBar } from "react-native";
import { ChildrenableComponent, ReactiveComponent } from "../types";

export default function Header({
    isDesktop = false,
    children,
}: ReactiveComponent & ChildrenableComponent) {
    return (
        <>
            {!isDesktop && (
                <View
                    style={{
                        paddingTop: StatusBar.currentHeight,
                        backgroundColor: "#353535",
                    }}
                />
            )}
            <View style={[styles.header, isDesktop && { height: 60 }]}>
                {children}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#353535",
        justifyContent: "center",
        flexDirection: "column",
        height: 50,
        width: "100%",
    },
});

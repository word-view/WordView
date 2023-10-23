import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { testing } from "../store/state";
import { useEffect } from "react";
import ContentHolder from "../Components/ContentHolder";
import { HelperText, TextInput } from "react-native-paper";
import Button from "../Components/Buttons/Button";
import React from "react";
import { ScreenProps } from "./types";

export default function PickUsername(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;
  if (isDesktop) setPageTitle("", scrProps.navigation);

  useEffect(() => {
    scrProps.navigation.addListener("beforeRemove", (e: any) =>
      e.preventDefault()
    );
  });

  scrProps.navigation.setOptions({
    headerLeft: null,
  });

  const [name, setName] = React.useState("");
  const onChangeName = (name: any) => setName(name);
  const nameHasErrors = () => {
    if (name == "") return false;
    if (name.length < 4) return true;

    return false;
  };

  function finishRegister() {
    scrProps.navigation.navigate("PickLanguage");
  }

  return (
    <ScrollView style={!isDesktop && { backgroundColor: "#2C2831" }}>
      <ContentHolder title="Escolha um nome de usuário">
        <TextInput
          mode="outlined"
          label="Nome"
          style={{
            width: "100%",
            backgroundColor: "#49454FFF",
            borderColor: "#49454FFF",
          }}
          outlineColor="#49454FFF"
          activeOutlineColor="#D0BCFFFF"
          onChangeText={onChangeName}
        />
        <HelperText
          type="error"
          visible={nameHasErrors()}
          style={{ alignSelf: "flex-start" }}
        >
          Esse nome já está em uso
        </HelperText>

        <Button
          disabled={nameHasErrors() || name == ""}
          color={{ text: "white", button: "#8951FF" }}
          marginTop={1.5}
          onPress={finishRegister}
        >
          Continuar
        </Button>
      </ContentHolder>
    </ScrollView>
  );
}

function setPageTitle(title: string, nav: any) {
  if (testing.get()) return;
  nav.setOptions({ title: title });
}

const styles = StyleSheet.create({});

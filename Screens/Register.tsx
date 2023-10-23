import React from "react";
import { ScreenProps } from "./types";
import { ScrollView } from "react-native-gesture-handler";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { testing } from "../store/state";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { HelperText, TextInput } from "react-native-paper";
import ContentHolder from "../Components/ContentHolder";
import Button from "../Components/Buttons/Button";
import { Button as RNPButton } from "react-native-paper";

export default function Register(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;
  if (isDesktop) setPageTitle("", scrProps.navigation);

  const [email, setEmail] = React.useState("");
  const onChangeEmail = (email: any) => setEmail(email);
  const emailhasErrors = () => {
    if (email == "") return false;
    return !email.includes("@");
    // CHECK EMAIL IS TAKEN
  };

  const [password, setPassword] = React.useState("");
  const onChangePassword = (password: any) => setPassword(password);
  const passwordHasErrors = () => {
    if (password == "") return false;
    if (password.length < 10) return true;

    return false;
  };

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const onChangeConfirmPassword = (confirmPassword: any) =>
    setConfirmPassword(confirmPassword);
  const confirmPasswordHasErrors = () => {
    if (confirmPassword == "") return false;
    return confirmPassword != password;
  };

  function register() {
    const user = {
      // send this to a global variable
      email: email,
      password: password,
    };

    scrProps.navigation.navigate("PickUsername");
  }

  return (
    <ScrollView style={!isDesktop && { backgroundColor: "#2C2831" }}>
      <ContentHolder title="Criar uma conta">
        <TextInput
          mode="outlined"
          label="Email"
          style={{
            width: "100%",
            backgroundColor: "#49454FFF",
            borderColor: "#49454FFF",
          }}
          outlineColor="#49454FFF"
          activeOutlineColor="#D0BCFFFF"
          onChangeText={onChangeEmail}
        />
        <HelperText
          type="error"
          visible={emailhasErrors()}
          style={{ alignSelf: "flex-start" }}
        >
          Endereço de email inválido!
        </HelperText>

        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry={true}
          style={{
            width: "100%",
            backgroundColor: "#49454FFF",
          }}
          outlineColor="#49454FFF"
          activeOutlineColor="#D0BCFFFF"
          onChangeText={onChangePassword}
        />
        <HelperText
          type="error"
          visible={passwordHasErrors()}
          style={{ alignSelf: "flex-start" }}
        >
          A senha não é forte o suficiente!
        </HelperText>
        <TextInput
          mode="outlined"
          label="Repita a senha"
          secureTextEntry={true}
          style={{
            width: "100%",
            backgroundColor: "#49454FFF",
          }}
          outlineColor="#49454FFF"
          activeOutlineColor="#D0BCFFFF"
          onChangeText={onChangeConfirmPassword}
        />
        <HelperText
          type="error"
          visible={confirmPasswordHasErrors()}
          style={{ alignSelf: "flex-start" }}
        >
          As senhas não coincidem!
        </HelperText>

        <Button
          disabled={
            emailhasErrors() ||
            passwordHasErrors() ||
            confirmPasswordHasErrors() ||
            email == "" ||
            password == "" ||
            confirmPassword == ""
          }
          color={{ text: "white", button: "#8951FF" }}
          onPress={register}
          marginTop={1.5}
        >
          Criar
        </Button>

        <RNPButton
          mode="text"
          onPress={() => scrProps.navigation.navigate("Login")}
          style={{ marginTop: hp(3) }}
        >
          Entre em uma conta existente
        </RNPButton>
      </ContentHolder>
    </ScrollView>
  );
}

function setPageTitle(title: string, nav: any) {
  if (testing.get()) return;
  nav.setOptions({ title: title });
}

const styles = StyleSheet.create({});

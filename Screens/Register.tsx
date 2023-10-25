import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { HelperText, TextInput } from "react-native-paper";
import ContentHolder from "../Components/ContentHolder";
import Button from "../Components/Buttons/Button";
import { Button as RNPButton } from "react-native-paper";
import { NavigationScreen } from "./Components/NavigationScreen";
import { withNavigation } from "react-navigation";
import { userRegister } from "../store/register";

class Register extends NavigationScreen {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  componentDidMount() {
    if (this.desktop) this.setTitle("");
  }

  register = () => {
    let email = (this.state as any).email;
    let password = (this.state as any).password;

    userRegister.set({
      email: email,
      password: password,
    });

    this.navigateTo("PickUsername");
  };

  render() {
    const onChangeEmail = (email: any) => this.setState({ email: email });
    const onChangePassword = (password: any) =>
      this.setState({ password: password });
    const onChangeConfirmPassword = (confirmPassword: any) =>
      this.setState({ confirmPassword: confirmPassword });

    let email = (this.state as any).email;
    let password = (this.state as any).password;
    let confirmPassword = (this.state as any).confirmPassword;

    const emailhasErrors = () => {
      if (email == "") return false;
      return !email.includes("@");
      // CHECK EMAIL IS TAKEN
    };
    const passwordHasErrors = () => {
      if (password == "") return false;
      if (password.length < 10) return true;

      return false;
    };
    const confirmPasswordHasErrors = () => {
      if (confirmPassword == "") return false;
      return confirmPassword != password;
    };

    return (
      <ScrollView style={!this.desktop && { backgroundColor: "#2C2831" }}>
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
            onPress={this.register}
            marginTop={1.5}
          >
            Criar
          </Button>

          <RNPButton
            mode="text"
            onPress={() => this.navigateTo("Login")}
            style={{ marginTop: hp(3) }}
          >
            Entre em uma conta existente
          </RNPButton>
        </ContentHolder>
      </ScrollView>
    );
  }
}

export default withNavigation(Register);

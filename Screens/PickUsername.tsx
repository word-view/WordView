import { ScrollView } from "react-native-gesture-handler";
import ContentHolder from "../Components/ContentHolder";
import { HelperText, TextInput } from "react-native-paper";
import Button from "../Components/Buttons/Button";
import React from "react";
import { NavigationScreen } from "./Components/NavigationScreen";
import { withNavigation } from "react-navigation";
import { userRegister } from "../store/register";
import { register } from "../modules/api";
import { setUserToken } from "../persistance/account";

class PickUsername extends NavigationScreen {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    if (this.desktop) this.setTitle("");
    this.removeBackAction();
  }

  finishRegister = async () => {
    let user = userRegister.get();
    user.username = (this.state as any).name;
    userRegister.set(user);

    if (!user.username) return;

    const response = await register(user.email, user.username, user.password);

    if ("token" in response) {
      await setUserToken(response.token);
      this.navigateTo("PickLanguage");
    } else console.error(response);
  };

  render() {
    let nayme = (this.state as any).name;

    const onChangeName = (name: any) => this.setState({ name: name });
    const nameHasErrors = () => {
      if (nayme == "") return false;
      if (nayme.length < 4) return true;

      return false;
    };

    return (
      <ScrollView style={!this.desktop && { backgroundColor: "#2C2831" }}>
        <ContentHolder title="Escolha um nome de usuário">
          <TextInput
            mode="outlined"
            label="Nome"
            style={{
              width: "100%",
              backgroundColor: "#49454F",
              borderColor: "#49454F",
            }}
            outlineColor="#49454F"
            activeOutlineColor="#D0BCFF"
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
            disabled={nameHasErrors() || nayme == ""}
            color={{ text: "white", button: "#8951FF" }}
            marginTop={1.5}
            onPress={this.finishRegister}
          >
            Continuar
          </Button>
        </ContentHolder>
      </ScrollView>
    );
  }
}

export default withNavigation(PickUsername);

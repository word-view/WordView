import { withNavigation } from "react-navigation";
import { NavigationScreen } from "./Components/NavigationScreen";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import ContentHolder from "../Components/ContentHolder";
import { HelperText, TextInput } from "react-native-paper";
import Button from "../Components/Buttons/Button";
import { login } from "../modules/api";

class EmailLogin extends NavigationScreen {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    if (this.desktop) this.setTitle("");
  }

  login = () => {
    let email = (this.state as any).email;
    let password = (this.state as any).password;

    const response = login(email, password);

    this.navigateTo("PickLanguage");
  };

  render() {
    const onChangeEmail = (email: any) => this.setState({ email: email });
    let email = (this.state as any).email;
    const emailhasErrors = () => {
      if (email == "") return false;
      return !email.includes("@");
      // CHECK EMAIL IS TAKEN
    };

    const onChangePassword = (password: any) =>
      this.setState({ password: password });
    let password = (this.state as any).password;
    const passwordHasErrors = () => {
      if (password == "") return false;

      return false;
    };

    return (
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={!this.desktop && { backgroundColor: "#2C2831" }}
      >
        <ContentHolder title="Login com Email">
          <TextInput
            mode="outlined"
            label="Email"
            style={{
              width: "100%",
              backgroundColor: "#49454F",
              borderColor: "#49454F",
            }}
            outlineColor="#49454F"
            activeOutlineColor="#D0BCFF"
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
            style={{
              width: "100%",
              backgroundColor: "#49454F",
              borderColor: "#49454F",
            }}
            outlineColor="#49454F"
            activeOutlineColor="#D0BCFF"
            onChangeText={onChangePassword}
          />
          <HelperText
            type="error"
            visible={passwordHasErrors()}
            style={{ alignSelf: "flex-start" }}
          >
            {" "}
          </HelperText>

          <Button
            disabled={
              emailhasErrors() ||
              email == "" ||
              passwordHasErrors() ||
              password == ""
            }
            color={{ text: "white", button: "#8951FF" }}
            onPress={this.login}
            marginTop={1.5}
          >
            Login
          </Button>
        </ContentHolder>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default withNavigation(EmailLogin);

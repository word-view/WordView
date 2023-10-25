import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../../globalStyles";
import { Avatar, Banner, Surface, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationScreen } from "../Components/NavigationScreen";
import { withNavigation } from "react-navigation";

class AccountSettings extends NavigationScreen {
  constructor(props: any) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  render() {
    return (
      <ScrollView>
        <Banner
          visible={(this.state as any).visible}
          actions={[
            {
              label: "Ignorar",
              onPress: () => this.setState({ visible: false }),
            },
            {
              label: "Criar uma conta",
              onPress: () => this.setState({ visible: false }),
            },
          ]}
        >
          O progresso salvo aqui é temporário, para salvar seu progresso de
          maneira permanente crie uma conta
        </Banner>

        <Surface
          elevation={4}
          style={[
            globalStyles.container,
            {
              alignSelf: "center",
              marginTop: hp(2.5),
              padding: 20,
              borderRadius: 5,
            },
            this.desktop
              ? desktopStyles.infoContainer
              : mobileStyles.infoContainer,
          ]}
        >
          <Avatar.Text size={96} label="GU" />

          <Text variant="titleLarge" style={{ marginTop: hp(1) }}>
            Guest
          </Text>
        </Surface>

        <View
          style={[
            { alignSelf: "center", marginTop: hp(2.5) },
            this.desktop
              ? desktopStyles.infoContainer
              : mobileStyles.infoContainer,
          ]}
        >
          <Text variant="headlineSmall" style={{ marginTop: hp(1) }}>
            Progress
          </Text>
        </View>
        <Surface
          elevation={4}
          style={[
            globalStyles.container,
            {
              alignSelf: "center",
              marginTop: hp(1),
              padding: 20,
              borderRadius: 5,
            },
            this.desktop
              ? desktopStyles.infoContainer
              : mobileStyles.infoContainer,
          ]}
        >
          <View style={{ alignItems: "center", alignSelf: "flex-start" }}>
            <Avatar.Text size={48} label="10" />
            <Text variant="titleSmall" style={{ marginTop: hp(1) }}>
              Words Learned
            </Text>
          </View>

          <View style={{ alignItems: "center", alignSelf: "flex-end" }}>
            <Avatar.Text size={48} label="2" />
            <Text variant="titleSmall" style={{ marginTop: hp(1) }}>
              Lessons Completed
            </Text>
          </View>
        </Surface>
      </ScrollView>
    );
  }
}

const desktopStyles = StyleSheet.create({
  infoContainer: {
    width: wp(40),
  },
});

const mobileStyles = StyleSheet.create({
  infoContainer: {
    width: wp(90),
  },
});

const styles = StyleSheet.create({});

export default withNavigation(AccountSettings);

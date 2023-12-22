import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { NavigationScreen } from "../UI/Screens/NavigationScreen";
import SettingEntry from "./Components/SettingEntry";
import Section from "./Components/Section";

class Settings extends NavigationScreen {
  render() {
    return (
      <ScrollView style={styles.root}>
        <Section title="Outros" style={{ marginTop: 25 }}>
          {/* <SettingEntry
            title="Study Reminders"
            settingDaemonId="reminders"
            type="switch"
            style={{ marginBottom: 10 }}
          /> */}
          <SettingEntry
            title="Lembretes intermitentes aleatórios"
            description="Projetado para evitar o hábito instintivo de ignorar os lembretes normais que sempre aparecem no mesmo horário"
            type="switch"
            settingDaemonId="random-intermittent-reminders"
            disabled={false}
          />
        </Section>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
});

export default withNavigation(Settings);

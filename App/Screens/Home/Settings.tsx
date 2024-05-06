import { ScrollView, StyleSheet } from 'react-native';
import { Section, SettingEntry } from '../../Components';

interface Props {
  navigation: any;
}

function Settings() {
  return (
    <ScrollView style={styles.root}>
      <Section title='Outros' style={{ marginTop: 25 }}>
        <SettingEntry
          title='Lembretes intermitentes aleatórios'
          description='Projetado para evitar o hábito instintivo de ignorar os lembretes normais que sempre aparecem no mesmo horário'
          type='switch'
          settingDaemonId='random-intermittent-reminders'
          disabled={false}
        />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
});

export default Settings;

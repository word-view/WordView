import React, { memo } from "react";
import { ScrollView } from "react-native";

interface AccountSettingsProps {
  nav: any;
}

function AccountSettings(props: AccountSettingsProps) {
  return <ScrollView></ScrollView>;
}

export default memo(AccountSettings);

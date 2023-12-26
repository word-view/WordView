import { BackHandler, View } from "react-native";
import {
  Appbar,
  BottomNavigation,
  Button,
  Dialog,
  Portal,
  Text,
} from "react-native-paper";
import Main from "./Main";
import AccountSettings from "./Progress";
import { useEffect, useState } from "react";
import DesktopChecker from "../UI/Components/Backend/ResponsiveChecker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface HomeProps {
  navigation: any;
}

export default function Home(props: HomeProps) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const leaveApp = () => BackHandler.exitApp();

  const isDesktop = DesktopChecker().isDesktop;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "learn",
      title: "Learn",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "progress",
      title: "Your Progress",
      focusedIcon: "road-variant",
      unfocusedIcon: "road-variant",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    learn: () => <Main nav={props.navigation} />,
    progress: () => <AccountSettings nav={props.navigation} />,
  });

  useEffect(() => {
    props.navigation.addListener("beforeRemove", (e: any) => {
      e.preventDefault();
      setDialogVisible(true);
    });

    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          {isDesktop && (
            <>
              <Appbar.Action icon="home" onPress={() => setIndex(0)} />
              <Appbar.Action
                icon="road-variant"
                style={{ marginRight: wp(42.5) }}
                onPress={() => setIndex(1)}
              />
            </>
          )}
          <Appbar.Action
            icon="cog"
            onPress={() => props.navigation.navigate("Settings")}
          />
        </View>
      ),
    });
  }, []);

  return (
    <>
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={() => setDialogVisible(false)}
        >
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Tem certeza que quer fechar o aplicativo?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={leaveApp}>Fechar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        sceneAnimationEnabled={true}
        barStyle={isDesktop && { height: 0 }}
      />
    </>
  );
}

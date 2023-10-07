import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../Components/Home/Header";
import ActivityCircle from "../Components/Home/ActivityCircle";
import RoundedButton from "../Components/RoundedButton";
import AttentionBox from "../Components/Home/AttentionBox";
import globalStyles from "../globalStyles";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ScreenProps } from "./types";
import { ReactiveComponent } from "../Components/types";
import ContinueProgressBar from "../Components/Home/ContinueProgressBar";
import images from "../images";
import SVGButton from "../Components/SVGButton";
import SettingsIcon from "../Components/SVG/SettingsIcon";
import { Lesson, getLessons } from "@wordview/api";

function RecommendedSection({ isDesktop }: ReactiveComponent) {
  const [lessons, setLessons] = useState([] as Lesson[]);

  getLessons("starter").then(({ data }) => setLessons(data));

  return (
    <>
      <Text
        style={[
          globalStyles.mediumUIText,
          styles.sectionLabel,
          !isDesktop && { marginLeft: 15 },
        ]}
      >
        Aulas sugeridas
      </Text>
      <Text
        style={[
          globalStyles.mediumUIText,
          styles.sectionLabelDetails,
          !isDesktop && { marginLeft: 15 },
        ]}
      >
        Aulas simples para você entender como o app funciona
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          alignSelf: "center",
          width: "100%",
          height: "20%",
          marginTop: 10,
        }}
      >
        {lessons.map((lesson, i) => (
          <ActivityCircle
            color="#63FF72"
            style={{ marginLeft: 15 }}
            textUnder={lesson.title}
            difficulty={lesson.difficulty}
            onPress={() => {
              console.log(lesson.id);
            }}
            {...{ isDesktop }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={images.cac}
            />
          </ActivityCircle>
        ))}
      </ScrollView>
    </>
  );
}

function ContinueSection({ isDesktop }: ReactiveComponent) {
  return (
    <>
      <Text
        style={[
          globalStyles.mediumUIText,
          styles.sectionLabel,
          !isDesktop && { marginLeft: 15 },
        ]}
      >
        Continue de onde parou
      </Text>
      <Text
        style={[
          globalStyles.mediumUIText,
          styles.sectionLabelDetails,
          !isDesktop && { marginLeft: 15 },
        ]}
      >
        Atividades que você ainda não terminou
      </Text>
      <View>
        <AttentionBox
          level={1}
          style={[
            styles.attentionBox1,
            { height: isDesktop ? hp(38) : hp(29) },
          ]}
        >
          <View
            style={[
              { width: "100%", flexDirection: "row" },
              !isDesktop && { alignSelf: "center" },
            ]}
          >
            <ActivityCircle
              color="#63A1FF"
              style={styles.borderAvoider}
              {...{ isDesktop }}
            />

            <View style={styles.borderAvoider}>
              <Text style={globalStyles.regularUIText}>
                Eletronics & Technology
              </Text>

              {!isDesktop && (
                <ContinueProgressBar percentage={64} {...{ isDesktop }} />
              )}
            </View>
          </View>

          {isDesktop && (
            <ContinueProgressBar percentage={64} {...{ isDesktop }} />
          )}

          <RoundedButton
            text="Continuar"
            color="#2661F8"
            textColor="white"
            style={[
              { marginTop: isDesktop ? 10 : 20 },
              !isDesktop && { alignSelf: "center" },
              isDesktop && { alignSelf: "flex-start", marginLeft: 15 },
            ]}
            {...{ isDesktop }}
          />
        </AttentionBox>

        <AttentionBox
          level={2}
          style={
            isDesktop ? desktopStyles.attentionBox2 : mobileStyles.attentionBox2
          }
        >
          <Text
            style={[
              globalStyles.mediumUIText,
              styles.sectionLabel,
              styles.inProgressLabel,
              { marginTop: isDesktop ? 20 : 70 },
            ]}
          >
            Em progresso
          </Text>
        </AttentionBox>
      </View>
    </>
  );
}

export default function Home({ navigation, testing = false }: ScreenProps) {
  const isDesktop = testing ? true : ResponsiveChecker().isDesktop;

  const hasUndoneActivities = false;
  const isNewUser = true;

  return (
    <>
      <Header {...{ isDesktop }}>
        <View style={styles.wvTitleHolder}>
          <Image style={styles.wvIcon} source={images.wvIcon} />
          {isDesktop && (
            <Image style={styles.wvTitle} source={images.wvTitle} />
          )}
        </View>

        <SVGButton
          style={{ alignSelf: "flex-end", marginHorizontal: 15 }}
          onHoverAnimationDirection="top"
          onPress={() => {
            navigation.navigate("Settings");
          }}
          {...{ isDesktop }}
        >
          <SettingsIcon />
        </SVGButton>
      </Header>
      <View style={styles.container}>
        <ScrollView
          style={[styles.scrollView, isDesktop && { paddingHorizontal: 15 }]}
        >
          {!isDesktop && (
            <Text
              style={[
                globalStyles.mediumUIText,
                styles.sectionLabel,
                {
                  width: "100%",
                  textAlign: "center",
                  fontSize: 22,
                  marginBottom: 25,
                },
              ]}
            >
              Bem-vindo ao WordView!
            </Text>
          )}

          {hasUndoneActivities && <ContinueSection {...{ isDesktop }} />}
          {isNewUser && <RecommendedSection {...{ isDesktop }} />}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
    position: "relative",
  },
  wvTitleHolder: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
  borderAvoider: {
    marginTop: 20,
    marginLeft: 20,
  },
  attentionBox1: {
    width: "100%",
    alignItems: "center",
    zIndex: 20,
    position: "absolute",
  },
  continueButton: {
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  scrollView: {
    width: "100%",
    marginTop: hp(2.5),
    alignSelf: "center",
  },
  sectionLabel: {
    fontWeight: "600",
  },
  sectionLabelDetails: {
    fontWeight: "400",
    color: "#CCCCCC",
    fontSize: 12,
    marginBottom: 10,
  },
  inProgressLabel: {
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  wvIcon: {
    height: 34,
    width: 42,
    marginLeft: 15,
  },
  wvTitle: {
    height: 20,
    width: 120,
    marginLeft: 15,
  },
});

const desktopStyles = StyleSheet.create({
  attentionBox2: {
    width: "50%",
    height: hp(30),
    zIndex: 30,
    marginTop: 20,
    alignSelf: "flex-end",
    marginRight: 15,
  },
});

const mobileStyles = StyleSheet.create({
  attentionBox2: {
    width: "100%",
    height: hp(28),
    zIndex: 10,
    marginTop: hp(23),
    position: "relative",
  },
});

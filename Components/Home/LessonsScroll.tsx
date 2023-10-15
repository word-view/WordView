import { Text, StyleSheet, ScrollView, Image } from "react-native";
import { Lesson } from "../../modules/api";
import ActivityCircle from "./ActivityCircle";
import { currentLesson } from "../../store/lesson";
import ResponsiveChecker from "../Backend/ResponsiveChecker";
import globalStyles from "../../globalStyles";
import images from "../../images";

interface LessonScrollProps {
  lessons: Lesson[];
  nav: any;
}

// TODO: bring lesson rendering to here
export default function LessonScroll(props: LessonScrollProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  function activityCirclePress(lesson: Lesson) {
    currentLesson.set(lesson);
    props.nav.navigate("Lesson");
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.lessonsScroll}
    >
      {props.lessons?.map((lesson, i) => (
        <ActivityCircle
          color="#63FF72"
          style={{ marginLeft: 15 }}
          textUnder={lesson.title}
          difficulty={lesson.difficulty}
          key={i}
          onPress={() => activityCirclePress(lesson)}
          isDesktop={isDesktop}
        >
          <Image style={globalStyles.full} source={images.cac} />
        </ActivityCircle>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lessonsScroll: {
    alignSelf: "center",
    width: "100%",
    height: "20%",
    marginTop: 10,
  },
});

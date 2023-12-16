import { createStore } from "@propero/easy-store";
import { Lesson, Word } from "../modules/api";
import LessonTimer from "../Screens/Home/Lesson/LessonTimer";

export const currentLesson = createStore({} as Lesson);
export const globalLessonTime = createStore<number | undefined>(undefined);

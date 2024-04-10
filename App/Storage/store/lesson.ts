import { createStore } from "@propero/easy-store";
import { Lesson } from "../../modules/api";

export const currentLesson = createStore({} as Lesson);
export const globalLessonTime = createStore<number | undefined>(undefined);

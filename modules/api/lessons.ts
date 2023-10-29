// import { client } from './client';

export type Difficulty = "starter" | "intermidiate" | "advanced";

export interface Lesson {
  id: number;
  title: string;
  difficulty: Difficulty;
}

export async function getLessons(difficulty: Difficulty) {
  try {
    const response = await fetch(
      `http://192.168.1.104:8080/api/v1/lesson/search?diffi=${difficulty}`
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

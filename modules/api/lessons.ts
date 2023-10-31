import { ErrorResponse, get } from "./client";

export type Difficulty = "starter" | "intermidiate" | "advanced";

export interface Lesson {
  id: number;
  title: string;
  difficulty: Difficulty;
}

export async function lessons(difficulty: Difficulty) {
  const response = await get(`/lesson/search?diffi=${difficulty}`);

  if (response.status == 200) {
    return (await response.json()) as Lesson[];
  }

  const responseText = await response.text();

  return {
    status: response.status,
    message: responseText,
  } as ErrorResponse;
}

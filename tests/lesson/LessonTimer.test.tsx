import LessonTimer from "../../src/Lesson/LessonTimer";

it(`Start a timer`, (done) => {
  const timer = new LessonTimer(() => done());
  timer.setDuration(2000);
  timer.run();
});

export function formatTime(ms: number) {
  if (ms <= 0) return "00:00";

  let seconds = Math.floor(ms / 1000);

  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  let formattedOutput = "";

  if (hours > 0) {
    formattedOutput += `${hours.toString().padStart(2, "0")}:`;
  }

  formattedOutput += `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return formattedOutput;
}

export function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

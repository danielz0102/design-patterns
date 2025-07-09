import { AudioPlayer } from "./AudioPlayer.js";

const audio = new AudioPlayer("./sound.mp3", 0.5);
const playBtn = document.querySelector("#playBtn");
const stopBtn = document.querySelector("#stopBtn");

playBtn.addEventListener("click", () => {
  audio.play(3000);
});

stopBtn.addEventListener("click", () => {
  audio.stop();
});

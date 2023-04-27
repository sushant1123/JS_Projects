const display = document.querySelector(".display");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let startTime,
  intervalId,
  isAlreadyStarted = false;

// initially stop n reset btns will be disabled
if (!isAlreadyStarted) {
  stopBtn.classList.add("disabled");
  resetBtn.classList.add("disabled");
}

const convertToFormat = (time) => {
  let newTime = time;
  if (time <= 9) {
    newTime = "0" + time;
  }
  return newTime;
};

const startTimer = () => {
  isAlreadyStarted = true;
  startTime = Date.now();

  startBtn.classList.add("disabled");
  stopBtn.classList.remove("disabled");
  resetBtn.classList.remove("disabled");

  intervalId = setInterval(() => {
    const elapsedTime = Date.now() - startTime;

    let allSeconds = Math.floor(elapsedTime / 1000);
    const seconds = Math.floor(allSeconds % 60);
    const minutes = Math.floor(allSeconds / 60);
    const hours = Math.floor(minutes / (60 * 60));

    const formattedTime = `${convertToFormat(hours)}:${convertToFormat(
      minutes
    )}:${convertToFormat(seconds)}`;

    display.innerText = formattedTime;
  }, 10);
};

const resetTimer = () => {
  clearInterval(intervalId);
  startTime = 0;
  display.innerText = "00:00:00";
  isAlreadyStarted = false;
  startBtn.classList.remove("disabled");
};

const stopTimer = () => {
  clearInterval(intervalId);
  isAlreadyStarted = false;
  startBtn.classList.remove("disabled");
};

startBtn.addEventListener("click", (e) => {
  console.log("startBtn clicked");
  if (!isAlreadyStarted) {
    startTimer();
  }
});

stopBtn.addEventListener("click", (e) => {
  console.log("stopBtn clicked");
  stopTimer();
});

resetBtn.addEventListener("click", (e) => {
  console.log("resetBtn clicked");
  resetTimer();
});

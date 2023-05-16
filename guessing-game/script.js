let message = document.getElementById("message");
let resetBtn = document.getElementById("reset-btn");
let guessBtn = document.getElementById("guess-btn");
let inputGuess = document.getElementById("guess");

inputGuess.focus();

let randomNum = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let guess = parseInt(inputGuess.value);
  let msg = "";

  if (guess === randomNum) {
    msg = "Congratulations! You guessed it right.";
    message.style.color = "green";
  } else if (guess < randomNum) {
    msg = "Too low, try again!";
    message.style.color = "red";
  } else {
    msg = "Too high, try again!";
    message.style.color = "red";
  }

  message.textContent = msg;
}

function resetGame() {
  inputGuess.value = "";
  message.textContent = "";
  randomNum = Math.floor(Math.random() * 100) + 1;
}

guessBtn.addEventListener("click", (e) => {
  if (!inputGuess.value) {
    alert("Please enter a number to proceed");
    return;
  }
  if (inputGuess.value < 1 || inputGuess.value > 100) {
    alert("Please enter a number between 1 to 100");
    return;
  }

  checkGuess();
});

resetBtn.addEventListener("click", resetGame);

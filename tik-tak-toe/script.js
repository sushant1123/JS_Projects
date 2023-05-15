const message = document.getElementById("message");
const cells = document.querySelectorAll(".cell");
const reset = document.querySelector(".reset");
const gameContainer = document.querySelector("#game-container");

// let board = new Set();
let board = Array(9).fill("");
let player = "X";

window.addEventListener("load", (e) => {
  message.textContent = `${player}'s Turn`;
});

// licten click event on each of a cell
cells.forEach((cell, index) => {
  cell.addEventListener("click", (e) => {
    if (cell.textContent) return;

    if (board[index] === "" && !isGameOver()) {
      board[index] = player;
      cell.classList.add(player.toLowerCase());
      cell.classList.add("block");

      cell.textContent = player;

      // check if the game is over after the current move or not.
      if (isGameOver()) {
        console.log("game won by", player);
        message.textContent = `${player} wins!`;

        cells.forEach((cell) => {
          cell.removeEventListener("click", handleClick);
        });
      } else if (!board.includes("")) {
        // update the message if the game is draw
        message.textContent = "It's a Draw!";
      } else {
        player = player === "X" ? "O" : "X";
        message.textContent = `${player}'s Turn`;
      }
    }
  });
});

function handleClick() {}

function resetAll() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o", "block");
  });
  player = "X";
  message.textContent = `${player}'s Turn`;
  board = Array(9).fill("");
}

reset.addEventListener("click", resetAll);

//function to check the game status
function isGameOver() {
  // game winning combinations
  const winningCombos = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  // logic to test whether game is won by any player or not.
  return winningCombos.some((combo) => {
    // actual logic to test each combination.

    return (
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    );
  });
}

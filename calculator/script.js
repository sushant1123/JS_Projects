const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculation = "";

function calculate(button) {
  const value = button.textContent;

  if (value.toLowerCase() === "clear") {
    calculation = [];
    screenDisplay.textContent = "0";
    accumulativeCalculation = "";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation);
    calculation = [];
    accumulativeCalculation = "";
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    console.log(`${button.textContent} is clicked`);
    calculate(button);
  })
);

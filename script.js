/**
 * The above JavaScript code is a simple calculator that performs basic arithmetic operations.
 * @returns The code does not have a specific return statement. However, there are several functions in
 * the code that perform specific tasks and may return a value.
 */
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let resetScreen = false;

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const eqButton = document.querySelector(".eqButton");
const clearButton = document.querySelector(".clearButton");

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (resetScreen) {
      display.textContent = "";
      resetScreen = false;
    }
    display.textContent += button.textContent;
  });
});

opButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentOperator !== null) compute();
    firstOperand = display.textContent;
    currentOperator = button.textContent;
    display.textContent = `${firstOperand} ${currentOperator}`;
    resetScreen = true;
  });
});

eqButton.addEventListener('click', () => {
  if (currentOperator === null) return;
  secondOperand = display.textContent.split(" ")[0];
  compute();
});

clearButton.addEventListener('click', () => {
  display.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
});

function compute() {
  if (currentOperator === null) return;

  secondOperand = display.textContent.split(" ")[0];
  const result = operate(currentOperator, firstOperand, secondOperand);
  display.textContent = `${firstOperand} ${currentOperator} ${secondOperand} = ${result}`;
  currentOperator = null;
}

function clear() {
  display.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return 'Error! Div by 0';
      return a / b;
    default:
      return b;
  }
}

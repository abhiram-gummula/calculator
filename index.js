// Define variables for calculator screen and buttons
const screen = document.getElementById("result");
const buttons = document.querySelectorAll(".button");

// Initialize variables for calculator logic
let input = "";
let operator = "";
let result = null;
let isExpressionCalculated = false;

// Function to update calculator screen
function updateScreen(value) {
  screen.value = value;
}

// Function to clear calculator screen and variables
function clearScreen() {
  input = "";
  operator = "";
  result = null;
  isExpressionCalculated = false;
  updateScreen("");
}

// Function to handle number input
function handleNumberInput(number) {
  if (isExpressionCalculated) {
    clearScreen();
  }
  input += number;
  updateScreen(input);
}

// Function to handle operator input


function handleOperatorInput(selectedOperator) {
  if (input === "") return;
  if (operator !== "" && result !== null) {
    calculateResult();
  }
  operator = selectedOperator;
  input += operator; // Concatenate operator to current input
  result = parseFloat(input.replace(operator, ""));
  updateScreen(input);
}

// Function to handle equal button input
function handleEqualInput() {
  if (input === "" || operator === "") return;
  calculateResult();
  isExpressionCalculated = true;
}

// Function to perform calculation
function calculateResult() {
  let currentInput = parseFloat(input);
  if (isNaN(currentInput)) return;
  switch (operator) {
    case "+":
      result += currentInput;
      break;
    case "-":
      result -= currentInput;
      break;
    case "*":
      result *= currentInput;
      break;
    case "/":
      if (currentInput === 0) {
        clearScreen();
        updateScreen("ERROR");
        return;
      }
      result /= currentInput;
      break;
    default:
      return;
  }
  input = result.toString(); // Store result in input for further calculations
  operator = "";
  updateScreen(input);
}

// Loop through buttons and add event listeners
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    switch (buttonValue) {
      case "C":
        clearScreen();
        break;
      case "←":
        input = input.slice(0, -1);
        updateScreen(input);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperatorInput(buttonValue);
        break;
      case "=":
        handleEqualInput();
        break;
      default:
        handleNumberInput(buttonValue);
        break;
    }
  });
});

// Add keyboard support
document.addEventListener("keydown", (event) => {
  const keyPressed = event.key;
  if (keyPressed >= 0 && keyPressed <= 9) {
    handleNumberInput(keyPressed);
  } else {
    switch (keyPressed) {
      case "Escape":
        clearScreen();
        break;
      case "Backspace":
        input = input.slice(0, -1);
        updateScreen(input);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperatorInput(keyPressed);
        break;
      case "=":
      case "Enter":
        handleEqualInput();
        break;
      default:
        break;
    }
  }
});










// // Define variables for calculator screen and buttons
// const screen = document.getElementById("result");
// const buttons = document.querySelectorAll(".button");

// // Initialize variables for calculator logic
// let input = "";
// let operator = "";
// let result = null;

// // Function to update calculator screen
// function updateScreen(value) {
//   screen.value = value;
// }

// // Function to clear calculator screen and variables
// function clearScreen() {
//   input = "";
//   operator = "";
//   result = null;
//   updateScreen("");
// }

// // Function to handle number input
// function handleNumberInput(number) {
//   input += number;
//   updateScreen(input);
// }

// // Function to handle operator input
// function handleOperatorInput(selectedOperator) {
//   if (input === "") return;
//   if (operator !== "" && result !== null) {
//     calculateResult();
//   }
//   operator = selectedOperator;
//   input += operator; // Concatenate operator to current input
//   result = parseFloat(input.replace(operator, ""));
//   updateScreen(input);
//   input = "";
// }


// // Function to handle equal button input
// function handleEqualInput() {
//   if (input === "" || operator === "") return;
//   calculateResult();
// }

// // Function to perform calculation
// function calculateResult() {
//   let currentInput = parseFloat(input);
//   if (isNaN(currentInput)) return;
//   switch (operator) {
//     case "+":
//       result += currentInput;
//       break;
//     case "-":
//       result -= currentInput;
//       break;
//     case "*":
//       result *= currentInput;
//       break;
//     case "/":
//       if (currentInput === 0) {
//         clearScreen();
//         updateScreen("ERROR");
//         return;
//       }
//       result /= currentInput;
//       break;
//     default:
//       return;
//   }
//   input = "";
//   operator = "";
//   updateScreen(result);
// }

// // Loop through buttons and add event listeners
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const buttonValue = button.textContent;
//     switch (buttonValue) {
//       case "C":
//         clearScreen();
//         break;
//       case "←":
//         input = input.slice(0, -1);
//         updateScreen(input);
//         break;
//       case "+":
//       case "-":
//       case "*":
//       case "/":
//         handleOperatorInput(buttonValue);
//         break;
//       case "=":
//         handleEqualInput();
//         break;
//       default:
//         handleNumberInput(buttonValue);
//         break;
//     }
//   });
// });


// // Add keyboard support
// document.addEventListener("keydown", (event) => {
//   const keyPressed = event.key;
//   if (keyPressed >= 0 && keyPressed <= 9) {
//     handleNumberInput(keyPressed);
//   } else {
//     switch (keyPressed) {
//       case "Escape":
//         clearScreen();
//         break;
//       case "Backspace":
//         input = input.slice(0, -1);
//         updateScreen(input);
//         break;
//       case "+":
//       case "-":
//       case "*":
//       case "/":
//         handleOperatorInput(keyPressed);
//         break;
//       case "=":
//       case "Enter":
//         handleEqualInput();
//         break;
//       default:
//         break;
//     }
//   }
// });

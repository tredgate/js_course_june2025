//switch_calculator.js
const operation = "add";
const a = 0;
const b = 10;
let result;

switch (operation) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    console.error("CHYBA: nepodporovaná operace: " + operation);
}

console.log(`Výsledek operace: ${operation} je: ${result}`);

// console_function.js

logText();

function logText() {
  console.log("----------------");
  console.log("02/06/2025 15:50 Hello World!");
}

function logTextParam(textParameter) {
  console.log("----------------");
  console.log("02/06/2025 15:57 " + textParameter);
}

logText(); // provolání funkce
logText();
logText();
logTextParam("Provolávám funkci s parametrem");
logTextParam("Druhý text");

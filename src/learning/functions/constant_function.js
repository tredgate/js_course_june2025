//constant_function.js

// ! Nebude fungovat, protože v rámci const funkce musí nejdřív dojít k initializaci.
//logText("Ahoj!!");

const logText = (textParameter) => {
  console.log("----------------");
  console.log("02/06/2025 15:57 " + textParameter);
};

logText("Provolávám funkci s parametrem");

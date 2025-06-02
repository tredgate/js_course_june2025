//foreach_learning.js
const elements = ["button", "input", "radio"];

elements.forEach((element) => {
  console.log("Element: " + element);
});

// For each s indexem k získání čísla běhu
elements.forEach((element, index) => {
  console.log(`${index + 1}. element: "${element}"`);
});

elements.forEach((element, index) => {
  console.log(`${index + 1}. element: "${element}"`);
});

/*
Cvičení - forEach ⌛10:00:
Vytvořte ve složce: src/exercises soubor: foreach_exercise.js
Vytvořte array: usernames
Tuto array naplňte alespoň pěti string hodnotami.
Vytvořte forEach, který postupně vypíše hodnoty z array usernames.
*/

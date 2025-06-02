function add(a, b) {
  const result = a + b;
  console.log(`a + b = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`a - b = ${result}`);
}

const multiple = (a, b) => {
  const result = a * b;
  console.log(`a * b = ${result}`);
};

const divide = (a, b) => {
  const result = Math.round((a / b) * 100) / 100;
  console.log(`a / b = ${result}`);
};

add(15, 48);
subtract(98, 41);
multiple(54, 30);
divide(88, 6);

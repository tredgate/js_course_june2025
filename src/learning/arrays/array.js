//array.js
// Seznam 5 měst
const cities = ["Praha", "Brno", "Ostrava", "Olomouc", "Prostějov", "Benešov"];

console.log("Města: " + cities); // ? přetypuje cities na string: "Praha,Brno,Ostrava,Olomouc,Prostějov"
console.log(cities); // ? Zachová typ a vypíše přímo hodnotu: [ 'Praha', 'Brno', 'Ostrava', 'Olomouc', 'Prostějov' ]

// Chci vypsat 3. město:
console.log("3. město: " + cities[2]);

for (let i = 0; i < cities.length; i++) {
  console.log(`${i + 1}. město: ${cities[i]}`);
}

// Přidá prvek do array
cities.push("Hranice na Moravě");
console.log(cities);

// ? Deklarace a inicializace proměnné
let firstName = "Petr";
// ? Deklarace proměnné bez inicializace
let lastName;
lastName = "Fifka";

console.log(firstName + " " + lastName);
console.log(firstName + " " + lastName);
console.log(firstName + " " + lastName);

firstName = "Alžběta";
lastName = "Novotná";
console.log(firstName + " " + lastName);

firstName = "Marie";
console.log("Křestní jméno: " + firstName);

// Blok kódu
let outsideBlock = "venkovní";
{
  console.log(outsideBlock);
}

// ! toto nebude fungovat, proměnná uvnitř bloku existuje jen v něm
// {
//   let insideBlock = "vevnitř";
// }
// console.log(insideBlock);

var varName = "Var jméno";
var varName = "redeklarován var";
console.log(varName);

{
  var insideVar = "vevnitř var";
}

console.log(insideVar);

// ? const
// ! const musím inicializovat při deklaraci
const constDeclared = "konstanta";
// ! Nebude fungovat:
// const emptyConst;
// emptyConst = "Nope";

constDeclared = "změněná konstanta";
console.log(constDeclared);
/*

více
řádková
poznámka


 */

/**
 * dokumentace funkce/metod/proměnných
 */
function documented() {}

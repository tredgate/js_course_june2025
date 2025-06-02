const actualAge = 15;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`);
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu/jí ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
} else {
  console.error("CHYBA: actualAge musí být větší nebo roven 0");
}

// ! Porovnání dvou textů:
// if (text1 == text2) {
// } // Porovnání pouze hodnot: "19" == 19 -> true
// if (text1 === text2) {
// } // Porovnání hodnot a zároveň typy "19" === 19 -> false

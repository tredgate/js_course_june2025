//day.js
//src/learning/date-time

import dayjs from "dayjs";

console.log(dayjs().format());
console.log("Formát času (HH:mm:ss): " + dayjs().format("HH:mm:ss"));
console.log("Jaký je dnes den: " + dayjs().format("dddd"));
console.log("Formát data s tečkami: " + dayjs().format("D. M. YYYY"));

console.log("Zítřejší datum: " + dayjs().add(1, "day").format("DD.MM.YYYY"));
console.log("Předloni: " + dayjs().subtract(2, "years").format("DD.MM.YYYY"));
console.log(
  "Datum v budoucnosti: 25 let, 3 měsíce a 2 dny: " +
    dayjs()
      .add(25, "years")
      .add(3, "months")
      .add(2, "days")
      .format("DD.MM.YYYY")
);

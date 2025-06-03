import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName("male");
const accountName = faker.finance.accountName();
const accountNumber = faker.finance.accountNumber();
const amount = faker.finance.amount();

console.log(`Křestní jméno: ${firstName},
Název účtu: ${accountName}
Číslo účtu: ${accountNumber}
Částka: ${amount}€`);

/*
Cvičení (⌛7:00):
Vytvořte nová faker data v souboru: faker_exercise ve složce: src/exercises . 
Vygenerujte:
Jméno, pohlaví: muž
Vytvořte pro jméno údaje pro účet (pomocí fakeru):
accountName
accountNumber
amount
Údaje vypište do konzole

*/

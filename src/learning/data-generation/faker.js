import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const username = faker.internet.username({
  firstName: firstName,
  lastName: lastName,
});
const email = faker.internet.email({
  firstName: firstName,
  lastName: lastName,
  provider: "seznam.cz",
});

console.log("username: " + username);
console.log("Email: " + email);
console.log("Křestní jméno: " + firstName);
console.log("Příjmení: " + lastName);

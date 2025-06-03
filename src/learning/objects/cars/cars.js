import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6TDI",
  "Diesel",
  "Diesel Auto"
);
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();
dieselCar.logCarProperties();

const yellowCar = new CarBlueprint("Žlutá", "1.0TSI", "Benzín", "Žluťáček");
const secondYellowCar = yellowCar; // ! Nevytváří nový objekt!

yellowCar.repaint("Růžová");
yellowCar.logCarProperties();
secondYellowCar.logCarProperties();
dieselCar.logCarProperties();

const electricCarColor = electricCar.getColor();
console.log(`Barva Blesku: ${electricCarColor}`);
console.log(`Barva Blesku bez proměnné ${electricCar.getColor()}`);

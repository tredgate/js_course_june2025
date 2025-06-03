// cars.js
// car_blueprint.js

export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4;
    this.addDivider();
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    console.log("Auto je \"Připravené\" a 'Vhodné do provozu'"); // ? znak \ znamená tzv. escape sekvenci. Můžeme takto vypisovat speciální znaky, například uvozovky " do stringu a nebo mají další účely jako je například formátování kódu: \n = nový řádek, \t horizontální tabulátor
    this.addDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě "${this.carName}":\n\tbarva: ${this.color},\n\tmotor:${this.engine},\n\tpalivo: ${this.fuel}, \n\tpočet kol: ${this.wheels}`
    );
    this.addDivider();
  }

  addDivider() {
    console.log("------------------------------");
  }

  repaint(newColor) {
    console.log(`Přebarvuji ${this.carName} z ${this.color} na ${newColor}`);
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}

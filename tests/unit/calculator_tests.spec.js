import { expect } from "chai";
import { Calculator } from "../../src/calculator/calculator.js";

describe("Testy kalkulačky", () => {
  let calc;

  before(() => {
    console.log("before: běžím před prvním testem");
  });

  beforeEach(() => {
    calc = new Calculator();
    console.log("Běžím před každým testem");
  });

  after(() => {
    console.log("after: běžím po posledním testu");
  });

  afterEach(() => {
    console.log("afterEach: běžím po každým testu");
  });

  it("1 + 1 = 2", () => {
    expect(calc.add(1, 1)).to.equal(2);
  });

  it("5 - 3 = 2", () => {
    expect(calc.subtract(5, 3)).to.equal(2);
  });

  it("4 * 3 = 12", () => {
    expect(calc.multiply(4, 3)).to.equal(12);
  });

  it("14 / 7 = 2", () => {
    expect(calc.divide(14, 7)).to.equal(2);
  });
});

import { expect } from "chai";

describe("Můj první test", () => {
  it("1 rovná se 1", () => {
    // Testovací kroky testu
    expect(1).to.equal(1); // v expectu je aktuální hodnota, v equal() očekávaná
  });
});

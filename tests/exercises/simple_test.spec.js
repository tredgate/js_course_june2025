import { expect } from "chai";

describe("Cvičení: Mocha a Chai", () => {
  it("Petr je Petr", () => {
    const actual = "Petr";
    const expected = "Petr";
    expect(actual).to.eq(expected);
  });
});

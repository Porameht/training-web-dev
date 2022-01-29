const { appVersion, license, owner, getName } = require("./appVersion");
const { calculateCircleArea, calculateSquareArea } = require("./appVersion");

function greeting() {
  console.log("hello", appVersion, license, owner);
}

greeting();

const a1 = calculateSquareArea(7);

const a2 = calculateCircleArea(10);

const n1 = getName();

console.log(a1, a2, n1);

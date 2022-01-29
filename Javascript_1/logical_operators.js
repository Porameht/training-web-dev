// && and
// || or
// ! not

const a = 51;

// ----------------------------------------------------------------

// if (a > 10) {
//   if (a % 2 === 0) {
//     console.log("good luck");
//   } else {
//     console.log("bad1");
//   }
// } else {
//   console.log("bad2");
// }

// ---------------------------------------------------------------

// const conditionA = a > 10;
// const conditionB = a % 2 === 0;

// console.log("conditionA>>", conditionA);
// console.log("conditionB>>", conditionB);
// console.log("conditionA && conditionB", conditionA && conditionB);

// if (conditionA && conditionB) {
//   console.log("Lucky number");
// } else {
//   console.log("not Lucky number");
// }

// --------------------------------------------------------------

const conditionA = a > 10;
const conditionB = a % 2 === 0;

console.log("conditionA>>", !conditionA);
console.log("conditionB>>", conditionB);
console.log("conditionA || conditionB", conditionA || !conditionB);

if (!conditionA || conditionB) {
  console.log("Lucky number");
} else {
  console.log("not Lucky number");
}

// การส่ง function นึงลงไปเป็น agrument อีก function นึง
// a callback is a function passed as an argrument to another function

//exemple
// function sum(num1, num2) {
//   return num1 + num2;
// }

// function calculateAndLog(num1, num2, operator) {
//   const result = operator(num1, num2);
//   console.log("result >>", result);
// }

// // calculateAndLog(1, 2, sum);

//-----------------------------------------------------

function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 + num2;
}

// let lastResult;
// function saveLastResult(result) {
//   lastResult = result;
// }

let lastResult = 0;

function sumResult(result) {
  lastResult = lastResult + result;
}

function calAndLog(n1, n2, operator, finish) {
  const result = operator(n1, n2);
  console.log(result);
  finish(result);
}

calAndLog(4, 1, add, sumResult);
calAndLog(4, 5, mul, sumResult);
console.log(lastResult);

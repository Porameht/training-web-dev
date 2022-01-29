// is method of array

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function multiplyByTwo(num) {
  return num * 2;
}

const number1x2 = number1.map(multiplyByTwo); //map use for reciept function

function getZero() {
  return 0;
}

const number0 = number1.map(getZero);

console.log(number1);
console.log(number1x2);
console.log(number0);

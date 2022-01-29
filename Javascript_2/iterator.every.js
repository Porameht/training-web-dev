const number1 = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 === 0;
}

// check that all index is even or not
const isEveryNumberIsEven = number1.every(isEven);

console.log(isEveryNumberIsEven);

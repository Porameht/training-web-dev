const number1 = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 === 0;
}

// check that one index is even or not
const isSomeNumberIsEven = number1.some(isEven);

console.log(isSomeNumberIsEven);

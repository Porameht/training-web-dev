const number1 = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 === 0;
}
//filter data
const number1Even = number1.filter(isEven);

console.log(number1Even);

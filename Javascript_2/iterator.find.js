const number1 = [1, 2, 3, 4, 5, 6];

function isEvenFind(num) {
  return num % 2 === 0;
}

const firstEvenNumber = number1.find(isEvenFind);

console.log(firstEvenNumber);

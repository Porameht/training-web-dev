//

const a = [2, 444, 2124, 53, -24, 566];
let result;

console.log(a);
// logic
let maxNumber = a[0];
for (let i = 0; i < a.length; i++) {
  console.log(a[i], maxNumber);
  if (a[i] > maxNumber) {
    maxNumber = a[i]; //ถ้า a[i] มีค่ามากกว่า maxNumber ให้เก็บค่าใน maxNumber
  }
}

result = maxNumber;
console.log(result);

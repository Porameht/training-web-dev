// for + array
// for (variable of iterable)
// do something

const numbers = ["a", "b", "c"];

for (let i = 0; i < numbers.length; i = i + 1) {
  console.log("i :>>", i);
}

// -------------------------------------------

for (str of numbers) {
  console.log(str);
}

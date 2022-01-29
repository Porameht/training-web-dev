// asynchronous ไม่จัดลำดัับการ run

// function log() {
//   console.log(1);
// }

// function veryLongTime(finish) {
//   setTimeout(function () {
//     log(), finish();
//   }, 1000);
// }

// function finish() {
//   console.log(2);
// }

// veryLongTime(finish);

// console.log(2);

//-----------------------------------------

// function heavyCalculate(a, b, callback) {
//   setTimeout(function () {
//     const result = a + b;
//     callback(result);
//   }, 1000);
// }

// const result = heavyCalculate(1, 2, function (result) {
//   console.log(result);
// });

//----------------------------------------

function heavyCalculate(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

// heavyCalculate(1, 2).then(function (response) {
//   console.log(response);
// });

// heavyCalculate(1, 2).then(function (response) {
//   heavyCalculate(response, 3).then(function (response2) {
//     console.log(response2);
//   });
// });

//----------------------------------------
//async await

async function main() {
  const result1 = await heavyCalculate(1, 2);
  console.log(result1);
}

main();

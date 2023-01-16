// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("p1 promise");
//     // reject("p1 promise error");
//   }, 2000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("p2 promise");
//     // reject("p2 promise error");
//     // console.log("p2 completed");
//   }, 3000);
// });

// console.time();
// p1.then((dataP1) => {
//   console.log(dataP1);
//   return p2;
// })
//   .then((dataP2) => {
//     console.log(dataP2);
//     console.timeEnd();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise.all
// console.time();
// Promise.all([p1, p2])
//   .then((data) => {
//     console.log(data);
//     console.timeEnd();
//   })
//   .catch((err) => {
//     console.log("err", err);
//     console.timeEnd();
//   });

// promise.race
// console.time();
// Promise.race([p1, p2])
//   .then((data) => {
//     console.log(data);
//     console.timeEnd();
//   })
//   .catch((err) => {
//     console.log("err", err);
//     console.timeEnd();
//   });

// async await

// function p1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("p1 promise");
//       // reject("p1 promise error");
//     }, 2000);
//   });
// }

// function p2() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("p2 promise");
//       // reject("p2 promise error");
//       // console.log("p2 completed");
//     }, 3000);
//   });
// }

// async function runPromise() {
//   console.time();
//   const p1Data = await p1();
//   console.log(p1Data);
//   const p2Data = await p2();
//   console.log(p2Data);
//   console.timeEnd();
// }

// runPromise();

// ----------------
// CALLBACK METHODS
// ----------------

// filter -> used to filter the data based on condition (return boolean value)
// let nums = [1, 2, 3, 4, 5];
// // nums > 2
// let filteredNums = nums.filter(function (num) {
//   return num > 2;
// });

// console.log(filteredNums);

// map -> used to do some operation on all the data
// let nums = [1, 2, 3, 4, 5];
// let sqNums = nums.map(function (num) {
//   return num * num;
// });
// let sqNums = nums.map((num) => num * num);

// console.log(sqNums);

// // some -> condition
// let nums = [1, 2, 3, 4, 5];
// let result = nums.some(function (num) {
//   return num > 20;
// });
// console.log(result);

// // every -> condition
// let nums = [1, 2, 3, 4, 5];
// let result = nums.every(function (num) {
//   return num > 2;
// });
// console.log(result);

// // foreach -> will not return any data
// let nums = [1, 2, 3, 4, 5];
// let sqNums = nums.forEach(function (num) {
//   //   console.log(num);
//   return num * num;
// });
// console.log(sqNums);

// filter in retails
let clothes = [
  {
    name: "western",
    price: 100,
  },
  {
    name: "Indian",
    price: 400,
  },
  {
    name: "US",
    price: 10,
  },
  {
    name: "Australia",
    price: 300,
  },
  {
    name: "Russian",
    price: 340,
  },
];

// let filteredClothes = clothes.filter(function (cloth) {
//   return cloth.name === "Indian";
// });

// let filteredClothes = clothes
//   .filter(function (cloth) {
//     return cloth.price > 300;
//   })
//   .filter(function (cloth) {
//     return cloth.name === "Indian";
//   });
// console.log(filteredClothes);

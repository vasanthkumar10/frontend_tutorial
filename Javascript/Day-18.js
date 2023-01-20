// closures -> function binds with lexical(parent) env forms closure

// function parentFn() {
//   let age = 10;
//   let num = 15;
//   console.log("parent fn", age);
//   return function childFn() {
//     console.log("child fn", age, num);
//   };
// }

// let child = parentFn();
// child();

// function parentFn() {
//   let count = 1;
//   return function child() {
//     if (count % 3 === 0) console.log("logging");
//     count += 1;
//   };
// }

// let child = parentFn();
// child();
// child();
// child();
// child();
// child();
// child();

// function getCredentials() {
//   let userName = "vasanth";
//   let password = 1234;
//   return function () {
//     let credentials = { userName, password };
//     return credentials;
//   };
// }

// let credentials = getCredentials();
// let data = credentials();
// console.log(data);

// rest vs spread operator
// spread
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1, 10, 20, 30, ...arr2];
// console.log(newArr);

// rest - rest of the parameter
// function add(a, ...nums) {
//   console.log(a, nums);
// }

// function add(...nums) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }
//   return total;
// }

// console.log(add(5, 10, 15));
// console.log(add(5, 10));
// console.log(add(5));
// console.log(add());

// array destructuring
// let [x, y, z, ...nums] = [1, 2, 3, 4, 5, 6];
// console.log(x, y, z, nums);

// object destructuring
// let { name, age, ...params } = {
//   name: "rajni",
//   place: "chennai",
//   age: 72,
// };

// // console.log(personData["name"], personData["age"]);
// console.log(name, age, params);

// IIFE - Immediately Invoked function expression

// let message = (function (message) {
//   //   console.log(message);
//   return message;
// })("hi bro");

// // display("hi bro");
// console.log(message);
// console.log(message);

// this
// arrow
// call apply bind
// class
// inheritance
// object
// prototypes
// polyfill
// searching algorithm
// sort algorithms

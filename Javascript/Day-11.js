// remove char from string
// let name = "Vasanth";
// let index = 2;
// output -> Vaanth
// index = 10 -> Vasanth

// find the frequency of chars
// vasanth -> v - 1, a - 2, s - 1, n - 1, t - 1, h - 1

// functions type

// function declaration
// function logger() {
//   console.log("logging");
// }

// function expression -> anonymous fn
// let logger = function () {
//   console.log("logging");
// };

// logger();

// FIRST CLASS CITIZEN
// We can pass function itself as a parameter
// We can return function from a function

// function add(num1, num2) {
//   return num1 + num2;
// }

// function sub(num1, num2) {
//   return num1 - num2;
// }

// console.log(add(5, 10));
// console.log(sub(5, 10));

// operation -> callback fn
// callback fns are executed by higher order fn (HOF) -> doOperation
// function doOperation(num1, num2, operation) {
//   return operation(num1, num2);
// }

// console.log(doOperation(10, 5, add));
// console.log(doOperation(10, 5, sub));

// ---------
// HOISTING
// ---------

// function declarations are hoisted
// function expresstion are not hoisted

// logger();

// function logger() {
//   console.log("logging");
// }

// loggerExpression();

// const loggerExpression = function () {
//   console.log("logging");
// };

// Javascript cycle -> 1. Memory creation Phase 2. code execution phase
// Execution context

// let num = 10;
// console.log(num);

// var log = function () {
//   console.log("logging");
// };

// Whenever a function gets called -> a new execution context is created

// function outer() {
//   console.log("outer");
//   let num = 5;
//   function inner() {
//     let innerNum = 10;
//     console.log("inner", num);
//     console.log("inner num", innerNum);
//   }
//   inner();
// }

// outer();

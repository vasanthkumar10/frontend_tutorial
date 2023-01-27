/* eslint-disable no-extend-native */
// polyfills

// map
// let nums = [1, 2, 3, 4, 5];
// let sqNums = nums.map((num, index, arr) => {
//   console.log(num, index, arr);
//   return num ** 2;
// });
// console.log(sqNums);

// Map polyfill
// Array.prototype.myMap = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callback(this[i], i, this));
//   }
//   return newArr;
// };

// let nums = [1, 2, 3, 4, 5];
// let sqNums = nums.myMap((num, index, arr) => {
//   console.log(num, index, arr);
//   return num ** 2;
// });
// console.log(sqNums);

// filter

// let nums = [1, 2, 3, 4, 5];
// let filteredNums = nums.filter((num, index, arr) => {
//   console.log(num, index, arr);
//   return num > 2;
// });
// console.log(filteredNums);

// filter polyfill
// Array.prototype.myFilter = function (callback, key = true) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (key === true) {
//       if (callback(this[i], i, this)) {
//         newArr.push(this[i]);
//       }
//     } else {
//       if (!callback(this[i], i, this)) {
//         newArr.push(this[i]);
//       }
//     }
//   }
//   return newArr;
// };

// let nums = [1, 2, 3, 4, 5];
// let filteredNums = nums.myFilter((num, index, arr) => {
//   //   console.log(num, index, arr);
//   return num > 2;
// });
// console.log(filteredNums);

// reduce
// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((acc, current, index, arr) => {
//   console.log(acc, current, index, arr);
//   return acc + current;
// }, 10);

// console.log(sum);

// reduce polyfill
// let nums = [1, 2, 3, 4, 5];
// Array.prototype.myReduce = function (callback, initialValue) {
//   //   console.log(this);
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     if (accumulator !== undefined) {
//       accumulator = callback(accumulator, this[i], i, this);
//     } else {
//       accumulator = this[i];
//     }
//   }

//   return accumulator;
// };

// let sum = nums.myReduce((acc, curr, index, arr) => {
//   console.log(acc, curr, index, arr);
//   return acc + curr;
// });
// console.log(sum);

// some
let nums = [1, 2, 3, 4, 5];
// let result = nums.some((num) => num > 2);
// let result = nums.every((num) => num > 2);
// console.log(result);

// Array.prototype.mySome = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) return true;
//   }
//   return false;
// };

// let result = nums.mySome((num) => num > 20);
// console.log(result);

// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i])) return false;
//   }
//   return true;
// };

// let result = nums.myEvery((num) => num > 0);
// console.log(result);

// callback methods continuation

// find -> will return first occurance of the satisfied condition
// let nums = [1, 2, 3, 4, 5];
// let result = nums.find(function (num) {
//   return num > 2;
// });
// console.log(result);

// reduce -> (fn(acc, current), initial value)
// let nums = [1, 2, 3, 4, 5];
// let total = nums.reduce(function (accumulator, current) {
//   console.log(`acc - ${accumulator}, current - ${current}`);
//   return accumulator + current;
// }, 10);
// console.log(total);

// flat(depth) -> very important qn
// let nums = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]], [11, 12, [13, 14, [15, 16]]]];
// [1, 2, 3, 4, 5, 6]
// console.log(nums.flat());
// console.log(nums.flat(10));

// recursion
// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// recursion -> used to break the components into smaller chunks
// it can be memoized
// function factorial(num) {
//   if (num === 0) return 1;
//   return num * factorial(num - 1);
// }

// console.time();
// console.log(factorial(10000));
// console.timeEnd();
// console.log(factorial(10));

// num = 5;
// *****
// *****
// *****
// *****
// *****

// *
// **
// ***
// ****
// *****

//     *
//    **
//   ***
//  ****
// *****

// custom methods - polyfill
let nums = [1, 2, 3, 4, 5, 6];
// let sqNums = nums.map(function (num) {
//   return num * num;
// });

// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i]);
    newArr.push(result);
  }

  return newArr;
};

let sqNums = nums.myMap(function (num) {
  return num * num;
});

console.log(sqNums);

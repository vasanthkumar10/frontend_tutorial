// loops
// while
// for loop
// for of loop
// for in loop

// while loop(condition based)
// let num = 10;
// while (num > 0) {
//   console.log(num);
//   num -= 1;
// }

// // for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for(definition, condition, increment/decrement)
// for (let i = 1, j = 2; i <= 10 && j <= 10; i++, j = j + 2) {
//   console.log(i, j);
// }

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let num = 10;
// while (num > 5) {
//   console.log(num, num--);
//   console.log("finally", num);
// }

// decrement and increment
// pre and post
// let num = 10;
// post increment and decrement
// console.log(num, num++, num);
// console.log(num, num--, num);
// pre increment and decrement
// console.log(num, ++num);
// console.log(num, --num);

// let num = 10;
// console.log(num++ + ++num); // 10 + 12
// console.log(num++ - ++num + num++ + ++num); // 10 - 12 + 13 + 14 = 25
// console.log(num++ - num-- + --num - ++num + --num + num-- - ++num);
// 10 - 11 + 10 - 11 + 10 + 10 - 11 =
// 10 - 11 + 9 - 10 + 9 + 9 - 9 =

// break and continue -> not recommended
// for (let i = 1; i < 3; i++) {
//   for (let j = 1; j < 3; j++) {
//     console.log("value of i", i);
//     if (i === 1) break;
//     console.log(i, j);
//   }
// }

// continue
// for (let i = 0; i < 5; i++) {
//   console.log(`printing ${i}`);
//   if (i === 3) continue;
//   console.log(i);
// }

// let i = 1;
// for (; i < 10; ) {
//   console.log("logging");
//   i += 1;
// }

// let i = 1;
// for (; i < 10; );
// {
//   console.log("logging");
//   i += 1;
// }

// terminal

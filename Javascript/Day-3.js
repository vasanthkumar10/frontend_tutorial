// logical operators
// && -> logical AND
// || -> logical OR
// ! -> logical NOT

// let age = 21;
// let isVoterIDAvailable = false;
// if (age >= 18) {
//   if (isVoterIDAvailable) {
//     console.log("You are elgible to vote");
//   } else {
//     console.log("Not eligible");
//   }
// } else {
//   console.log("Not eligible");
// }

// if (age >= 18 && isVoterIDAvailable) {
//   // if -> if
//   console.log("You are elgible to vote");
// } else {
//   console.log("Not eligible");
// }

// let isAadharAvailable = true;
// let isVoterIDAvailable = true;
// if (isAadharAvailable || isVoterIDAvailable) {
//   console.log("you can get the passport");
// } else {
//   console.log("not eligible");
// }

// !condition -> !true = false

// find largest of 3 nos
// let n1 = 1000;
// let n2 = 150;
// let n3 = 20;

// if (n1 > n2 && n1 > n3) {
//   console.log("n1 is greater");
// } else if (n2 > n1 && n2 > n3) {
//   console.log("n2 is greater");
// } else {
//   console.log("n3 is greater");
// }

// practice
// if (10) {
//   console.log("vasanth");
// }

// if (-10) {
//   console.log("vasanth");
// }

// if (0) {
//   console.log("vasanth");
// }

// if ("name") {
//   console.log("vasanth");
// }

// if ("") {
//   console.log("vasanth");
// }

// if (undefined) {
//   console.log("vasanth");
// }

// if (null) {
//   console.log("vasanth");
// }

// if (NaN) {
//   console.log("vasanth");
// }

// if ([1, 2, 3]) {
//   console.log("vasanth");
// }

// if ([]) {
//   console.log("vasanth");
// }

// if ({ name: "vasanth" }) {
//   console.log("vasanth");
// }

// if ({}) {
//   console.log("vasanth");
// }

// FALSY VALUES
// 0, false, '', undefined, null, NaN
// to convert falsy values into true -> add ! before that
// Ref datatypes -> fn, array , object are always true even if it is empty

// console.log(1 > 2 > 3); //  false
// console.log(3 > 2 > 1); // false

// console.log(5 + false); // 5 + 0
// console.log(5 + true); // 5 + 1

// console.log(console.log("vasanth"));

// short circuiting
// let age = 20;

// if (age > 18 && console.log("vasanth")) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// if (age > 18 || console.log("vasanth")) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

//
// if (!10 < 5) {
//   console.log("vasanth");
// }

// if (!10 > 5) {
//   console.log("vasanth");
// }

// if (!(10 > -1)) {
//   console.log("vasanth");
// }

// ATM machine
// let pin = 12345;
// let count = 0;
// do {
//   count += 1;
//   console.log("reading the card");
//   console.log("enter the pin number");
//   if (pin === 1234) {
//     console.log("enter amt to withdraw");
//     break;
//   }
//   if (count === 3) {
//     break;
//   }
// } while (pin !== 1234);

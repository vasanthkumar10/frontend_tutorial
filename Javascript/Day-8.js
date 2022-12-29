// is prime or not
// let num = 19; // prime number
// let num = 4; // not a prime number
// function isPrimeOrNot(num) {
//   let isPrime = true;
//   //   to find prime or not
//   let limit = Math.round(Math.sqrt(num / 2)) + 1;
//   for (let i = 2; i < limit; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   //   if (isPrime === true) {
//   //     console.log("prime number");
//   //   } else {
//   //     console.log("Not a prime number");
//   //   }
//   return isPrime;
// }

// // prime numbers
// let num = 200000; // 2, 3, 5, 7, 11, 13, 17, 19
// console.time();
// // to traverse upto num
// for (let i = 2; i < num; i++) {
//   if (isPrimeOrNot(i) === true) {
//     console.log(i);
//   }
// }
// console.timeEnd();

// find sum of digits
// let num = 123; // 1 + 2 + 3 = 6
// let num = 123456; // 1 + 2 + 3 + 4 + 5 + 6 = 21
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10;
//   sum += digit;
//   num = Math.floor(num / 10);
// }

// console.log(sum);

// armstrong number

// 153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 --> armstrong number
// 24 -> 2^3 + 4^3 = 8 + 64 = 72 --> not an armstrong number
let num = 24;
let originalNumber = num;
let sum = 0;

while (num > 0) {
  let digit = num % 10;
  sum += digit ** 3;
  num = Math.floor(num / 10);
}
// console.log(sum, num);
if (sum === originalNumber) {
  console.log("Armstrong number");
} else {
  console.log("Not an armstrong number");
}

// fibonacci series --> 1 1 2 3 5 8 ....
// leap year

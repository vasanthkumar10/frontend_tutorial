// find the frequency of chars
// vasanth -> v - 1, a - 2, s - 1, n - 1, t - 1, h - 1

// let string = "aaaaaabbbcc";
// let charMap = {};
// for (let i = 0; i < string.length; i++) {
//   let char = string[i];
//   if (charMap[char]) {
//     charMap[char] = charMap[char] + 1;
//   } else {
//     charMap[char] = 1;
//   }
// }

// console.log(charMap);

// clock methods
// setTimeout(function () {
//   console.log("logging");
// }, 1000);

// setInterval(function () {
//   console.log("logging..");
// }, 1000);

console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(4);
}, 2000);

let i = 0;
console.time();
while (i < 10000000000) {
  i += 1;
}
console.timeEnd();
console.log(3);

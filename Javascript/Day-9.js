// arrays -> [] -> contiguous memory allocation -> mutable
// let nums = [10, 2.0, "vasanth", true, undefined, null];
// arrays are nothing but object with indexed keys
// let nums = {
//   0: 10,
//   1: 2.0,
//   2: "vasanth",
//   3: true,
// };

// nums["name"] = "aarthika";
// console.log(nums); // [ 10, 2, 'vasanth', true, undefined, null, name: 'aarthika' ]

// indexed, search, sort -> pros
// addition, deletion -> cons

// let names = ["virat", "anushka", "sachin", "anjali"];
// console.log(names);
// console.log(names[0], names[1], names[20]);
// console.log(names.length);

// any variable written inside a class -> property
// any function written inside a class -> method
// names[20] = "vasanth";
// console.log(names.length); // 21

// mutable
// names[0] = "vasanth";
// console.log(names);

// loops
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i], i);
// }

// for of loop -> async
// for (let name of names) {
//   console.log(name);
// }

// for in loop -> object traversal
// for (let key in names) {
//   console.log(key, names[key]);
// }

// let obj = {
//   name: "vasanth",
//   place: "chennai",
//   age: 30,
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// let names = ["virat", "anushka", "sachin", "anjali"];
// names.length = 0;
// console.log(names);

// first and last value
// console.log(names[0], names[names.length - 1]);

// let names = ["virat", "anushka", "sachin", "anjali"];
// names["name"] = "vasanth";
// console.log(names);
// normal loop will not include vasanth
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// // for of will not include vasanth
// for (let name of names) {
//   console.log(name);
// }

// // for in will include vasanth
// for (let key in names) {
//   console.log(key, names[key]);
// }

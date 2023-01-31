// searching algorithms
// -> linear -> O(n)
// -> binary -> O(log n) -> sorted

// Linear search
// let nums = [12, 5, 10, 99, 84, 77, 32];
// let target = 77;

// let isFound = false;
// let pos = -1;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === target) {
//     isFound = true;
//     pos = i;
//     break;
//   }
// }

// if (isFound) console.log(`the target ${target} is found at position ${pos}`);
// else console.log(`The target number is not found in the array`);

// part 2
// const users = [];
// for (let i = 1; i <= 200; i++) {
//   users.push({
//     id: i,
//     name: `User - ${i}`,
//     age: Math.ceil(Math.random() * 100),
//   });
// }

// let search = 76;
// let filteredUsers = [];
// for (let user of users) {
//   if (user["age"] === search) {
//     filteredUsers.push(user);
//   }
// }
// console.log(filteredUsers);

// const filteredUsers = users.filter((user) => user["age"] === search);
// console.log(filteredUsers);

// part 3
// const users = [];
// for (let i = 1; i <= 200; i++) {
//   users.push({
//     id: i,
//     name: Math.random().toString(20).substring(7),
//     age: Math.ceil(Math.random() * 100),
//   });
// }
// let search = "FH";

// const filteredUsers = users.filter((user) =>
//   user["name"].toLowerCase().includes(search.toLowerCase())
// );
// console.log(filteredUsers);

// binary search
// let nums = [2, 5, 13, 26, 54, 72, 94, 104];
// let target = 54;

// let start = 0;
// let end = nums.length - 1;
// let foundAt = -1;

// while (start <= end) {
//   let middle = Math.floor((start + end) / 2);
//   console.log(nums[middle]);
//   if (target === nums[middle]) {
//     foundAt = middle;
//     break;
//   } else if (target < nums[middle]) {
//     end = middle - 1;
//   } else {
//     start = middle + 1;
//   }
// }

// console.log(foundAt);

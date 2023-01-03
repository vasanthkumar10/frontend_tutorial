// Array methods

// add
// let players = ["sachin", "dhoni", "virat"];
// players.push("rohit"); // modifies the original array and adds at the end
// players.push("raina", "yuvraj");
// console.log(players.push("raina", "yuvraj"), players);
// push returns length of modified array

// let players = ["sachin", "dhoni", "virat"];
// // unshift -> add at the front
// players.unshift("rohit");
// players.unshift("rohit", "dhawan");
// console.log(players.unshift("rohit", "dhawan"));

// let players = ["sachin", "dhoni", "virat"];
// let removedPlayer = players.pop(); // removes at the end
// let removedPlayer = players.shift(); // removes at the beginning
// console.log(players, removedPlayer);

// concat
// let playersA = ["sachin", "dhoni", "virat"];
// let playersB = ["pant", "rahul", "samson"];
// let team = playersA.concat(playersB);
// console.log(team, playersA, playersB);

// fill
// let players = ["sachin", "dhoni", "virat"];
// console.log(players.fill("vasanth", 1), players);

// includes
// let players = ["sachin", "dhoni", "virat", "rohit", "yuvraj"];
// console.log(players.includes("sachin"));
// console.log(players.includes("sachin", 2)); // second param -> starting position

// indexOf
// let players = ["sachin", "dhoni", "virat", "rohit", "yuvraj"];
// console.log(players.indexOf("dhoni"));
// console.log(players.indexOf("dhoni", 2)); // if not present -> -1

// join -> arr to str
// let players = ["sachin", "dhoni", "virat", "rohit", "yuvraj"];
// console.log(players.join("-----"));
// console.log(players.join(" "));
// console.log(players.join(""));

// last index of
// let players = ["sachin", "dhoni", "virat", "rohit", "yuvraj", "dhoni"];
// console.log(players.lastIndexOf("dhoni"));

// reverse
// let players = ["sachin", "dhoni", "virat", "rohit", "yuvraj", "dhoni"];
// console.log(players.reverse());

// custom reverse
// let players = ["sachin", "dhoni", "virat", "rohit", "yuvraj", "dhoni"];
// let length = players.length - 1;
// let reversedArray = [];
// for (let i = length; i >= 0; i--) {
//   reversedArray.push(players[i]);
// }
// for (let i = 0; i <= length; i++) {
//   let removedPlayer = players.pop();
//   reversedArray.push(removedPlayer);
// }
// console.log(reversedArray);
// console.log(players);

// sort
// let players = ["sachin", "dhoni", "virat", "rohit", "yuvraj", "ashwin"];
// players.sort();
// console.log(players);

// let nums = [2, 4, 13, 21, 9, 1003, 124, 167];
// // nums.sort((a, b) => a - b);
// nums.sort(function (a, b) {
//   // a - b // ascending order
//   // b - a // descending order
//   return b - a;
// });
// console.log(nums);

// slice -> returns new array
// let nums = [1, 2, 3, 4, 5];
// console.log(nums.slice(1));
// console.log(nums.slice(1, 3), nums);
// console.log(nums.slice(-1));
// console.log(nums.slice(-3, -1));
// console.log(nums.slice(0, -1));

// splice -> add and delete or both
// let nums = [1, 2, 3, 4, 5];
// // nums.splice(1, 0, 10);
// nums.splice(1, 1);
// console.log(nums);

// function borrowing -> call and apply

// let vasanth = {
//   name: "vasanth",
//   age: 25,
// };

// let aarthika = {
//   name: "aarthika",
//   age: 10,
// };

// let getData = function (place, citizen) {
//   console.log(
//     `Hi my name is ${this.name} and my age is ${this.age}. I'm from ${place} and I'm ${citizen}`
//   );
// };

// call
// getData.call(vasanth, "Avadi", "Indian");
// getData.call(aarthika, "Ponmar", "American");

// apply -> args should be array
// getData.apply(vasanth, ["Avadi", "Indian"]);
// getData.apply(aarthika, ["Ponmar", "American"]);

// bind -> will return a fn which can be reused
// const getVasanthData = getData.bind(vasanth, "Avadi", "Indian");
// const getAarthikaData = getData.bind(aarthika, "Ponmar", "American");
// getVasanthData();
// getAarthikaData();

// this -> always represents parent(creator)

// function display() {
//   console.log(this);
// }

// const display = () => {
//   console.log(this);
// };

// display();

// let obj = {
//   name: "vasanth",
//   age: 25,
//   display: function () {
//     // arrow fns will always represent the object which creates this
//     const inner = () => {
//       console.log(this);
//     };
//     inner();
//   },
// };

// obj.display();

// prototypes

// let parent = {
//   name: "vasanth",
//   age: 25,
// };

// let nums = [1, 2, 3];
// console.log(Array.isArray(nums));
// console.log(nums.__proto__.__proto__.__proto__);

// nums.__proto__ = parent;
// console.log(nums.name);
// console.log(nums.indexOf(1)); // error
// console.log(Object.getPrototypeOf(nums));
// console.log(Object.getPrototypeOf(parent));

// Object

// const person = {
//   name: "vasanth",
//   age: 25,
// };

// console.log(Object.hasOwn(person, "place")); // (objm, key)
// Object.freeze(person);
// person["place"] = "chennai";
// person["age"] = 20;
// console.log(person);

// let person = {
//   name: "vasanth",
// };

// let person = {};

// Object.defineProperty(person, "name", {
//   value: "vasanth",
//   writable: true,
// });

// Object.defineProperties(person, {
//   name: {
//     value: "vasanth",
//     writable: true,
//   },
//   place: {
//     value: "Chennai",
//     writable: false,
//   },
// });

// console.log(person.name);
// person["name"] = "aarthika";
// console.log(person.name);

// console.log(person.place);
// person["place"] = "ponmar";
// console.log(person.place);

// // // class
// // class Person {
// //   constructor(name, place) {
// //     this.name = name;
// //     this.place = place;
// //   }

// //   getName() {
// //     return `My name is ${this.name}`;
// //   }

// //   getPlace() {
// //     return `my place is ${this.place}`;
// //   }
// // }

// // const vasanth = new Person("vasanth", "chennai");
// // const aarthika = new Person("Aarthika", "Ponmar");
// // console.log(vasanth, aarthika);

// // shopping cart
// class Product {
//   constructor(name, price = 0, quantity = 1) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   calculateTotalPrice() {
//     this.totalPrice = this.quantity * this.price;
//     return this.totalPrice;
//   }
// }

// // let Iphone14 = new Product("Iphone14", 70000, 3);
// // // console.log(Iphone14.name, Iphone14.price, Iphone14.quantity);
// // // console.log(Iphone14.calculateTotalPrice());
// // Iphone14.isBackcaseAvailable = false;
// // console.log(Iphone14);

// // let pixel = new Product("Pixel 7", 50000, 1, true);
// // pixel.isBackcaseAvailable = true;
// // console.log(pixel);

// // let tomato = new Product("tomato", 20, 1);
// // console.log(tomato);

// class Phone extends Product {
//   constructor(
//     name,
//     price,
//     quantity,
//     isBackcaseAvailable = false,
//     ram = "4gb",
//     rom = "64gb"
//   ) {
//     super(name, price, quantity);
//     this.isBackcaseAvailable = isBackcaseAvailable;
//     this.ram = ram;
//     this.rom = rom;
//   }

//   applyDiscount() {
//     let discount = 0.2;
//     this.price = this.price - this.price * discount;
//   }

//   // method overriding - polymorphism
//   calculateTotalPrice() {
//     this.totalPrice = this.quantity * this.price;
//     return this.totalPrice * 1.18; // GST
//   }
// }

// // let Iphone = new Product("Iphone 14", 70000, 1);
// // console.log(Iphone);
// let Iphone = new Phone("Iphone 14", 70000, 1);
// console.log(Iphone);
// // Iphone.applyDiscount();
// console.log(Iphone.calculateTotalPrice());

// function chaining

// function foo() {
//   console.log("foo");
//   function bar() {
//     console.log("bar");
//     return function () {
//       console.log("third");
//     };
//   }
//   return bar;
// }

// // foo(bar);

// // let barfn = foo(bar);
// // barfn();

// foo()()();

// const { add, sub } = require("arithmetics_vasanth");

// console.log(add(10, 15));
// console.log(sub(10, 15));

// function -> non primitive or referrence data type
// by default all fns return undefined
// function arithmetic(num1, num2) {
//   let sum = num1 + num2;
//   let sub = num1 - num2;
//   return [sum, sub];
// }

// const arithmetic = function (num1, num2) {
//   let sum = num1 + num2;
//   let sub = num1 - num2;
//   return [sum, sub];
// }; // anonymous fn

// // console.log(arithmetic(20, 10));
// console.log(typeof arithmetic);

// functions should always be named as action verbs

// objects
// let phoneName = "Iphone 14";
// let phonePrice = 70000;
// let phoneColor = "Product red";
// let phoneRam = "4gb ram";

// let phoneName1 = 'pixel 7'
// let phonePrice1 = 70000;
// let phoneColor1 = "Product red";
// let phoneRam1 = "4gb ram";

// let Iphone14 = {
//   name: "Iphone 14",
//   price: 70000,
//   color: "product red",
//   ram: "4gb",
//   "back case": false,
// };

// let Pixel = {
//   name: "Pixel 7",
//   price: 60000,
//   color: "red",
//   ram: "8gb",
//   "back case": false,
// };

// console.log(Pixel["name"], Pixel["price"]);
// console.log(Pixel.name, Pixel.price, Pixel["back case"]);

// let Iphone14 = {
//   name: "Iphone 14",
//   price: 70000,
//   color: "product red",
//   ram: "4gb",
//   display: {
//     company: "samsung",
//     camera: "sony",
//   },
//   models: ["basic", "pro", "max pro"],
//   getDiscountedPrice: function (discount) {
//     console.log("discount", discount, this.price, this.name);
//   },
// };
// // console.log(Iphone14["display"]["company"], Iphone14["display"]["camera"]);
// // let models = Iphone14["models"];
// // console.log(Iphone14["models"]);
// Iphone14.getDiscountedPrice(10);

// factory method
// function createMobile(name, price, color, ram) {
//   return { name, price, color, ram };
// }

// let Iphone14 = createMobile("Iphone14", 70000, "red", "4gb");
// let Pixel = createMobile("Pixel", 60000, "white", "6gb");
// console.log(Iphone14, Iphone14["price"]);
// console.log(Pixel);

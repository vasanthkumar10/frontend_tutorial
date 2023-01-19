// factory vs constructor function -> way of creating objects

// const circle1 = {
//   radius: 2,
//   area: function () {
//     console.log("this", this);
//     return 3.14 * this.radius * this.radius;
//   },
// };

// const circle2 = {
//   radius: 4,
//   area: function () {
//     console.log("this", this);
//     return 3.14 * this.radius * this.radius;
//   },
// };

// console.log(circle1.radius);
// console.log(circle1.area());

// // factory method
// function createCircle(radius) {
//   return {
//     // ES6+
//     radius,
//     area: function () {
//       return 3.14 * this.radius * this.radius;
//     },
//   };
// }

// const circle1 = createCircle(2);
// const circle2 = createCircle(3);
// const circle3 = createCircle(4);
// const circle4 = createCircle(5);
// console.log(circle1.radius, circle2.area(), circle3, circle4);

// constructor method
// function Circle(radius) {
//   console.log("Before -----------------", this);
//   this.radius = radius;
//   this.area = function () {
//     return 3.14 * this.radius * this.radius;
//   };
//   console.log("after --------------------");
//   console.log(this);
//   //   return this;
// }

// let circle1 = new Circle(5);
// // let circle2 = new Circle(3);
// console.log(circle1.radius, circle1.area());

// class -> syntactic sugar of constructor function
class Circle {
  constructor(radius) {
    console.log("Before -----------------", this);
    this.radius = radius;
    this.area = function () {
      return 3.14 * this.radius * this.radius;
    };
    console.log("after --------------------");
    console.log(this);
    //   return this;
  }
}

let circle1 = new Circle(5);
// let circle2 = new Circle(3);
console.log(circle1.radius, circle1.area());

// static vs Dynamically typed
// In C,C++, JAVA statically typed
// int num = 5;
// num = 'vasanth'

// dynamically typed
// let age = 10;
// console.log(age);
// age = "aarthika";
// console.log(age);
// age = true;
// console.log(age);
// age = undefined;
// console.log(age);
// age = null;
// console.log(age);

// operators
// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(9 / 5); // -> op will be in decimal
// console.log(9 % 5); // % -> remainder
// console.log(9 ** 5); // ** - exponential

// Assignment Operator -> =
// let num = 15;

// num += 10; // num = num + 10;
// console.log(num);
// num -= 10; // num = num - 10;
// console.log(num);
// num *= 10;
// console.log(num);
// num /= 10;
// console.log(num);
// num %= 10;
// console.log(num);
// num **= 10;
// console.log(num);

// comparison operators -> ==, ===, <, <=, >, >=, !==
// always return boolean
// console.log(10 == 10); // true
// console.log(10 == "10"); // true - not recommended
// console.log(10 === "10"); // false -> === checks values as well as data type
// console.log(10 !== "10"); // false -> === checks values as well as data type

// console.log(10 > 5);
// console.log(10 >= 5);
// console.log(10 < 5);
// console.log(10 <= 5);

// ternary operator -> condtion ? 'true statement' : 'false statement'
// 10 > 5 ? console.log("true") : console.log("false");
// 10 < 5 ? console.log("true") : console.log("false");

// naming conventions
// firstName // camel case -> variables, functions
// FirstName // Pascal case -> Class
// first_name // snake case -> not used
// variables and class -> nouns
// functions -> action verb

// Strings
// let firstName = "Vasanthkumar";
// let lastName = "Vinayagam";
// Vasanthkumar Vinayagam
// console.log(firstName + " " + lastName);

// 'Vasanthkumar' is a good boy

// console.log("'" + firstName + "'" + " is a good boy");

// template literals -> multiple lines and easy concatenation
// console.log(`'${firstName}' is a "good" boy`);
// console.log(`'${firstName}' is a "good"
// boy`);

// weird things
// console.log(5 + 5); // 10
// console.log(5 + "5"); // 55
// console.log(5 + 5 + "5"); // 105
// console.log("5" + 5 + 5); // 55
// console.log("ab" + 5); // ab5

// console.log(10 - 5); // 5
// console.log("10" - 5); // 5
// console.log(10 - "5"); // 5
// console.log("10" - "5"); // 5
// console.log("ab" - "5"); // NaN -> Not a Number
// console.log("ab" - "bc"); // NaN -> Not a Number

// condtional statements
// if, if - else, else if ladder, switch

// let num = "name";
// switch (num) {
//   case 1:
//     console.log("1");
//     break;

//   case 2:
//     console.log("2");
//     break;

//   case 10 > 5:
//     console.log("true");
//     break;

//   case "name":
//     console.log("name");
//     break;

//   default:
//     console.log("default");
// }

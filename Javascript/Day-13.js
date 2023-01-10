// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 0);

// console.log("third");

// setTimeout(() => {
//   console.log("fourth");
// }, 0);

// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 3000);

// function add() {
//   console.log("third");
//   setTimeout(() => {
//     console.log("fourth");
//   }, 3000);
// }

// setTimeout(() => {
//   console.log("fifth");
// }, 1000);

// add();
// console.log("sixth");

// setTimeout(() => {
//   console.log("seventh");
// }, 3000);

// console.log("start");
// console.log(age);

// setTimeout(() => {
//   console.log("123");
//   console.log("second");
// }, 0);

// console.log("first");

// var age = 30;

// setTimeout(() => {
//   console.log("third");
// }, 2000);

// var check = function () {
//   setTimeout(() => {
//     console.log("checking");
//   }, 0);
// };

// check();
// console.log("end");

// ------------------
// CALLBACKS
// ------------------
// single threaded application
// steps =>
// Enter the hotel
// go to the seat
// order the food
// prepare the food
// serve the food
// eat the food
// pay the bill
// walk away

// function prepareFood() {
//   setTimeout(() => {
//     console.log("preparing the food");
//     console.log("serve the food");
//     eatFood();
//   }, 4000);
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eating the food");
//     console.log("pay the bill and walk away");
//   }, 3000);
// }

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   prepareFood();
// }

// hotel();

// Seperation of concern or loosely coupled
// dependency injection

// function prepareFood(callback) {
//   setTimeout(() => {
//     console.log("preparing the food");
//     console.log("serve the food");
//     callback();
//   }, 4000);
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eating the food");
//     console.log("pay the bill and walk away");
//   }, 3000);
// }

// function rejectFood() {
//   console.log("reject the food");
// }

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   //   prepareFood(eatFood);
//   prepareFood(rejectFood);
// }

// hotel();

// SECOND EXAMPLE
// function getUser(id) {
//   console.log(`reading the db and getting the user details of user id - ${id}`);
//   setTimeout(() => {
//     let userName = "vasanth";
//     console.log("username", userName);
//     getRepositories(userName);
//     // return userName;
//   }, 1000);
// }

// function getRepositories(userName) {
//   console.log(`reading the db and getting the repos of ${userName}`);
//   setTimeout(() => {
//     let repos = ["calculator", "portfolio"];
//     console.log("repos", repos);
//     getCommits(repos[0]);
//     // return repos;
//   }, 2000);
// }

// function getCommits(repo) {
//   console.log(`reading the db and getting the commits of the repo ${repo}`);
//   setTimeout(() => {
//     let commits = ["Initial commit", "first commit"];
//     // return commits;
//     console.log("commits", commits);
//   }, 2000);
// }

// // let userName = getUser(10);
// // console.log("username", userName);
// // let repos = getRepositories(userName);
// // console.log("repos", repos);
// // let commits = getCommits(repos[0]);
// // console.log(commits);

// getUser(10);

function getUser(id, callback) {
  console.log(`reading the db and getting the user details of user id - ${id}`);
  setTimeout(() => {
    let userName = "vasanth";
    callback(userName);
    // return userName;
  }, 1000);
}

function getRepositories(userName, callback) {
  console.log(`reading the db and getting the repos of ${userName}`);
  setTimeout(() => {
    let repos = ["calculator", "portfolio"];
    callback(repos[0]);
    // return repos;
  }, 2000);
}

function getCommits(repo) {
  console.log(`reading the db and getting the commits of the repo ${repo}`);
  setTimeout(() => {
    let commits = ["Initial commit", "first commit"];
    // return commits;
    console.log("commits", commits);
  }, 2000);
}

// CALLBACK HELL

getUser(10, function (userName) {
  console.log("username", userName);
  getRepositories(userName, function (repo) {
    console.log("repo", repo);
    getCommits(repo);
  });
});

// PROMISE

// function getUser(id, repoCallback) {
//   console.log(`reading the db and getting the user details of user id - ${id}`);
//   setTimeout(() => {
//     let userName = "vasanth";
//     repoCallback(userName);
//   }, 1000);
// }

// function getGitHubRepositories(userName, commitCallback) {
//   console.log(`reading the db and getting the github repos of ${userName}`);
//   setTimeout(() => {
//     let repos = ["calculator", "portfolio"];
//     commitCallback(repos[0]);
//   }, 2000);
// }

// function getGitLabRepositories(userName, commitCallback) {
//   console.log(`reading the db and getting the gitlab repos of ${userName}`);
//   setTimeout(() => {
//     let repos = ["calculator", "portfolio"];
//     commitCallback(repos[0]);
//   }, 2000);
// }

// function getCommits(repo, editorCallback) {
//   console.log(`reading the db and getting the commits of the repo ${repo}`);
//   setTimeout(() => {
//     let commits = ["Initial commit", "first commit"];
//     // return commits;
//     // console.log("commits", commits);
//     editorCallback(commits[0]);
//   }, 2000);
// }

// function openVSCode(commit) {
//   console.log(`Opening VS code for the commit ${commit}`);
// }

// function openATOMCode(commit) {
//   console.log(`Opening Atom editor for the commit ${commit}`);
// }

// CALLBACK HELL

// console.time();
// getUser(10, function (userName) {
//   getGitHubRepositories(userName, function (repo) {
//     getCommits(repo, function (commit) {
//       openVSCode(commit);
//     });
//   });
// });

// getUser(20, function (userName) {
//   getGitLabRepositories(userName, function (repo) {
//     getCommits(repo, function (commit) {
//       openVSCode(commit);
//     });
//   });
// });

// getUser(30, function (userName) {
//   getGitLabRepositories(userName, function (repo) {
//     getCommits(repo, function (commit) {
//       openATOMCode(commit);
//       console.timeEnd();
//     });
//   });
// });

// ----------------------------------------
// PROMISES --> pending, fulfilled, failed
// ----------------------------------------

// const p = new Promise(function (resolve, reject) {
//   console.log("promise running");
//   setTimeout(() => {
//     resolve("success");
//     reject("error occured");
//   }, 2000);
// });

// p.then(function (data) {
//   console.log("then", data);
// })
//   .catch(function (err) {
//     console.log("catch", err);
//   })
//   .finally(function () {
//     console.log("connection closed");
//   });

// Github work using promises
function getUser(id) {
  return new Promise(function (resolve, reject) {
    console.log(
      `reading the db and getting the user details of user id - ${id}`
    );
    setTimeout(() => {
      let userName = "vasanth";
      resolve(userName);
    }, 1000);
  });
}

function getRepositories(userName) {
  return new Promise(function (resolve, reject) {
    console.log(`reading the db and getting the repos of ${userName}`);
    setTimeout(() => {
      let repos = ["calculator", "portfolio"];
      resolve(repos);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise(function (resolve, reject) {
    console.log(`reading the db and getting the commits of the repo ${repo}`);
    setTimeout(() => {
      let commits = ["Initial commit", "first commit"];
      //   resolve(commits);
      reject("error occured in commits");
    }, 2000);
  });
}

// getUser(10)
//   .then(function (userName) {
//     getRepositories(userName)
//       .then(function (repos) {
//         getCommits(repos[0])
//           .then(function (commits) {
//             console.log("commits", commits);
//           })
//           .catch(function (err) {
//             console.log("err", err);
//           });
//       })
//       .catch(function (err) {
//         console.log("err", err);
//       });
//   })
//   .catch(function (err) {
//     console.log("err", err);
//   });

// getUser(10)
//   .then(function (userName) {
//     return getRepositories(userName);
//   })
//   .then(function (repos) {
//     return getCommits(repos[0]);
//   })
//   .then(function (commits) {
//     console.log("commits", commits);
//   })
//   .catch(function (err, cntrl) {
//     console.log("err", err, cntrl);
//   });

// function display(commits) {
//   console.log("commits", commits);
// }

// // ASYNC AWAIT
// async function login() {
//   try {
//     let userName = await getUser(10);
//     let repos = await getRepositories(userName);
//     let commits = await getCommits(repos[0]);
//     display(commits);
//   } catch (err) {
//     console.log("error -> ", err);
//   }
// }

// login();

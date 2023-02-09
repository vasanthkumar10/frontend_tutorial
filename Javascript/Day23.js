// DOM -> Document Object Model
// Local storage -> permanant memory space (5mb)
// Session storage -> tab based

function displayName() {
  let name = localStorage.getItem("name");
  if (name) {
    console.log("from local storage", name);
  } else {
    setTimeout(() => {
      console.log("From API", "vasanth");
      localStorage.setItem("name", "vasanth");
    }, 2000);
  }

  /**
   * SESSION
   */
  name = sessionStorage.getItem("name");
  if (name) {
    console.log("from session storage", name);
  } else {
    setTimeout(() => {
      console.log("From API", "vasanth");
      sessionStorage.setItem("name", "vasanth");
    }, 2000);
  }
}

displayName();

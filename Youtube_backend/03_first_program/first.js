// Window is not work in outside of browser because it is a browser-specific object.
// In Node.js, you can use the global object instead.
// console.log(window);
// console.log(global);

// global.setTimeout(() => {
//   console.log("This will run after 1 second");
// }, 1000);

// globalThis is a standard built-in object that provides a way to access the global object in a consistent manner across different environments.
console.log(globalThis);
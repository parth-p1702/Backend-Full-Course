// This problem based on real-world
// Find solution using EventEmitter

// create EventEmitter
const EventEmitter = require("events");
// crete an instance of class
const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-updated": 0,
  "user-logout": 0,
};
emitter.on("user-login", (name) => {
  eventCounts["user-login"]++;
  console.log(`Hello, ${name} You are Login`);
});
emitter.on("user-purchase", (name, item) => {
  eventCounts["user-purchase"]++;
  console.log(`Hello, ${name}, Your item${item}`);
});
emitter.on("profile-updated", (name, field) => {
  eventCounts["profile-updated"]++;
  console.log(`Hello, ${name} You updated your ${field}`);
});
emitter.on("user-logout", (name) => {
  eventCounts["user-logout"]++;
  console.log(`Hello, ${name} You are LogOut`);
});
emitter.on("summary", () => {
  console.log(eventCounts);
});

emitter.emit("user-login", "parth");
emitter.emit("user-purchase", "parth", "Laptop");
emitter.emit("profile-updated", "parth", "email");
emitter.emit("user-logout", "parth");

emitter.emit("summary");

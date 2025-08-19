// Import EventEmitter class
const EventEmitter = require("events")

// Create an instance of EventEmitter
const emitter = new EventEmitter()

// 1.Define an event listener(addListener)
// emitter.on("greet",()=>{
//     console.log("Hello World!");
    
// })

// // 2.Trigger(emit) the "greet" event
// emitter.emit("greet")


// Below Example with arguments
// emitter.on("greet",(username)=>{
//     console.log(`Hello ${username}!`);
// })
// emitter.emit("greet","Parth")


// Or THis is best way 
emitter.on("greet",(arg)=>{
    console.log(`Hello ${arg.name}, your profession is ${arg.prof}`);
})
emitter.emit("greet",{name:"Parth",prof:"Full Stack Developer"})

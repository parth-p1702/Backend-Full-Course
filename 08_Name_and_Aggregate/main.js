// Named & Aggreagte :-

// Use this two mothod:- 
// 1.assign everthing at once with module.exports={...}
// 2.Assign properties individually with module.exports.property


const { add,multi } = require("./logic")

console.log(add(5,15));
console.log(multi(5,5));


// Fundamentals of JavaScript:-

// Arrays and their methods:-
// 1.ForEach is multiply with each element but it's not returning a new array.
// var arr = [1, 2, 3, 4, 5];
// arr.forEach(function(val){
//     console.log(val*3);
    
// })

// 2.map() method works same like forEach but it's returning a new array.
// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.map(function(val){
//     return val*3;
// })
// console.log(newArr);

// 3.Filter():- filter is used to create a new array with all elements that pass the test implemented by the provided function.
// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.filter(function(val){
//     return val > 2;
// })
// console.log(newArr);

// 4.find() :- is used to find the first element in the array that satisfies the provided testing function.
// var arr = [1, 2, 3, 4, 5];
// var found = arr.find(function(val){
//     return val > 2;
// })
// console.log(found);

// 5.indexOf() :- is used to find the index of the first occurrence of a specified value in an array.
var arr = [1, 2, 3, 4, 5];
var index = arr.indexOf(3);
console.log(index);
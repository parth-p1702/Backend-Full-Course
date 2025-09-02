//  Object :-  Objects are variables too. But objects can contain many values. 
//  In JavaScript, an object is a standalone entity, with properties and type.
//  It's similar to real-life objects, like a car, which has properties (color, brand, model) and behaviors (drive, stop, honk).

//  Creating an object
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("Car started");
    }
};

//  Accessing object properties
console.log(car.brand);  // Output: Toyota
console.log(car["model"]);  // Output: Camry

//  Calling object methods
car.start();  // Output: Car started

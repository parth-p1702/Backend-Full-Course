// project 1:- In this project we are created a simple todo using node.js 

// Import readline module (used for taking input from user in terminal)
import readline from "readline";

// Create an interface to read input and show output
const rl = readline.createInterface({
  input: process.stdin,   // take input from keyboard
  output: process.stdout, // show output in terminal
});

// Empty array to store tasks
const todos = [];

// Function to show menu options
const showMenu = () => {
  console.log("\n1: Add a Task");   // Option 1 → Add new task
  console.log("2: View Tasks");     // Option 2 → Show all tasks
  console.log("3: Exit");           // Option 3 → Close program

  // Ask user to choose option
  rl.question("Choose an option: ", handleInput);
};

// Function to handle what user typed
const handleInput = (option) => {
  // If user chooses option 1 → Add a task
  if (option === "1") {
    rl.question("Enter the task: ", (task) => {
      todos.push(task); // Add task to the array
      console.log("Task Added:", task);
      showMenu(); // Show menu again
    });
  }

  // If user chooses option 2 → View tasks
  else if (option === "2") {
    console.log("\nList of Tasks:");
    // Loop through all tasks and print them
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`); // Numbering starts from 1
    });
    showMenu(); // Show menu again
  }

  // If user chooses option 3 → Exit program
  else if (option === "3") {
    console.log("Good Bye 👋");
    rl.close(); // Close the readline interface (stop program)
  }

  // If user types anything else → Invalid option
  else {
    console.log("Invalid Option! Please choose 1, 2, or 3.");
    showMenu(); // Show menu again
  }
};

// Start the program by showing menu first
showMenu();

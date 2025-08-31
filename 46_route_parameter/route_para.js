// Import the Express framework (ES Module import syntax)
import express from "express";

// Create an Express application instance
const app = express();

// Define a GET route with a route parameter ":id"
// Example: Visiting http://localhost:3000/users/10
// will make req.params.id = "10"
app.get("/users/:id", (req, res) => {
  // Extract the 'id' value from the route parameters
  const userId = req.params.id;

  // Send an HTML response showing the User ID
  res.send(`<h1>User ID: ${userId}</h1>`);
});

// With multiple route parameters
app.get("/users/:id/article/:slug", (req, res) => {
  const userId = req.params.id;
  const slugId = req.params.slug.replace(/-/g," ");
  res.send(`<h1>User ID: ${userId} by ${slugId}</h1>`);
});

// Start the server and listen on port 3000
// This will log a message when the server is ready
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

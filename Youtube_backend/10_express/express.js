// we use express instead of http module because:-
// 1.less code:- Express provides a more concise and readable syntax for handling requests and responses.
// 2.Middleware:- Express has a powerful middleware system that allows us to easily add functionality to our applications.
// 3.Built in routing:- Express has a built in routing system that makes it easy to define and manage routes.
// 4. Performance:- Express is designed to be lightweight and fast, making it a great choice for building high-performance web applications.
// 5.Easy response handling :- res.send() and res.json() methods make it simple to send responses in various formats.

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello form express!</h1>");
});

app.get("/about", (req, res) => {
  res.send(`<h1>Hello form express! About page. your name is <i>${req.query.name}</i> and age is <i>${req.query.age}</i></h1>`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
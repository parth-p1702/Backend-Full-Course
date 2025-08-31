// Query Parameters:-
// are a key-value pairs that appear after the question mark (?) and seperate by (&) in a URL.
// e.g /search?query=express&limit=10
// You can access the query parameters using req.query.query and req.query.limit

import express from "express";

// Create an Express application instance
const app = express();

// app.get("/product", (req, res) => {
//     res.send(`<h1>User search product page ${req.query.search}</h1>`)
// })
// Now with multiple query parameters
app.get("/product", (req, res) => {
    const { page, limit, sort } = req.query;
    res.send(`<h1>User search product page ${page} show ${limit} items sorted by ${sort}</h1>`)
})
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


// Now with multiple query parameters
// app.get("/product", (req, res) => {
//     const { page, limit, sort } = req.query;
//     res.send(`<h1>User search product page ${page} show ${limit} items sorted by ${sort}</h1>`)
// })

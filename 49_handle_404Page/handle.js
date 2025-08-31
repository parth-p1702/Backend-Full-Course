// 404 page Handle using express.js
import express from "express";

// Create an Express application instance
const app = express();

app.get("/product", (req, res) => {
    res.send(`<h1>User search product page ${req.query.search}</h1>`)
});

app.use((req, res) => {
    res.status(404).send("<h1>404 - Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});



// ES module in express:-
// in newer versions of Node.js we can used top level await without needing to wrap it in async function.
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
console.log(data);

console.log(import.meta.dirname);
console.log(import.meta.filename);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//  Serve static files (CSS, images, etc.)
app.use(express.static(join(__dirname, "public")));

//  Route for Home Page
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "home.html"));
});

//  Route for About Page
app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "public", "about.html"));
});

app.listen(3000, () => {
  console.log(" Server is running on http://localhost:3000");
});


// Below code is solution for older versions
// import path from "path"
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);
// console.log({ __filename, __dirname })
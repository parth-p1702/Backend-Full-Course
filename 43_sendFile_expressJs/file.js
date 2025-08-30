// import express from "express";
// import { URL } from 'url';
// const app = express();

// const __filename = new URL(import.meta.url);
//   console.log(__filename);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World!</h1>");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// Above code is good to find dirname as well as filename
// now we see how to send files like html,css,js
import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  const homePage = path.join(import.meta.dirname, "public", "first.html");
  res.sendFile(homePage);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

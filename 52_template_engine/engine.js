// EJS template engine in Express.js:
// A template engine enables you to generate HTML dynamically by using templates.
// EJS (Embedded JavaScript) is a popular templating engine for Express.js.
// set the engine using app.set("view engine", "ejs") and specify the template folder with app.set('view engine','ejs')
// and specify the template folder with app.set('views','./views').

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tell Express to use EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("report", { name: "Parth" }); // passing variable to EJS
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


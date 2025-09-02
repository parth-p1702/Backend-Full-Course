import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// __dirname workaround for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Sample data
const students = [
  { name: "Alice", age: 15, grade: "A" },
  { name: "Bob", age: 16, grade: "B+" },
  { name: "Charlie", age: 17, grade: "A-" },
];

// Route
app.get("/", (req, res) => {
  res.render("simple", { students });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

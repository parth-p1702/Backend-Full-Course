import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Serve static files (CSS, images, etc.)
app.use(express.static(join(__dirname, "public")));

// ✅ Route for Home Page
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "home.html"));
});

// ✅ Route for About Page
app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "public", "about.html"));
});

app.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});

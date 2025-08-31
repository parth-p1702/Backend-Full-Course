import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// In-memory URL database
const urlDatabase = {};

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static(join(__dirname, "public"))); // Serve HTML/CSS/JS

// Serve index.html explicitly
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.post("/shorten", (req, res) => {
  const { longUrl, customCode } = req.body;

  if (urlDatabase[customCode]) {
    return res.send(`
      <span style="color:red;">❌ Code Word Already Taken: <b>${customCode}</b></span>
    `);
  }

  urlDatabase[customCode] = longUrl;

  res.send(`
    ✅ Short Link: <a href="/${customCode}" target="_blank">http://localhost:3000/${customCode}</a>
  `);
});

// Redirect short URLs
app.get("/:code", (req, res) => {
  const { code } = req.params;
  const longUrl = urlDatabase[code];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send("<h1>404 - Short URL not found</h1>");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});

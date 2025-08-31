// Form submission in expressJs:-
// you can use the <form> tag with the action attribute to specify the URL to which the form data should be submitted.
// By default, form data is submitted using the GET method. you can handle it with app.get() to access the query parameters.

// Since URLs have a length limit, for larger amounts of data, you should use the POST method for FORM submissions.
// To access data from a POST request, you need to use middleware express.urlencoded() to parse the request body.
// The urlencoded option { extended: true }
// Use req.body in app.post() to access the submitted form data.

import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Serve static files (for HTML, CSS)
app.use(express.static(join(__dirname, "public")));

// Handle form submission (POST request)
app.post("/submit", (req, res) => {
  // Access form data using req.body
  const { name, email } = req.body;

  // Respond with confirmation (can also save to DB here)
  res.send(`
    <h1>Form Submitted</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <a href="/">Go Back</a>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});


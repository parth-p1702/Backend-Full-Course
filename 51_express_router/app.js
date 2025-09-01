// Router in express.js:-
// is a tool to define modular and reusable routes in an application.
// It's created using the `express.Router()` to handle related routes.
// Routes can be defined using methods like `router.get()`, `router.post()`, etc.
// the router is mounted in the main app using `app.use('/basepath', router)`

import express from "express";
import mainRoutes from "./routes/mainRoutes.js";

const app = express();

app.use("/", mainRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

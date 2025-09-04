// ✅ REST API with Express + MongoDB
import express from "express";
import connectMongoDb from "./connection.js";
import logReqRes from "./middlewares/middleware.js";
import useReducer from "./routes/routes.js";

const app = express();
const PORT = 8000;

// ✅ MongoDB Connection
connectMongoDb("mongodb://127.0.0.1:27017/userDB").then(() => {
  console.log("✅ MongoDB connected");
});

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", useReducer);

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

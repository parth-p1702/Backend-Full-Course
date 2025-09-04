import express from "express";
import { handleCreateNewUser, handleDeleteUserById, handleGetAllUsers, handleGetUserById, handleUpdateUserById } from "../controller/controller.js";

const router = express.Router();

// ✅ GET - All users
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

// ✅ GET - Single user by ID
router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


export default router;
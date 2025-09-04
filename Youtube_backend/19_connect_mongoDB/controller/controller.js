// controller/controller.js
import User from "../models/user.js";

// ✅ GET all users
async function handleGetAllUsers(req, res) {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// ✅ GET user by ID
async function handleGetUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ status: "error", message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// ✅ CREATE new user
async function handleCreateNewUser(req, res) {
  const body = req.body;

  // Validate fields (matches Postman names)
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.job_title ||
    !body.gender
  ) {
    return res
      .status(400)
      .json({ status: "error", message: "All fields are required" });
  }

  try {
    const newUser = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      jobTitle: body.job_title,
      gender: body.gender,
    });

    res.status(201).json({ status: "success", id: newUser._id });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// ✅ UPDATE user by ID
async function handleUpdateUserById(req, res) {
  const body = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName: body.first_name,
        lastName: body.last_name,
        jobTitle: body.job_title,
        gender: body.gender,
        email: body.email,
      },
      { new: true } // return updated document
    );

    if (!updatedUser)
      return res.status(404).json({ status: "error", message: "User not found" });

    res.json({ status: "success", user: updatedUser });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

// ✅ DELETE user by ID
async function handleDeleteUserById(req, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ status: "error", message: "User not found" });
    res.json({ status: "success", user: deletedUser });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}

export {
    handleCreateNewUser, handleDeleteUserById, handleGetAllUsers,
    handleGetUserById, handleUpdateUserById
};


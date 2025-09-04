import mongoose from "mongoose";

// ✅ Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true, unique: true },
  jobTitle: { type: String, required: true },
  gender: String
},{timestamps: true});

const User = mongoose.model("user", userSchema);

export default User;
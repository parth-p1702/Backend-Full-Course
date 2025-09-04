import mongoose from "mongoose";

// ✅ MongoDB Connection
async function connectMongoDb(url){
  return mongoose.connect(url)
}

export default connectMongoDb;
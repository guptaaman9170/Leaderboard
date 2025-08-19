import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/leaderboard";
  await mongoose.connect(uri);
  console.log("✅ MongoDB connected");
};

export default connectDB;

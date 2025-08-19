import dotenv from "dotenv";
import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();
await connectDB();

const names = ["Rahul","Kamal","Sanak","Pooja","Aman","Neha","Kiran","Ritu","Ankit","Meera"];

await User.deleteMany({});
await User.insertMany(names.map(name => ({ name })));

console.log("✅ Seeded users");
process.exit(0);

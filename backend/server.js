import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leaderboardRoutes from "./routes/leaderboard.js";

dotenv.config();
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend on http://localhost:${PORT}`));

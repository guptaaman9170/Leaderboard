import express from "express";
import User from "../models/User.js";
import History from "../models/History.js";

const router = express.Router();

/** Create a user */
router.post("/users", async (req, res) => {
  try {
    const user = await User.create({ name: req.body.name });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/** Get leaderboard (ranked desc by points) */
router.get("/leaderboard", async (_req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((u, i) => ({
    _id: u._id,
    name: u.name,
    totalPoints: u.totalPoints,
    rank: i + 1
  }));
  res.json(leaderboard);
});

/** Claim random points (1–10) for a user and write history */
router.post("/claim/:userId", async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.totalPoints += randomPoints;
  await user.save();

  await History.create({ userId, points: randomPoints });

  res.json({ user, randomPoints });
});

/** Fetch claim history for a user */
router.get("/history/:userId", async (req, res) => {
  const history = await History.find({ userId: req.params.userId })
    .sort({ claimedAt: -1 });
  res.json(history);
});

export default router;

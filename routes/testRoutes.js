import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.get("/test", async (req, res) => {
  const users = await User.find();
  console.log("TEST route users:", users);
  res.send(users);
});

export default router;

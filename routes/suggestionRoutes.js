import express from "express";
import Suggestion from "../models/suggestion.js";

const router = express.Router();

// GET all suggestions
router.get("/", async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.status(200).json(suggestions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch suggestions", error: err });
  }
});

// POST a new suggestion
router.post("/", async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const newSuggestion = new Suggestion({ title, subtitle });
    await newSuggestion.save();
    res.status(201).json(newSuggestion);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create suggestion", error: err });
  }
});

export default router;

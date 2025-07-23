import express from "express";
import Recipe from "../models/recipe.js";

const router = express.Router();

// GET all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recipes", error: err });
  }
});

// POST a new recipe
router.post("/", async (req, res) => {
  try {
    const { title, image, cookTime } = req.body;
    const newRecipe = new Recipe({ title, image, cookTime });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ message: "Failed to create recipe", error: err });
  }
});

export default router;

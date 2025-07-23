import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: String,
  image: String,
  cookTime: String,
});

const Recipe = mongoose.model("featured_recipes", recipeSchema);
export default Recipe;

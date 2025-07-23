import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
});

const Suggestion = mongoose.model("quick_suggestions", suggestionSchema);
export default Suggestion;

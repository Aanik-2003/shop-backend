import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import suggestionRoutes from "./routes/suggestionRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// DB Connection
connectDB();

const allowedOrigins = [
  "https://e-commerce-alpha-nine-67.vercel.app/",
  "http://localhost:3000",
];

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use("/api/recipes", recipeRoutes);
app.use("/api/suggestions", suggestionRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

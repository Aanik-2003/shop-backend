import express from "express";
import Product from "../models/addProduct.js"; // Make sure the model file is named correctly

const router = express.Router();

/**
 * POST /api/products
 * Creates a new product
 */
router.post("/", async (req, res) => {
  try {
    const {
      title,
      excerpt,
      description,
      price,
      tags,
      images,
      specifications,
      features,
      author,
      publishDate,
    } = req.body;

    // Basic validation
    if (
      !title ||
      !excerpt ||
      !description ||
      typeof price !== "number" ||
      !author?.name ||
      !publishDate
    ) {
      return res
        .status(400)
        .json({ message: "Missing required product fields." });
    }

    const newProduct = new Product({
      title,
      excerpt,
      description,
      price,
      tags,
      images,
      specifications,
      features,
      author,
      publishDate,
    });

    await newProduct.save();

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Product creation error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/products
 * Fetches all products
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json({ products });
  } catch (error) {
    console.error("Fetch products error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/products/:id
 * Fetches a single product by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ product });
  } catch (error) {
    console.error("Fetch product by ID error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;

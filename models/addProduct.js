import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: true,
      minlength: 50,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    tags: [
      {
        value: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    images: [
      {
        url: {
          type: String,
          required: true,
          trim: true,
        },
        alt: {
          type: String,
          trim: true,
        },
      },
    ],
    specifications: [
      {
        key: {
          type: String,
          required: true,
          trim: true,
        },
        value: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    features: [
      {
        value: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    author: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      avatar: {
        type: String,
        trim: true,
      },
      role: {
        type: String,
        enum: ["Admin", "Editor", "Manager", "Contributor"],
        default: "Admin",
      },
    },
    publishDate: {
      type: String, // or use Date if you'd rather store it as a date object
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite in development (for Next.js hot reload)
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

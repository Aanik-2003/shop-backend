// models/User.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    joinDate: {
      type: String,
      default: () =>
        new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        }),
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite in development (for Next.js hot reload)
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

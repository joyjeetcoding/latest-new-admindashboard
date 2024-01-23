import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    deviceName: String,
    month: String,
    price: Number,
    sales: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Products || mongoose.model("Products", ProductSchema);
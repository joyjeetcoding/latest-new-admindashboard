import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    deviceName: String,
    price: Number,
    dop: Date,
    sales: Number,
    month: String,
  },
  { timestamps: true }
);

export default mongoose.models.Products || mongoose.model("Products", ProductSchema);
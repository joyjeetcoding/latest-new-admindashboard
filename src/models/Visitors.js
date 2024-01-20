import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    location: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Visitors || mongoose.model("Visitors", visitorSchema);
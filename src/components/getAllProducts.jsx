import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";

export const fetchAllProducts = async(q) => {
    // "i" means case insensitve means we can use capital letters as well
    const regex = new RegExp(q, "i");
  
    try {
       connectToDB();
      const users = await Products.find({ deviceName: { $regex: regex } });
      return users;
    } catch (error) {
      console.log("Error", error);
    }
  }
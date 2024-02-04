import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";

export const fetchAllProducts = async() => {
  
    try {
      await connectToDB();
      const users = await Products.find({});
      return users;
    } catch (error) {
      console.log("Error", error);
    }
  }
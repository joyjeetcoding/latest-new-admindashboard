import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";

export const fetchAllProducts = async(query, page) => {

  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;
  
    try {
      await connectToDB();
      const users = await Products.find({deviceName: {$regex: regex}}).limit(ITEM_PER_PAGE).skip((ITEM_PER_PAGE) * (page - 1));
      return users;
    } catch (error) {
      console.log("Error", error);
    }
  }
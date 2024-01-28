import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "../../authconfig";
import { connectToDB } from "@/database/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email });

    if (!user) {
      console.log("Wrong Credentials");
      return null;
    }

    const isPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPassword) {
      console.log("Wrong Password");
      return null;
    }

    return user;
  } catch (error) {
    console.log("Error", error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});

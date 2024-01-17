"use client"
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "@/database/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { compare } from "bcryptjs";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      return NextResponse.json({
        succces: false,
        message: "Wrong Credentials",
      });
    }
    const isCorrectPassword = await compare(
      credentials.password,
      user.password
    );

    if (!isCorrectPassword) {
      return NextResponse.json({
        succces: false,
        message: "Wrong Password",
      });
    }

    return user;
  } catch (error) {
    return NextResponse.json({
      succces: false,
      message: "Failed to Connect to the Database",
    });
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
            return NextResponse.json({
                succces: false,
                message: "Failed to Login",
              });
        }
      },
    }),
  ],
});

// // The name to display on the sign in form (e.g. "Sign in with...")
// name: "Credentials",
// // `credentials` is used to generate a form on the sign in page.
// // You can specify which fields should be submitted, by adding keys to the `credentials` object.
// // e.g. domain, username, password, 2FA token, etc.
// // You can pass any HTML attribute to the <input> tag through the object.
// credentials: {
//   username: { label: "Username", type: "text", placeholder: "jsmith" },
//   password: { label: "Password", type: "password" },
// },

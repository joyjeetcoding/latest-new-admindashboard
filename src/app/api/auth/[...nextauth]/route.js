import { connectToDB } from "@/database/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectToDB();
          const userone = await User.findOne({ email });

          if (!userone) return null;

          const passwordMatch = await bcrypt.compare(
            password,
            userone.password
          );

          if (!passwordMatch) return null;

          return userone;
        } catch (error) {
          console.log("Error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

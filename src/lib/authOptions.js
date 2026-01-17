import { loginUser } from "@/app/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const { email, name, image } = user;
          const userCol = await dbConnect(collections.USERS);
          const isExist = await userCol.findOne({ email });

          if (!isExist) {
            const newUser = {
              name,
              email,
              image,
              provider: "google",
              role: "user",
            };
            const result = await userCol.insertOne(newUser);
            return result.acknowledged;
          }
          return true;
        } catch (error) {
          console.error("Error in google sign in:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user._id; 
        token.role = user.role;
        token.image = user.image;

        if (account?.provider === "google") {
          try {
            const userCol = await dbConnect(collections.USERS);
            const dbUser = await userCol.findOne({ email: user.email });
            if (dbUser) {
              token.id = dbUser._id.toString();
              token.role = dbUser.role;
            }
          } catch (error) {
            console.error("Error fetching google user data:", error);
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.image = token.image;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

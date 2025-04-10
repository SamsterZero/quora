import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: "database",
    },
    callbacks: {
        async signIn({ user, account, profile, }) {
            console.log("👤 User signed in:", user);
            console.log("🔗 Account:", account);
            console.log("📄 Profile:", profile);
            return true;
        },
        async jwt({ token, user }) {
            // Attach user data to token if it's a new sign in
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.email = token.email
            }
            return session;
        }
    },
}
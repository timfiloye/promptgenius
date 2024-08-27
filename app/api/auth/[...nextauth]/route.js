import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { connectToDB } from "@utils/database";


const handler = NextAuth({
    providers: [
        Googleprovider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {

    },
    async signIn({profile}) {
        try {
            await connectToDB();

            //check if a user already exists

            //if not, create a new user

            return true;
        } catch (error) {
            return false;
        }
    }
})


export {handler as GET, handler as POST};
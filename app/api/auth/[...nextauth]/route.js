import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        Googleprovider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {
        const sessionUser = await user.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session
    },
    async signIn({profile}) {
        try {
            await connectToDB();

            //check if a user already exists
            const userExists = await user.findOne({
                email: profile.email
            })
            //if not, create a new user
            if(!userExists) {
                await user.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture,
                })
            }
            return true;
        } catch (error) {
            console.log(error);
            
            return false;
        }
    }
})


export {handler as GET, handler as POST};
import nextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const handler = NextAuth({
    providers: [
        Googleprovider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({session}) {

    },
    async signIn({profile}) {

    }
})


export {handler as GET, handler as POST};
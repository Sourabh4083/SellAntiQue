import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import connectDB from "@/db/connectDb"

const handler =  NextAuth({

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
})

export {handler as GET, handler as POST}
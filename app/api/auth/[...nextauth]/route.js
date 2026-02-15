import { findUserByEmail } from "@/lib/user";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

export const authOptions = {
    pages:{
        signIn:"/login"
    },
    providers: [
      CredentialsProvider({
        async authorize(credentials, req) {
            // unboxing data email password
            const email = credentials.email
            const password = credentials.password
            // cari user berdasarkan email
            const user = await findUserByEmail(email)

            if (!user) return null
            // mengcompare password
            const Validation = await compare(password, user.password)

            if (!Validation) return null
            // return user ke session
            return {
                id: user.id,
                email : user.email,
                name: user.username,
            }

            console.log(credentials)
        }
      })
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id
        }
        return token
      },
      async session({ session, token, user }) {
        session.user.id = token.id
        
        return session
      }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { SignOut } from "@/components/custom-components/signout"



export default async function dashboard () {
    const session = await getServerSession(authOptions)
    console.log(session)
     const user = session?.user
    return (
        <main className="flex flex-col justify-center items-center h-screen w-screen">

                <span>Welcome back! user ke {user.id} bernama {user.name} dengan email {user.email}</span>
                <SignOut></SignOut>
                
        </main>
    )
}
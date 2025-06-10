"use client"
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const router = new useRouter()
    return (
        <nav className='flex justify-between bg-amber-900 p-4 rounded-b-lg sticky top-0 shadow-md'>
            <div className="cursor-pointer text-6xl font-bold " onClick={()=> router.push('/')}>
                Antique 
            </div>
            <button className="cursor-pointer" onClick={() => signIn()}>Sign in</button>
        </nav>
    )
}

export default Navbar

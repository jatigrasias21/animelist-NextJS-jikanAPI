import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActButton = async() =>{
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

    return(
        <div className="flex justify-between gap-4 items-center">
            {
                user ? 
                <Link href="/users/dashboard" className="py-1">Dashboard</Link>
                : null
            }
            <Link href={actionUrl} className="bg-color-dark text-color-accent py-2 px-12 inline-block rounded-xl" >{actionLabel}</Link>
        </div>
    )
}

export default UserActButton
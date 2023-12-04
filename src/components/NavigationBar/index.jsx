import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActButton from "./UserActButton"
import Image from "next/image"

const NavigationBar = () => {
    return(
        <header className="bg-color-accent">
            <div className="flex lg:flex-row flex-col justify-between lg:items-center px-8 py-2 gap-2">
                <Link href={"/"} className="font-extrabold text-2xl">
                <Image 
                    src="/animelist-high-resolution-logo-transparent.png" 
                    width={300}
                    height={100}
                    alt="Picture of the author" />
                </Link>
                <InputSearch className="text-s"/>
                <UserActButton className="font-bold text-xs hover:transition-all"/>
            </div>
        </header>
    )
}

export default NavigationBar
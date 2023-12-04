import Link from "next/link"
import { ArrowSquareRight } from "@phosphor-icons/react/dist/ssr"

const Header = ({title, linkHref, linkTitle}) =>{
    return(
        <div className="flex justify-between items-center px-8 mt-8">
            <h1 className="text-xl font-semibold text-color-primary">{title}</h1>
            {
            linkHref && linkTitle ?
            <Link
            href={linkHref} className="md:text-xl text-md text-color-primary hover:text-color-accent transition-all flex justify-between items-center">{linkTitle}
            <ArrowSquareRight size={32} />
            </Link> : null
            }
      </div>
    )
}

export default Header
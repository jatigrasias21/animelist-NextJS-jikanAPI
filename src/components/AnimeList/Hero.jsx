import Image from "next/image"

const Hero = () =>{
    return(
        <div className="p-8">
            <Image
                src="/hero.png" 
                width={1400}
                height={20}
                alt="Picture of the author"
            />
        </div>
    )
} 

export default Hero
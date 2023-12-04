import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) =>{
    return(
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 p-8 gap-4">
            {api.data?.map((anime,index) => {
                return(
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
                    key={index}
                    >
                        <Image 
                            src={anime.images.webp.image_url} 
                            alt="..." 
                            width={350} 
                            height={350} 
                            className="w-full max-h-60 sm:max-h-80 object-cover rounded-xl"
                        />
                        <h3 className="md:text-l text-s p-4 text-center ">{anime.title}</h3>
                    </Link>
                )
            })}
            
        </div>
            
    )
}

export default AnimeList
"use client"

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) =>{
    const [isOpen, setisOpen] = useState(true)

    const handleVideoPlayer = () =>{
        setisOpen((prevState) => !prevState)
    }

    const option = { 
        width : "500",
        heigth: "100"
    }

    const Player = () =>{
        return(
        <div className="">
            {/** 
            <button 
            onClick={handleVideoPlayer}
            className="text-color-primary float-right bg-color-secondary px-3 mb-1">X</button>          
            */}
            <Youtube videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}/>
        </div>
        )
    }

    const ButtonOpenPlayer = () =>{
        return(
        <button onClick={handleVideoPlayer} className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
            Watch trailer
        </button>
        )
    } 

    return isOpen 
    ? <Player /> : <ButtonOpenPlayer/>
   
}

export default VideoPlayer
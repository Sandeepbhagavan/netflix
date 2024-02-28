import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackGround = ({movieId}) => {
    const trailer=useSelector((store)=>store.movies?.trailerList)
    const dispatch=useDispatch();
    const movieTrailer=async()=>{
        const trailer=await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS)
        const json=await trailer.json()
        //console.log(json)
        
        const videoTrailer=json.results.filter((video)=>video.type==="Trailer")
        const filteredTrailer=videoTrailer.length?videoTrailer[1]:json.results[0]
        //console.log(filteredTrailer)
        dispatch(addTrailerVideo(filteredTrailer))
        
    }
    useEffect(()=>{
        movieTrailer()
    },[])
  return (
    <div>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackGround

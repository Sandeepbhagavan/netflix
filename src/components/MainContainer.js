import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie=movies[0]
    //console.log(mainMovie) 
    const{overview,original_title,id}=mainMovie;
    return (
    <div>
      <VideoTitle overview={overview}title={original_title}/>
      <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainContainer

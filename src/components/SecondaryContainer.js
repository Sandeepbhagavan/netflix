import React from 'react'
import MovieList from './MovieList'
import {useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
        <div className='-mt-40 z-10'>
        <MovieList title={"popular"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"One-time Wtch"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Aventure"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer

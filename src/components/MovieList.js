import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title , movies}) => {
   // console.log(movies)
  return (
    <div className='flex flex-wrap ml-5'>
        <div className='text-3xl text-white'>
            {title}
        </div>
        <div className=' flex overflow-scroll py-20 -my-20'>
{movies && (
  <div className='flex'>
    {movies.map((movie) => (
      <MovieCards key={movie.id} posterpath={movie.poster_path} />
    ))}
  </div>
)}
            
            {/* <div><MovieCards posterpath={movies?.[1].poster_path}/></div>  */}
        </div>
    </div>
  )
}

export default MovieList

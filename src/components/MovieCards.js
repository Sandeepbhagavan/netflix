import React from 'react'

const MovieCards = ({posterpath}) => {
  return (
    <div className='w-40 m-2'>
      <img alt="photo" src={'https://image.tmdb.org/t/p/w500'+posterpath}/>
    </div>
  )
}

export default MovieCards

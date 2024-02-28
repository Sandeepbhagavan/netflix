import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='pt-52 px-20 absolute'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <h1 className='text-lg py-3 w-1/2 text-white'>{overview}</h1>
      <div>
        <button className='bg-white hover:opacity-80 p-2 w-20 m-3 text-black rounded-lg'>Play</button>
        <button className='bg-gray-700 p-2 m-3 w-20 text-white rounded-lg hover:opacity-90'>Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

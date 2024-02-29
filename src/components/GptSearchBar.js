import React from 'react'
import language from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const selector=useSelector(store=>store?.language?.language)
  return (
    <div className='absolute -mt-96'>
      <form className='ml-96 -mt-52 relative text-white' onSubmit={(e)=>e.preventDefault()}>
        <input type='search' placeholder={language?.[selector].placeholder} className='border-black m-20 bg-black mr-0 p-2 rounded-lg w-72 placeholder-white'/>
        <button className='bg-red-600 text-white rounded-lg p-2'>{language?.[selector].search}</button>
        
      </form>
    </div>
  )
}

export default GptSearchBar

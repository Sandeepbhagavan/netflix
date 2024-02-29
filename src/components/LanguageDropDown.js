import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../utils/languageSlice';
import language from '../utils/languageConstants';

const LanguageDropDown = () => {
    const dispatch=useDispatch();
    const changethelanguage=(e)=>{
        console.log(e.target.value)
        dispatch(changeLanguage(e.target.value));
    }
  return (
    <div className='m-1'>
      <select className='p-2 bg-purple-500' onChange={changethelanguage}>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="spanish">Spain</option>
      </select>
    </div>
  )
}

export default LanguageDropDown

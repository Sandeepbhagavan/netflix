import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../utils/firebase';
import { toggleGptSearchView } from '../utils/gptSlice';
import LanguageDropDown from './LanguageDropDown';
const Header = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)
    const signOutButton=()=>{

const auth = getAuth(app);
signOut(auth).then(() => {
    navigate("/")
}).catch((error) => {
  navigate("/error")
});
        
    }
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView())

    }
  return (
    
    <div className='absolute bg-gradient-to-b w-screen bg-transparent z-10 flex justify-between'>
      <img className="w-44 "src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    
    {user && <div className='flex'>
        <LanguageDropDown/>
        <button className='bg-white w-20 h-10 mr-4 rounded-lg'onClick={handleGptSearchClick}>GPT Search</button>
        <button className='text-white p-3 h-10 font-bold bg-red-600' onClick={signOutButton}>Sign Out</button>
    </div>}
    </div>
    
  )
}

export default Header

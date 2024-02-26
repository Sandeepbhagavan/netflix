import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
    const signOutButton=()=>{
        navigate("/")
    }
  return (
    
    <div className='absolute bg-gradient-to-b w-screen from-black z-10 flex justify-between'>
      <img className="w-44 "src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    
    <div className='flex'>
        <button className='text-white p-3 h-10 font-bold bg-red-600' onClick={signOutButton}>Sign Out</button>
    </div>
    </div>
    
  )
}

export default Header

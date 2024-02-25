import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
    const[IsSignInForm,SetIsSignInForm]=useState(true)

    const toggleSignInForm=()=>{
        SetIsSignInForm(!IsSignInForm)
    }
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
      </div>
      <form className='w-3/12 absolute bg-black rounded-lg bg-opacity-70 my-11 py-6 px-6 mx-auto left-0 right-0 text-white'>
        <h1 className='text-3xl font-bold py-4'>{IsSignInForm?"Sign In" : "Sign Up"}</h1>
        {!IsSignInForm&&(<input type='text' placeholder='Name' className='p-2 my-2 w-full bg-gray-700'/>)}
        <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
        <button className='bg-red-700 p-4 my-6 w-full h-12'>submit</button>
        <p className="cursor-pointer"onClick={toggleSignInForm}>{IsSignInForm?"New to NetflixSign up Now":"Enter your Details"}</p>
      </form>
    </div>
  )
}

export default Login
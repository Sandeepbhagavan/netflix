import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
//import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { useDispatch } from 'react-redux';
//import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    //const dispath=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
//     useEffect(()=>{
        

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     dispath(addUser({uid:uid}))
//   } else {
//     dispath(removeUser())
//   }
// });
    // },[])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

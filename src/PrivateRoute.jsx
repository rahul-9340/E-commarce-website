import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebaseConfig'
import { Navigate, Outlet } from 'react-router-dom'
import Loading from './component/Loading'
import Error from './component/Error'
export default function PrivateRoute() {

const[user,loading,error] = useAuthState(auth)

    if(loading){
return (
    <Loading/>
)
    }
    if(error){
   <Error err={error}/>
    }

if(!user){
    return(
     <Navigate to={"/login"}/>
    )
}
else{
    return(
        <Outlet/>
    )
}
}





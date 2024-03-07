import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

export default function Profile() {
  
 const [user,loading,error] = useAuthState(auth)

  return (
     <div>
     profile
     <p>{ user &&  user.email}</p>
    </div>
  )
}



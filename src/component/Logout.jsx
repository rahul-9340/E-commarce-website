import React from 'react'
import { auth } from '../firebaseConfig'
import { signOut } from 'firebase/auth'
export default function Logout() {
 
async function HandleSignOut(){
await signOut(auth)
}

  return (
    <div>
      <button onClick={HandleSignOut} className='logout-btn'>Logout</button>
    </div>
  )
}





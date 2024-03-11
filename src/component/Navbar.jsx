import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { switchClass } from '../Redux/toggleSlice'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Logout from './Logout'
import { auth } from '../firebaseConfig'
import Bar from './Bar'
export default function Navbar() {
const {isactive,theme}= useSelector((state)=>state.toggle)
const dispatch = useDispatch()

const [user,error,loading] = useAuthState(auth)

function toggleClass(){
dispatch(switchClass())
}
useEffect(() => {
  document.body.setAttribute("data-theme",`${theme}`);
},[theme]);

  return (
  <>
 <div className='nav-main'>
<div className='left'>
<Link className='a' to="/">Home</Link>
<Link className='a' to="/about">About</Link>
<Link className='a' to="/cart">Cart</Link>
</div>

<div className='right'>
<div onClick={()=>toggleClass()} className='toggle-div'>
  <div className={`switch-mode ${isactive&&`active-mode`} `}></div>
</div>
<Link className='a' to="/profile">Profile</Link>
{
!user?<Link className='a' to="/login"><button className='login-btn'>Login</button></Link>:
<Logout/>
}
</div>
</div>
<Bar/>
</>
  )
}



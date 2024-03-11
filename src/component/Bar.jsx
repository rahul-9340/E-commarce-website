import React, { useState,useEffect } from 'react'
import {Menu,Crosshair, X} from 'react-feather'
import { auth } from '../firebaseConfig'
import { useSelector } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { switchClass } from '../Redux/toggleSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from './Navbar'
export default function Bar() {
const [bar,setBar] = useState(false)
const {isactive,theme}= useSelector((state)=>state.toggle)
const dispatch = useDispatch()

const [user,error,loading] = useAuthState(auth)

function toggleClass(){
dispatch(switchClass())
}
useEffect(() => {
  document.body.setAttribute("data-theme",`${theme}`);
},[theme]);


useEffect(() => {
  const handleOutsideClick = (event) => {
    if (bar && !event.target.closest('.bar')) {
      setBar(false);
    }
  };
  document.body.addEventListener('click', handleOutsideClick);
  return () => {
    document.body.removeEventListener('click', handleOutsideClick);
  };
}, [bar]);


    function handleMenu(){
      setBar(!bar) 
    }
  return (
    <div className='bar'>
<div className ={`side_bar ${bar && `add`}`}>
<div className='cross'><X onClick={handleMenu}/></div>
<div className='toggle'>
<div onClick={()=>toggleClass()} className='toggle-div'>
  <div className={`switch-mode ${isactive&&`active-mode`} `}></div>
  </div>
</div>

  <div className='top'>
  <Link className='a' to="/">Home</Link>
<Link className='a' to="/about">About</Link>
<Link className='a' to="/cart">Cart</Link>
  </div>
  <div className='bottom'>
  <Link className='a' to="/profile">Profile</Link>
{
!user?<Link className='a' to="/login"><button className='login-btn'>Login</button></Link>:
<Logout/>
}
  </div>

</div>
<Menu onClick={handleMenu}/>
    </div>
  )
}


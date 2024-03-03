import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Signup() {
    const navigate = useNavigate()
  return (
    <div className='login-main'>

    <h1 className='login-heading'>Signup</h1>
    <div className='input-div'>
    <div><input className='login-input' type='email' placeholder='Enter Email'/></div>
    <div><input className='login-input' type='password' placeholder='Enter Password'/></div>
    <div><input className='login-input' type='password' placeholder='Confirm Password'/></div>
    <div>Allready Have an account? Login <Link to="/login">here</Link></div>
    <button onClick={()=>navigate('/login')} className='btn'>Signup</button>
    
    </div>
    
        </div>
  )
}





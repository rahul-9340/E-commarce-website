import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login-main'>

<h1 className='login-heading'>Login</h1>
<div className='input-div'>
<div><input className='login-input' type='email'/></div>
<div><input className='login-input' type='password'/></div>
<div>Don't Have an account? Signup <Link to="/signup">here</Link> </div>
<button className='btn'>Login</button>

</div>

    </div>
  )
}



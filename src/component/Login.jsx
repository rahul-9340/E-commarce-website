import React from 'react'
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
export default function Login() {


return (
   <div className='login-main'>
<form onSubmit={Login}>
<h1 className='login-heading'>Login</h1>
<div className='input-div'>
<div><input name='email'  className='login-input' type='email'/></div>
<div><input name='password'  className='login-input' type='password'/></div>
<div>Don't Have an account? Signup <Link to="/signup">here</Link> </div>
<button type='submit' className='btn'>Login</button>
</div>
</form>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Error from './Error'
export default function Login() {
const[form,setForm] = useState({
  email:"",
  password:""
})

const [err,setError] = useState("")


const navigate = useNavigate()
const HandleChange = (e)=>{
  setError("")
setForm((prev)=>{
  return{
    ...prev,
    [e.target.name]:e.target.value
  }
})
}

function Validation(){
  let e = ""
  if(form.email&&form.password){
    setError("")
    return true

  }
  else{
    e = "fill all the fields";
    setError(e)
    return false
  }
}


async function LoginUser(e){
e.preventDefault()
if(!Validation())return
try{
  const userCredential = await signInWithEmailAndPassword(auth,form.email,form.password)
  const user = userCredential.user
  setForm({
    email:"",
    password:""
  })
  navigate("/")
}
catch(e){
  setError(e.code.toString())
  console.log(e)
}

}
return (
   <div>
<form onSubmit={LoginUser} className='login-main'>
<h1 className='login-heading'>Login</h1>
{
  err && <Error err={err}/>
}
<div className='input-div'>
<div><input value={form.email} onChange={e=>HandleChange(e)} name='email'  className='login-input' type='email'/></div>
<div><input value={form.password} onChange={e=>HandleChange(e)} name='password'  className='login-input' type='password'/></div>
<div>Don't Have an account? Signup <Link to="/signup">here</Link> </div>
<button type='submit' className='btn'>Login</button>
</div>
</form>
</div>
 )
}

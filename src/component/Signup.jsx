import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Error from "./Error";
export default function Signup() {
  const navigate = useNavigate();
  const[error,setError] = useState("")
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const HancdleChange = (e) => {
    setError("")
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };


  function Validate() {
    if (form.email && form.password && form.confirmPassword) {
      if (form.confirmPassword == form.password) {
       setError("")
        return true;
      } else {
        setError("password do not match")
        return false;
      }
    } else {
     setError("fill all the fields")
      return false;
    }
  }

  async function SingupUser(e) {
    e.preventDefault();
    if (!Validate()) return;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      setForm({
        email:"",
        password:""
      })
      navigate("/")
      console.log(user);
    } catch (e) {
      setError(e.code.toString())
      console.log(e);
    }
  }
  return (
    <div>
      <form onSubmit={SingupUser} className="login-main">
        <h1 className="login-heading">Signup</h1>
        {
          error && <Error err={error}/>
        }
        <div className="input-div">
          <div>
            <input
              value={form.email}
              name="email"
              onChange={(e) => HancdleChange(e)}
              className="login-input"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <input
              value={form.password}
              name="password"
              onChange={(e) => HancdleChange(e)}
              className="login-input"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <input
              value={form.confirmPassword}
              name="confirmPassword"
              onChange={(e) => HancdleChange(e)}
              className="login-input"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            Allready Have an account? Login <Link to="/login">here</Link>
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

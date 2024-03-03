import { useState } from 'react'
import Navbar from './component/Navbar'
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Loading from './component/Loading';
import { Suspense } from 'react';
import LazyLoading from './LazyLoading';
const Home = LazyLoading("./component/Home")
const About = LazyLoading("./component/About")
const Cart =  LazyLoading("./component/Cart","Cart")
const Login = LazyLoading("./component/Login")
const Profile= LazyLoading("./component/Profile")
const Signup = LazyLoading('./component/Signup')

function App() {
  return (
   <div>
    <Suspense fallback={<Loading/>}>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/Profile' element={<Profile/>}/>
<Route path='/signup' element={<Signup/>}/>
</Routes>
</Suspense>
</div>
  )}
export default App







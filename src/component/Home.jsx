import React, { useEffect, useState } from 'react'
import FetchProducts from '../Redux/Actions'
import { useSelector,useDispatch} from 'react-redux'
import { SetFilter } from '../Redux/Slice'
import Products from './Product'
export default function Home(){
const {error,isloading,users,filterData} = useSelector((state)=>state.users)
const dispatch = useDispatch()
const[value,setValue] = useState("")
useEffect(()=>{
  dispatch(FetchProducts())
},[])

useEffect(()=>{
dispatch(SetFilter(value))
},[value])

  return (
    <div className='home-page'>
     <h1 className='all-store'>ALL STORE</h1>
     <div className='search-bar'><input
value={value}
     onChange={(e)=> setValue(e.target.value)}
     className='input' type='search' placeholder='Search for Products...'/></div>
    <div className='hr'></div>
     <h3 className='product-tag'>Products</h3>

  {error && <p className='error'>Error:{error}</p>}
  {isloading ? <div className='loading-div'>Loading...</div>:
  <div className='product-list'>
{
 filterData.length>0 &&filterData.map((items)=>(
 <Products key={items.id} items={items}/>
))
}
</div>
}
</div>
  )
}

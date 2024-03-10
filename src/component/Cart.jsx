import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FetchProducts from "../Redux/Actions";

import Products from "./Product";
import { FetchCartItems } from "../Redux/CartActions";

export const Cart = function Cart() {
  
const dispatch = useDispatch()
const {CartItems} = useSelector((state)=>state.CartSlice)

useEffect(()=>{
  dispatch(FetchCartItems())
  },[])

 return (
   <>  
   {
CartItems&&CartItems.length>0 ? CartItems.map((items)=>(
 <Products key={items.id} items={items}/>
)):<div className="no-items">
<p>ADD SOMETHING TO CART !</p>
</div>
   }
   </>
  );
};










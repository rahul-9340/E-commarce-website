import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
// import { SelectIsItemCart } from '../Redux/CartSlice'
import { RemoveItems, UpdateItems } from '../Redux/CartActions'

export default function Products({items}) {
const cartItems = useSelector((state)=>state.CartSlice.CartItems)
// console.log(cartItems)

function isIncart(id){
  if(!cartItems)return
  for (const item of cartItems) {
    if (item.id === id) {
      return true;
    }
  }
  return false;
}

const dispatch = useDispatch()

function AddCart(itemsId){
dispatch(UpdateItems(itemsId))
}


function HandleRemove(id){
dispatch(RemoveItems(id))
}


return (
   <>
  <div className='products'>
<div className='img-div'><img src={items.image}/></div>
<div className='product-detail'>
<div><b>{items.title}</b></div>
<div>{items.description.slice(0,50)}...</div>
<div>Price:{items.price}$</div>
<div>Rating {items.rating.rate}</div>
{
isIncart(items.id)?<button onClick={()=>HandleRemove(items.id)} className='addCart-btn'>Remove from Cart</button>:
 <button onClick={()=>AddCart(items)} className='addCart-btn'>Add to Cart</button>
} 
 
 </div>
</div>
  </>
  )
}







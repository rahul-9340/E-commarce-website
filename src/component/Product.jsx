import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
export default function Products({items}) {
const dispatch = useDispatch()



function HandleAddCart(){
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
  <button onClick={HandleAddCart} className='addCart-btn'>Add to Cart</button>
 </div>
</div>
  </>
  )
}






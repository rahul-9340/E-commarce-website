import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { AddCart } from '../Redux/Slice'

export default function Products({items}) {
   const dispatch = useDispatch()
function addtocart(id){
dispatch(AddCart(id))
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
<button onClick={()=>addtocart(items.id)} className='addCart-btn'>Add To Cart</button>
</div>
</div>
   </>
  )
}






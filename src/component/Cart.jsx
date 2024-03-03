import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RemoveCart } from '../Redux/Slice'
export const Cart =  function Cart() {

  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.users.cart)

  function removeCart(id){
dispatch(RemoveCart(id))
  }

  return (
    <div className='product-list'>
  
{
  cart.map((items)=>(
    <>
   <div className='products'>
<div className='img-div'><img src={items.image}/></div>
<div className='product-detail'>
<div><b>{items.title}</b></div>
<div>{items.description.slice(0,50)}...</div>
<div>Price:{items.price}$</div>
<div>Rating {items.rating.rate}</div>
<button onClick={()=>removeCart(items.id)} className='addCart-btn'> Remove from Cart</button>
</div>
</div>
    </>
  ))

}

    </div>
  )
}










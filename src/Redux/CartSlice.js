import { FetchCartItems,UpdateItems } from "./CartActions";
import { createSlice } from "@reduxjs/toolkit";
import { RemoveItems } from "./CartActions";


const CartSlice = createSlice({
  name:"CartSlice",
  initialState:{
   IsLoading:false,
   error:null,
   CartItems:[]
  },

extraReducers:(builders)=>{
builders.addCase(FetchCartItems.pending,(state,action)=>{
state.IsLoading = true
})

builders.addCase(FetchCartItems.fulfilled,(state,action)=>{
 state.IsLoading = false
 state.CartItems = action.payload
 state.error = null   
})

builders.addCase(FetchCartItems.rejected,(state,action)=>{
state.IsLoading = false
state.error = action.payload
})

builders.addCase(UpdateItems.fulfilled,(state,action)=>{
  console.log(action.payload)
  const{items,quantity} = action.payload
  state.CartItems.push(items)
});


builders.addCase(RemoveItems.fulfilled,(state,action)=>{
  state.CartItems =  state.CartItems.filter((items)=>{
    return items.id !== action.payload
   })
})


}

})

// export const SelectIsItemCart = (state,id)=>{

// state.CartSlice.CartItems.forEach((items)=>{
//    if(items.id == id)return true
// })
// return false
// }



export default CartSlice.reducer 



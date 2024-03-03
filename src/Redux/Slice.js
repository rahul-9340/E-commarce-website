import FetchProducts from "./Actions";
import { createSlice, miniSerializeError } from "@reduxjs/toolkit";

const Slice = createSlice({
name:"user",
initialState:{
  users:[] ,
  isloading:false,
  error:null,
filterData:[],
cart:[]
},

reducers:{
SetFilter:(state,action)=>{state.filterData = state.users.filter((items)=>{
  return items.title.toLowerCase().includes(action.payload.toLowerCase().trim())  
})},
AddCart:(state,action)=>{
 state.users.forEach((items)=>{ 
 if(items.id == action.payload){
 state.cart.push(items)
 }
})
},
RemoveCart:(state,action)=>{
state.cart = state.cart.filter((items)=>{
  return items.id != action.payload
})
}

},
extraReducers:(builders)=>{
builders.addCase(FetchProducts.pending,(state)=>{
    state.isloading = true;
})
builders.addCase(FetchProducts.fulfilled,(state,action)=>{
    state.isloading = false;
    state.users = action.payload
    state.filterData = action.payload;
    state.error = null
})
builders.addCase(FetchProducts.rejected,(state,action)=>{
    state.isloading = false;
    state.error =action.payload 
})
}
})

export const {SetFilter,AddCart,RemoveCart} = Slice.actions

export default Slice.reducer




import FetchProducts from "./Actions";
import { createSlice, miniSerializeError } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const Slice = createSlice({
name:"user",
initialState:{
  users:[],
  isloading:false,
  error:null,
filterData:[],
},
reducers:{
SetFilter:(state,action)=>{state.filterData = state.users.filter((items)=>{
  return items.title.toLowerCase().includes(action.payload.toLowerCase().trim())  
})},

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

export const {SetFilter} = Slice.actions

export default Slice.reducer







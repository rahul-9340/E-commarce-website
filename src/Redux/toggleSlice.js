import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
 name:"toggle",
 initialState:{
  isactive:false,
  theme:"light"
 },

 reducers:{
switchClass:(state,action)=>{
   if(state.isactive){
    state.isactive = false
    state.theme = "light"
   }
   else{
    state.isactive = true
    state.theme = "dark"
   }
}
 }
})

export const{switchClass} = toggleSlice.actions


export default toggleSlice.reducer



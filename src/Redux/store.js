import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import toggleSlice from "./toggleSlice";
import CartSlice from "./CartSlice";
const store = configureStore({
  reducer:{
  users:Slice,
  toggle:toggleSlice,
  CartSlice:CartSlice
  }  
})

export default store
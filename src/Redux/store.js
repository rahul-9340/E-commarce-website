import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import toggleSlice from "./toggleSlice";
const store = configureStore({
  reducer:{
  users:Slice,
  toggle:toggleSlice
  }  
})

export default store
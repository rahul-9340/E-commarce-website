
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const FetchProducts = createAsyncThunk("fetch/products",async(_,ThunkApi)=>{
const url = "https://fakestoreapi.com/products"
try{
const response = await axios.get(url)
return ThunkApi.fulfillWithValue(response.data)
}
catch(e){
return ThunkApi.rejectWithValue(e.message)
}
})

export default FetchProducts



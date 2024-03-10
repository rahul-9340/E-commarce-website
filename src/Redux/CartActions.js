import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import axios from "axios";
export const FetchCartItems = createAsyncThunk("fetch/cartItem",async(_,thunkAPI)=>{
const UserId = auth.currentUser.uid
const URL = "https://fakestoreapi.com/products"
 try{
    const DocRef = doc(db, "MyCart", UserId);
    const docSnap = await getDoc(DocRef);
    if (docSnap.exists()) {
        const promises = Object.keys(docSnap.data().items).map((id) =>
         axios.get(`${URL}/${id}`).then((res)=>res.data) 
    )
      const products = await Promise.all(promises)   
      return thunkAPI.fulfillWithValue(products);
    } else {
      thunkAPI.fulfillWithValue("No such document");
    }
}
 catch(e){
console.log(e)
  thunkAPI.rejectWithValue(e)
 }
}) 


export const UpdateItems = createAsyncThunk("update/items",async(items,thunkAPI)=>{
  const UserId = auth.currentUser.uid
try{
    const docRef = doc(db, "MyCart",UserId)
    const cartDoc = await getDoc(docRef); 
    if(cartDoc.exists()){
       await updateDoc(docRef,{
         [`items.${items.id}`]:1
       }) 
       return thunkAPI.fulfillWithValue({items,quantity:1})
    }
    await setDoc(docRef,{
       items:{
        [items.id]:1
       } 
    })
return thunkAPI.fulfillWithValue({items,quantity:1})
}
catch(e){
 thunkAPI.rejectWithValue(e)        
}      
})


export const RemoveItems = createAsyncThunk("Remove/items",async(itemId,thunkAPI,)=>{
const UserId = auth.currentUser.uid 
try{
const docRef = doc(db, "MyCart",UserId)
 await updateDoc(docRef,{
   [`items.${itemId}`]:deleteField()
 })

return thunkAPI.fulfillWithValue(itemId)
 }

catch(e){
return thunkAPI.rejectWithValue(e)
 }
})















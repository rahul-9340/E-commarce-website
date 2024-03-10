import { lazy } from "react";
import React from 'react'
export default function LazyLoading(path,namedComponent) {
  
    if(!namedComponent){
        return lazy(()=>import(/* @vite-ignore */path))
    }
    else{
    return lazy(()=>import(/* @vite-ignore */path).then((module)=>{
        return{  
        default:module[namedComponent]
       } 
    }))
    }
    }


    




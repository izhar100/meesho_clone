import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS, NOTSEARCH, SEARCH } from "./actionType"
import { productURL } from "../../../api"

export const getProduct=(search)=>(dispatch)=>{
      if(search){
        dispatch({type:SEARCH,payload:search})
      }else{
        dispatch({type:NOTSEARCH})
      }
      dispatch({type:GET_PRODUCT_REQ})
      axios.get(productURL+`?search=${search}`).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.products})
      }).then((err)=>{
        dispatch({type:GET_PRODUCT_ERROR})
      })
}

export const filterProduct=(data)=>(dispatch)=>{
     dispatch({type:GET_PRODUCT_REQ})
     axios.get(productURL,{params:data}).then((res)=>{
      dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.products})
     }).catch((err)=>{
      dispatch({type:GET_PRODUCT_ERROR})
     })
}
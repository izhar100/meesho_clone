import { ADD_PRODUCT_REQ, ADD_PRODUCT_SUCCESS, MODIFY_ITEMS } from "./actionType"

export const addToCart=(item)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCT_SUCCESS,payload:item})
    return
}

export const modifyCartItem=(items)=>(dispatch)=>{
    dispatch({type:MODIFY_ITEMS,payload:items})
}
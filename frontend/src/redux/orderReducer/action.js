import { ADD_ADDRESS } from "./actionType"

export const addAddress=(order)=>(dispatch)=>{
    dispatch({type:ADD_ADDRESS,payload:order})
}
export const placeOrder=(order)=>(dispatch)=>{
    dispatch({type:ADD_ADDRESS,payload:order})
}
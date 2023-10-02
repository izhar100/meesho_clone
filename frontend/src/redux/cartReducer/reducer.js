import { ADD_PRODUCT_ERR, ADD_PRODUCT_REQ, ADD_PRODUCT_SUCCESS, MODIFY_ITEMS } from "./actionType"

const initState={
    cartItem:JSON.parse(localStorage.getItem("cart"))||[],
    loading:false,
    error:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case ADD_PRODUCT_REQ:{
            return {
                ...state,loading:true
            }
        }
        case ADD_PRODUCT_SUCCESS:{
            const cartItems=[...state.cartItem,payload]
            localStorage.setItem("cart",JSON.stringify(cartItems))
            return {
                ...state,loading:false,cartItem:[...state.cartItem,payload]
            }
        }
        case MODIFY_ITEMS:{
            localStorage.setItem("cart",JSON.stringify(payload))
            return {
                ...state,cartItem:payload
            }
        }
        case ADD_PRODUCT_ERR:{
            return {
                ...state,loading:false,error:true
            }
        }
        default:{
            return state
        }
    }
}
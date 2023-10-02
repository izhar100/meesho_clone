import { GET_PRODUCT_ERROR, GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS, NOTSEARCH, SEARCH } from "./actionType"

const initState={
    isLoading:false,
    products:[],
    isError:false,
    searchKeyword:""
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQ:{
            return {
                ...state,isLoading:true
            }
        }
        case GET_PRODUCT_SUCCESS:{
            return {
                ...state,isLoading:false,isError:false,products:payload
            }
        }
        case GET_PRODUCT_ERROR:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        case SEARCH:{
            return {
                ...state,searchKeyword:payload
            }
        }
        case NOTSEARCH:{
            return {
                ...state,searchKeyword:""
            }
        }
        default:{
            return state
        }
    }
}
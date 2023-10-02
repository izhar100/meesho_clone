import { GET_PRO_ERROR, GET_PRO_REQ, GET_PRO_SUCCESS } from "./actionType"

const initState={
    isLoading:false,
    product:{},
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_PRO_REQ:{
            return {
                ...state,isLoading:true
            }
        }
        case GET_PRO_SUCCESS:{
            return {
                ...state,isLoading:false,isError:false,product:payload
            }
        }
        case GET_PRO_ERROR:{
            return {
                ...state,isLoading:false, isError:true
            }
        }
        default:{
            return state
        }
    }
}
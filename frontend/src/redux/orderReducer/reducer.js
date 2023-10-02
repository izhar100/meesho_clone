import { ADD_ADDRESS } from "./actionType"

const initState={
    order:JSON.parse(localStorage.getItem("order"))||{}
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case ADD_ADDRESS:{
            localStorage.setItem("order",JSON.stringify(payload))
            return {
                ...state,order:payload
            }
        }
        default:{
            return state
        }
    }
}
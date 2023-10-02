import { LOGIN_ERROR, LOGIN_REQ, LOGIN_SUCCESS } from "./actionType"

const initState={
    isLoading:false,
    isAuth:localStorage.getItem("auth")||false,
    isError:false,
    token:localStorage.getItem("token")||"",
    user:JSON.parse(localStorage.getItem("user"))||{}
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQ:{
            return {...state,isLoading:true}
        }
        case LOGIN_SUCCESS:{
            const user=payload.user
            const token=payload.token
            localStorage.setItem("token",token)
            localStorage.setItem("user",JSON.stringify(user))
            return {
                ...state,isLoading:false,isError:false, isAuth:true, token:payload.token, user:payload.user
            }
        }
        case LOGIN_ERROR:{
            return {
                ...state,isLoading:false,isError:true,isAuth:false
            }
        }
        default:{
            return state
        }
    }
}
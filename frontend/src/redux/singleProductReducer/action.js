import axios from "axios"
import { productURL } from "../../../api"
import { GET_PRO_ERROR, GET_PRO_REQ, GET_PRO_SUCCESS } from "./actionType"

export const getSingleProduct=(id)=>(dispatch)=>{
    dispatch({type:GET_PRO_REQ})
    return axios.get(productURL+`/${id}`).then((res)=>{
        const product=res.data
        dispatch({type:GET_PRO_SUCCESS,payload:product})
    }).catch((err)=>{
        dispatch({type:GET_PRO_ERROR})
    })
}
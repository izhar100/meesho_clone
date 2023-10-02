import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isAuth,user,token}=useSelector((store)=>{
        return {
            isAuth:store.authReducer.isAuth,
            user:store.authReducer.user,
            token:store.authReducer.token
        }
    },shallowEqual)
    const location=useLocation()
  return (
    <>
      {token?children:<Navigate state={location.pathname} to={"/signin"} />}
    </>
  )
}

export default PrivateRoute

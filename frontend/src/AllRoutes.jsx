import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignIn from './pages/Login/SignIn'
import SingleProduct from './pages/Product/SingleProduct'
import PrivateRoute from './components/PrivateRoute'
import Cart from './pages/Cart/Cart'
import Address from './pages/Cart/Address'
import Payment from './pages/Cart/Payment'
import Summery from './pages/Cart/Summery'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/cart/address' element={
          <PrivateRoute>
          <Address/>
        </PrivateRoute>
        } />
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart/>
          </PrivateRoute>
        }/>
        <Route path='/cart/payment' element={
          <PrivateRoute>
            <Payment/>
          </PrivateRoute>
        }/>
        <Route path='/cart/summery' element={
          <PrivateRoute>
            <Summery/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  )
}

export default AllRoutes

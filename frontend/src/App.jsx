import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import AllRoutes from './AllRoutes'
import { useLocation, useParams } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      <Box w={"100%"} position={'fixed'} bgColor={"#ffffff"} zIndex={2}
      display={location.pathname=="/cart"?"none":location.pathname=="/cart/address"?"none":location.pathname=="/cart/payment"?"none":location.pathname=="/cart/summery"?"none":"block"}
      >
        <Box p={"10px"} w={"90%"} m={"auto"}>
          <Header />
        </Box>
        <hr style={{ color: "#000000" }} />
        <Box p={"10px"} pt={"15px"} pb={"15px"}
          display={location.pathname == "/signin" ? "none" : "block"}
        >
          <Navbar />
        </Box>
        <hr style={{ color: "#000000", border: "1px solid #d1d1d1" }} />
      </Box>
      <Box className='gap' display={location.pathname=="/cart"?"none":location.pathname=="/cart/address"?"none":location.pathname=="/cart/payment"?"none":location.pathname=="/cart/summery"?"none":"block"} h={location.pathname == "/signin" ? "80px" : "180px"}>

      </Box>
      <AllRoutes />
    </>
  )
}

export default App

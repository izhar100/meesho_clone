import React, { useEffect, useState } from 'react'
import MeeshoLogo from '../../assets/Meesho.png'
import { Flex, Image } from '@chakra-ui/react'
import Steps from './Steps'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import Cart from './Cart'

const Summery = () => {
    const { order } = useSelector((store) => {
        return {
            order: store.orderReducer.order
        }
    }, shallowEqual)
    const navigate=useNavigate()
    useEffect(()=>{
    },[order])
  return (
    <div>
      <Flex className='cartHeader' w={"100%"} position={"fixed"} top={0}
                borderBottom={"2px solid #cacaca"} pb={"20px"} bg={"#ffffff"} pt={"5px"}
                mt={"0px"} zIndex={2}
            >
                <Flex w={"90%"} m={"auto"} justifyContent={"space-between"}>
                    <Flex alignItems={'center'} w={"20%"}>
                        <Image src={MeeshoLogo} onClick={() => navigate("/")} w={"160px"} alt='MeeshoLogo' />
                    </Flex>
                    <Flex w={"40%"} justifyContent={"center"} alignItems={"center"}>
                        <Steps ind={3} />
                    </Flex>
                    <Flex w={"20%"}>

                    </Flex>
                </Flex>
       </Flex>
       <Cart/>
    </div>
  )
}

export default Summery

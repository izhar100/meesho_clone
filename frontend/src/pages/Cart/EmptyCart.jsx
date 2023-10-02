import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmptyCart = () => {
    const navigate=useNavigate()
  return (
    <div>
      <Flex justifyContent={"center"} p={"50px"}>
        <Box textAlign={"center"}>
           <Image src='https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png'/> 
           <br />
           <Text fontSize={"20px"} fontWeight={500}>Your cart is empty</Text>
           <br />
           <Link to={"/#allproducts"}>
           <Button variant={"outline"} colorScheme='pink' fontSize={"18px"}
           >
             View Products
           </Button>
           </Link>
        </Box>
      </Flex>
    </div>
  )
}

export default EmptyCart

import { Box, Button, Flex, Spinner, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { mainURL } from '../../../api'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const PlaceOrderbtn = () => {
    const { order } = useSelector((store) => {
        return {
            order: store.orderReducer.order
        }
    }, shallowEqual)

    const navigate=useNavigate()
    const [sec,setSec]=useState(10)
    const [loading,setLoading]=useState(false)

    //modal variables;
    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
    }, [order])
    const timer=()=>{
        if(sec>=1){
            setInterval(()=>{
                setSec((pre)=>pre-1)
            },1000)
        }else{
            navigate("/")
        }
        setTimeout(()=>{
            navigate("/")
        },10000)
    }

    const handlecontinueClick = () => {
        setLoading(true)
        axios.post(mainURL + "/order", { order }).then((res) => {
            setLoading(false)
            onOpen()
            timer()
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <Box>
                <Text fontWeight={500} fontSize={"18px"}
                >{order?.paymentStatus == "paid" ? "Paid ✅" : "Price Details"
            }</Text>
                <Flex mt={"10px"} justifyContent={"space-between"}>
                    <Text fontSize={"16px"} fontWeight={400} color={"#6f6f6f"} _hover={{ cursor: "pointer" }}
                    >Total Product Price</Text>
                    <Text fontSize={"16px"} color={"#454545"}>+₹{order?.amount}</Text>
                </Flex>
                <Box h={"10px"} mb={"10px"} borderBottom={"1px solid #8f8f8f"}></Box>
                <Flex justifyContent={"space-between"}>
                    <Text fontSize={"18px"} fontWeight={500}>Order Total</Text>
                    <Text fontSize={"18px"} fontWeight={500}>₹{order?.amount}</Text>
                </Flex>
                <br />
                <Box className='continuebtn'>
                    <Button width={'full'} fontSize={"18px"} bgColor={"#9F2089"}
                        color={"white"} _hover={{ bgColor: "#9F2089" }}
                        onClick={handlecontinueClick}
                    >{loading?<Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='pink.500'
                        size='md'
                      />:"Place Order"}</Button>
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bgColor={"#d5ffef"}>
                    <ModalBody p={"40px"}>
                        <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                            borderRadius={"10px"}
                            bgColor={"#d5ffef"}
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Order Placed!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Thanks for choosing meesho.....!
                            </AlertDescription>
                            <AlertDescription maxWidth='sm'>
                                Redirecting to home in {sec} seconds
                            </AlertDescription>
                            <br />
                            <Flex>
                                <Button bgColor={"#9F2089"} _hover={{ bgColor: "#9F2089" }} color={"white"}
                                onClick={()=>{
                                    onClose()
                                    navigate("/")
                                }}
                                >Continue shopping</Button>
                            </Flex>
                        </Alert>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default PlaceOrderbtn

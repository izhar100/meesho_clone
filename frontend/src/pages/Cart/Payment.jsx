import { Box, Flex, Image, Radio, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Steps from './Steps'
import { useNavigate } from 'react-router-dom'
import MeeshoLogo from '../../assets/Meesho.png'
import { shallowEqual, useSelector } from 'react-redux'
import PriceDetails from './PriceDetails'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsCash } from "react-icons/bs";

const Payment = () => {
    const { order } = useSelector((store) => {
        return {
            order: store.orderReducer.order
        }
    }, shallowEqual)
    const [steps, setSteps] = useState(2)
    const navigate = useNavigate()
    const [upiPay,setUpiPay]=useState(false)
    const [cod,setCod]=useState(false)
    useEffect(() => {
        console.log(order)
    }, [order])

    const handleUPIpay=()=>{
         setUpiPay(!upiPay)
         setCod(false)
    }
    const handleCashonDelivery=()=>{
        setCod(!cod)
        setUpiPay(false)
    }
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
                        <Steps ind={steps} />
                    </Flex>
                    <Flex w={"20%"}>

                    </Flex>
                </Flex>
            </Flex>
            <br />
            <br />
            <br />
            <br />
            <Flex w={"60%"} m={"auto"}>
                <Box w="65%" borderRight={"2px solid #c5c5c5"} pr={"20px"}>
                    <Box pl={"20px"} pr={"20px"} pt={"20px"} border={"1px solid #d3d3d3"}>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize={"20px"} fontWeight={500}>
                                Select Payment Method
                            </Text>
                            <Flex alignItems={"center"} >
                                <AiFillSafetyCertificate size={"20px"} color='#a8cbff' />
                                <Box fontSize={"9px"} fontWeight={500} textColor={"#abababff"}>
                                    <Text>100% SAFE</Text>
                                    <Text>PAYMENTS</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex mt={"20px"} alignItems={"center"} justifyContent={"space-between"}>
                            <Text fontSize={"10px"} fontWeight={500}>
                                PAY ONLINE
                            </Text>
                            <Box w={"88%"} h={"0px"} border={"1px solid #abababff"}></Box>
                        </Flex>
                        <br />
                        <Flex alignItems={"center"} justifyContent={"space-between"}
                        onClick={handleUPIpay} _hover={{cursor:"pointer"}}
                        >
                            <Flex position={"relative"}>
                                <Text fontSize={"10px"} fontWeight={500} border={"2px solid black"}
                                    pt={"-5px"} pb={"-5px"} pl={"3px"} pr={"3px"} borderRadius={"2px"}
                                    position={"absolute"}
                                    top={"3px"}
                                >UPI</Text>
                                <Text fontSize={"18px"} fontWeight={500} ml={"50px"}>
                                    UPI (Google Pay/PhonePay)
                                </Text>
                            </Flex>
                            <Flex alignItems={"center"} transform={upiPay?"rotate(270deg)":`rotate(90deg)`}>
                                <Text fontSize={"30px"} color={"#848484"} _hover={{ cursor: 'pointer' }}
                                >
                                    ›
                                </Text>
                            </Flex>
                        </Flex>
                        <br />
                        <Flex pl={"70px"} pr={"20px"} pt={"15px"} pb={"15px"} mr={"-20px"} ml={"-20px"} bgColor={"#D3FAEA"} alignItems={"center"}
                        justifyContent={"space-between"}
                        display={upiPay?"flex":"none"}
                        borderTop={"2px solid #aeaeae"}
                        borderBottom={"2px solid #aeaeae"}
                        >
                            <Flex alignItems={"center"} gap={"15px"}>
                              <BsCash size={"30px"} color='#24a15a'/>
                              <Text fontSize={"16px"} fontWeight={500} color={"#333333"}>
                                PAY ONLINE
                              </Text>
                            </Flex>
                            <Radio colorScheme='pink' defaultChecked></Radio>

                        </Flex>
                        <Flex mt={"20px"} alignItems={"center"} justifyContent={"space-between"}>
                            <Text fontSize={"10px"} fontWeight={500}>
                                PAY IN CASH
                            </Text>
                            <Box w={"87%"} h={"0px"} border={"1px solid #abababff"}></Box>
                        </Flex>
                        <br />
                        <Flex alignItems={"center"} justifyContent={"space-between"}
                        onClick={handleCashonDelivery} _hover={{cursor:"pointer"}}
                        >
                            <Flex position={"relative"}>
                                <Text fontSize={"10px"} fontWeight={500} border={"2px solid black"}
                                    pt={"-5px"} pb={"-5px"} pl={"8px"} pr={"8px"} borderRadius={"2px"}
                                    position={"absolute"}
                                    top={"3px"}
                                >₹</Text>
                                <Text fontSize={"18px"} fontWeight={500} ml={"50px"}>
                                    Cash on Delivery
                                </Text>
                            </Flex>
                            <Flex alignItems={"center"}>
                                <Text fontSize={"30px"} color={"#848484"} _hover={{ cursor: 'pointer' }} transform={cod?"rotate(270deg)":`rotate(90deg)`}>
                                    ›
                                </Text>
                            </Flex>
                        </Flex>
                        <br />
                        <Flex pl={"70px"} pr={"20px"} pt={"15px"} pb={"15px"} mr={"-20px"} ml={"-20px"} bgColor={"#D3FAEA"} alignItems={"center"}
                        justifyContent={"space-between"}
                        display={cod?"flex":"none"}
                        borderTop={"2px solid #aeaeae"}
                        >
                            <Flex alignItems={"center"} gap={"15px"}>
                              <BsCash size={"30px"} color='#24a15a'/>
                              <Text fontSize={"16px"} fontWeight={500} color={"#333333"}>
                                Pay cash on delivery
                              </Text>
                            </Flex>
                            <Radio colorScheme='pink' defaultChecked></Radio>

                        </Flex>

                    </Box>
                </Box>
                <Box w="35%">
                    <PriceDetails payment={upiPay} cod={cod} />
                </Box>
            </Flex>


        </div>
    )
}

export default Payment

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Cover1 = () => {
    return (
        <div>
            <Flex>
                <Box p={"30px"} w={"50%"} bgColor={'#ebebeb'} borderLeftRadius={"5px"}>
                    <Heading fontSize={'xxx-large'}>Saal Ka</Heading>
                    <Heading fontSize={'xxx-large'}>Sabse Kam Daam</Heading>
                    <br />
                    <Flex p={"10px"} bgColor={"#ffffff"} borderRadius={"10px"} gap={"40px"}>
                        <Flex alignItems={'center'} gap={"5px"} pr={"8px"} pl={"8px"} >
                            <Image src='https://images.meesho.com/images/pow/freeDelivery_jamun.svg' border={"1px solid #d4d4d4"} borderRadius={"50%"} />
                            <Text fontWeight={"500"}>Free Delivery</Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={"5px"} pr={"8px"} pl={"8px"} borderLeft={'1px solid #131212'}>
                            <Image src='https://images.meesho.com/images/pow/cod_jamun.svg' border={"1px solid #d4d4d4"} borderRadius={"50%"} />
                            <Text fontWeight={"500"}>Cash on Delivery</Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={"5px"} pr={"8px"} pl={"8px"} borderLeft={'1px solid #131212'}>
                            <Image src='https://images.meesho.com/images/pow/easyReturns_jamun.svg' border={"1px solid #d4d4d4"} borderRadius={"50%"} />
                            <Text fontWeight={"500"}>Easy Returns</Text>
                        </Flex>
                    </Flex>
                    <br />
                    <Button bgColor={"#9F2089"} p={'23px'} pr={"25px"} pl={"25px"}
                    _hover={{bg:"#9F2089"}}>
                        <Image src='https://images.meesho.com/images/pow/playstoreSmallIcon.png'
                        />
                        <Text ml={"15px"} fontSize={"18px"} color={"white"}>Download the Meesho App</Text>
                    </Button>
                </Box>
                <Box w={"50%"}>
                 <Image src='https://images.meesho.com/images/marketing/1695987804920_512.webp' borderRightRadius={"5px"} w={"100%"}/>
                </Box>
            </Flex>
        </div>
    )
}

export default Cover1

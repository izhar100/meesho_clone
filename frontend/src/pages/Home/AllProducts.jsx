import { Box, Grid, GridItem, Text,Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Loader from '../../components/Loader'
import { shallowEqual, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {
    const { isLoading, isError, products,searchKeyword } = useSelector((store) => {
        return {
            isLoading: store.productReducer.isLoading,
            isError: store.productReducer.isError,
            products: store.productReducer.products,
            searchKeyword:store.productReducer.searchKeyword
        }
    }, shallowEqual)
    const navigate=useNavigate()
    return (
        <div>
            <Box className='products' w={'100%'}>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <Grid gridTemplateColumns={"repeat(5,1fr)"} gap={"40px"}>
                            {
                                products?.map((product) => {
                                    return (
                                        <GridItem key={product._id}
                                            border={"1px solid #b9b9b9"}
                                            _hover={{ cursor: "pointer" }}
                                            onClick={() => navigate(`/product/${product._id}`)}
                                            borderRadius={"5px"}>
                                            <Box h={"300px"}>
                                                <Image src={product.image1} w={"100%"} h={"100%"}
                                                    borderTopRadius={"5px"} />
                                            </Box>
                                            <Box p={"10px"}>
                                                <Text color={"#8e8e8e"} fontSize={"17px"} noOfLines={1}>{product.name}</Text>
                                                <Flex alignItems={"center"} gap={"10px"}>
                                                    <Text fontSize={"20px"} as={"b"}>₹{product.price}</Text>
                                                    <Text fontSize={"18px"} textDecoration={"line-through"} color={"#949494"}>₹{product.price}</Text>
                                                    <Text fontSize={"16px"} color={"#038D63"}
                                                        fontWeight={500}>20% off</Text>
                                                </Flex>
                                                <Text
                                                    p={"5px"}
                                                    pr={"8px"}
                                                    pl={"8px"}
                                                    borderRadius={"20px"}
                                                    display={"inline"}
                                                    color={"#535353"}
                                                    bgColor={"#eeeeee"}
                                                    fontSize={"12px"}
                                                    fontWeight={500}
                                                >Free Delivery</Text>
                                                <Flex mt={"15px"}
                                                    alignItems={"center"}
                                                    gap={"5px"}
                                                >
                                                    <Flex
                                                        alignItems={"center"}
                                                        fontWeight={600}
                                                        gap={"5px"}
                                                        bgColor={"#00a463"}
                                                        color={"white"}
                                                        pr={"5px"}
                                                        pl={"5px"}
                                                        borderRadius={"20px"}
                                                    ><Text
                                                        fontSize={"17px"}
                                                    >4.5</Text><FaStar size={"11px"} /></Flex>
                                                    <Text fontSize={"13px"}
                                                        fontWeight={500}
                                                        color={"#8B8BA3"}
                                                    >1999 Reviews</Text>
                                                </Flex>
                                            </Box>
                                        </GridItem>
                                    )
                                })
                            }
                        </Grid>
                }
            </Box>
        </div>
    )
}

export default AllProducts

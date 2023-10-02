import { Box, Button, Flex, Heading, Image, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { productURL } from '../../../api'
import { getSingleProduct } from '../../redux/singleProductReducer/action'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { FaStar } from 'react-icons/fa'
import { BsCart2, BsCartFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Ratings from './Ratings'
import AllProducts from '../Home/AllProducts'
import Footer from '../../components/Footer'
import { addToCart } from '../../redux/cartReducer/action'
import { ADD_PRODUCT_SUCCESS } from '../../redux/cartReducer/actionType'
import SingleProductLoader from './SingleProductLoader'

const SingleProduct = () => {
  const { isLoading, isError, product } = useSelector((store) => {
    return {
      isLoading: store.singleProductReducer.isLoading,
      isError: store.singleProductReducer.isError,
      product: store.singleProductReducer.product
    }
  }, shallowEqual)
  const { isAuth, user, token } = useSelector((store) => {
    return {
        isAuth: store.authReducer.isAuth,
        user: store.authReducer.user,
        token: store.authReducer.token
    }
},shallowEqual)
const {cartItem}=useSelector((store)=>{
  return {
    cartItem:store.cartReducer.cartItem
  }
},shallowEqual)
  const { id } = useParams()
  const dispatch = useDispatch()
  const [size,setSize]=useState("")
  const location=useLocation()
  const navigate=useNavigate()
  const toast=useToast()
  const [isProductAdded,setisProductAdded]=useState(false)
  useEffect(() => {
    dispatch(getSingleProduct(id))
    setisProductAdded(false)
    window.scrollTo(0,0)
  }, [id])

  useEffect(()=>{
    for(let i=0; i<cartItem?.length; i++){
      if(cartItem[i]._id==product?._id){
         setisProductAdded(true)
      }
    }
  },[product])

  const handleAddtoCart=(item)=>{
    if(isProductAdded==true){
      navigate("/cart")
    }else if(!size){
      setSize("false")
    }else if(!token){
      navigate("/signin")
    }else{
      const cart_item={...item,quantity:1,selectedSize:size}
      dispatch({type:ADD_PRODUCT_SUCCESS,payload:cart_item})
      toast({
        title: 'Product is Added to Cart',
        status: 'success',
        duration: 3000,
        position: 'top'
    })
    setisProductAdded(true)
    }
  }
  const handleSize=(s)=>{
    setSize(s)
  }
  const handleBuyNow=(item)=>{
    console.log("clicked on buy now")
    if(isProductAdded){
      navigate("/cart")
    }else{
      const cart_item={...item,quantity:1,selectedSize:size}
      dispatch({type:ADD_PRODUCT_SUCCESS,payload:cart_item})
      navigate("/cart")
    }
  }
  return (
    <div>
      {
        isLoading
        ?
        <SingleProductLoader/>
        :
      <Flex className='mainBox' w={"80%"} m={"auto"} justifyContent={"center"}>
        <Flex className='imageBox' gap={"20px"} w={"50%"}>
          <Box>
            <Flex className='smallImage' w={"56px"} h={"60px"} justifyContent={"center"} border={"1px solid #8b0097"} mb={"10px"} borderRadius={"5px"}>
              <Image src={product.image1} h={"100%"} />
            </Flex>
            <Flex className='smallImage' w={"56px"} h={"60px"} justifyContent={"center"} border={"1px solid #8b0097"} borderRadius={"5px"}>
              <Image src={product.image2} h={"100%"} />
            </Flex>
          </Box>
          <Box className='bigImage'>
            <Box className='actualImage' w={"450px"} h={"470px"} border={"1px solid #e4e4e4"} borderRadius={"5px"} p={"5px"}>
              <Image src={product.image1} w={"100%"} h={"100%"} />
            </Box>
            <br />
            <Flex className='buyingButtons' justifyContent={"center"} gap={"10px"}>
              <Button fontSize={"18px"} pr={"40px"} pl={"40px"} color='#a100cd'
                variant={"outline"} border={"1px solid #a100cd"}
                onClick={()=>handleAddtoCart(product)}
              >
                <Flex gap={"10px"}>
                  {
                    isProductAdded
                    ?
                    <BsCartFill/>
                    :
                    <BsCart2 size={"20px"}/>
                  }
                  <Text>{
                    isProductAdded
                    ?
                    "Go to Cart"
                    :
                    "Add to Cart"
                    }</Text>
                </Flex>
              </Button>
              <Button fontSize={"18px"} pr={"40px"} pl={"40px"} bgColor='#a100cd'
              color={'white'}
              border={"1px solid #a100cd"}
              _hover={{bgColor:"#a100cd"}}
              >
                <Flex  alignItems={"center"} onClick={()=>handleBuyNow(product)}>
                <MdOutlineKeyboardDoubleArrowRight size={"25px"}/>
                  <Text>Buy Now</Text>
                </Flex>
              </Button>
            </Flex>
            <br />
            <hr/>
            <br />
            <Text fontSize={"20px"}
              fontWeight={"bold"}
            >2 Similiar Products</Text>
            <br />
            <Flex gap={"10px"}>
            <Flex className='smallImage' w={"60px"} h={"90px"} justifyContent={"center"} border={"1px solid #8b0097"} mb={"10px"} borderRadius={"5px"} p={"2px"}>
              <Image src={product.image1} h={"100%"} />
            </Flex>
            <Flex className='smallImage' w={"60px"} h={"90px"} justifyContent={"center"} border={"1px solid #8b0097"} borderRadius={"5px"} p={"2px"}>
              <Image src={product.image2} h={"100%"} />
            </Flex>
            </Flex>
          </Box>
        </Flex>
        <Box className='detailsBox' w={"50%"}>
          <Box border={"1px solid #e4e4e4"} p={"20px"} borderRadius={"10px"}>
            <Heading className='name' size={"md"} fontWeight={"medium"} color={"#8B8BA3"}>{product.name}</Heading>
            <Flex alignItems={"center"} gap={"5px"} mt={"5px"}>
              <Text fontSize={"32px"}>₹{product.price}</Text>
              <Text mt={"-7px"} _hover={{ cursor: 'pointer' }}><InfoOutlineIcon size={"16px"} color={"#6a6a6aff"} /></Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"} mb={"10px"} mt={"8px"}>
              <Flex
                alignItems={"center"}
                fontWeight={600}
                gap={"5px"}
                bgColor={"#00ca79"}
                color={"white"}
                p={"1px"}
                pr={"7px"}
                pl={"7px"}
                borderRadius={"20px"}
                w={'55px'}
              ><Text
                fontSize={"17px"}
              >4.5</Text><FaStar size={"11px"} />
              </Flex>
              <Text fontSize={"13px"}
                fontWeight={500}
                color={"#8B8BA3"}
              >20 Ratings</Text>
            </Flex>
            <Text fontSize={"12px"} fontWeight={500}
              color={"#5d5d5d"} bgColor={"#eeeeee"} display={"inline"}
              p={"3px"} borderRadius={"20px"} pr={"8px"} pl={"8px"}
            >Free Delivery</Text>
          </Box>
          <br />
          <Box border={"1px solid #e4e4e4"} p={"20px"} borderRadius={"10px"}
          bgColor={size=="false"?"#FFDAD6":"white"}>
            <Text fontSize={"20px"}
              fontWeight={"bold"}
            >Select Size</Text>
            <br />
            <Flex gap={"15px"} >
              {
                product?.size?.map((s,i) => {
                  return <Text key={i} p={"2px"} pr={"15px"} pl={"15px"} fontSize={"18px"}
                    border={`1px solid ${size==s?"#7b0094":"black"}`} borderRadius={"20px"} fontWeight={"medium"}
                    _hover={{ cursor: 'pointer' }}
                    onClick={()=>handleSize(s)}
                    color={size==s?"#7b0094":"black"}
                  >{s}</Text>
                })
              }
            </Flex>
            <br />
            <Text color={"red"} display={size=="false"?"block":"none"}>Please select a size</Text>
          </Box>
          <br />
          <Box border={"1px solid #e4e4e4"} p={"20px"} borderRadius={"10px"}>
            <Text fontSize={"20px"}
              fontWeight={"bold"}
            >Product Details</Text>
            <br />
            <Text fontSize={"16px"} color={"#616173"}
              fontWeight={500}
            >Name : {product.name}</Text>
            <Text fontSize={"16px"} color={"#616173"}
              fontWeight={500}
              display={product.fabric ? "block" : "none"}
            >Fabric : {product.fabric}</Text>
            <Text fontSize={"16px"} color={"#616173"}
              fontWeight={500}
              display={product.pattern ? "block" : "none"}
            >Pattern : {product.pattern}</Text>
            <Text fontSize={"16px"} color={"#616173"}
              fontWeight={500}
            >Net Qunatity (N) : 1</Text>
            <Text fontSize={"16px"} color={"#616173"}
              fontWeight={500}
            >Sizes : </Text>
            <Flex flexDirection={"column"}>
              {
                product?.size?.map((s,i) => {
                  return <Text key={i} fontSize={"16px"} color={"#616173"}
                    fontWeight={500}
                  > {s}{" "}
                    ( {
                      s == "M" ? "Medium" : s == "S" ? "Small" : s == "L" ? "Large" : s == "XL" ? "Extra Large" : s == "XXL" ? "Extra Extra Large" : "in cm"

                    } )
                  </Text>
                })
              }
            </Flex>
            <Text fontSize={"16px"} color={"#616173"}
              fontWeight={500}
            >{product?.description}</Text>
            <Text fontSize={"16px"} color={"#616173"}
              fontWeight={500}
            >Country of Origin : {product?.origin}</Text>
          </Box>
          <br />
          <Ratings/>
        </Box>
      </Flex>
     }
      <br />
      <Box w={"90%"} m={"auto"} justifyContent={"center"}>
      <Text fontSize={"20px"}
              fontWeight={"bold"}
            >People also viewed</Text>
            <br />
       <AllProducts/>
      </Box>
      <br />
      <br />
      <Footer/>
    </div >
  )
}

export default SingleProduct

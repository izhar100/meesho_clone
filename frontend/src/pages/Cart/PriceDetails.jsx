import { Box, Button, Flex, Spinner, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { mainURL } from '../../../api'
import axios from 'axios'
import { placeOrder } from '../../redux/orderReducer/action'
const logo="https://avatars.githubusercontent.com/u/19436680?s=280&v=4"
const PriceDetails = ({payment,cod}) => {
    const {cartItem}=useSelector((store)=>{
        return {
            cartItem:store.cartReducer.cartItem
        }
    },shallowEqual)
    const { order } = useSelector((store) => {
        return {
            order: store.orderReducer.order
        }
    }, shallowEqual)
    const dispatch=useDispatch()
    const [price,setPrice]=useState(0)
    const location=useLocation()
    const navigate=useNavigate()
    const toast=useToast()
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
       let total=0;
       cartItem?.forEach((item)=>{
        total+=item.price*item.quantity;
       })
       setPrice(total)
    },[cartItem,payment])

    const handleContinue=()=>{
        if(payment){
            setLoading(true)
            displayRazorpay().then((res)=>{
                setLoading(false)
                setTimeout(()=>{
                    const updatedOrder={
                        ...order,amount:price,paymentStatus:"paid",paymentmode:"online payment",
                    }
                    dispatch(placeOrder(updatedOrder))
                    navigate("/cart/summery")
                },5000)
            })
        }else if(cod){
            const updatedOrder={
                ...order,amount:price,paymentStatus:"unpaid",paymentmode:"COD",
            }
            dispatch(placeOrder(updatedOrder))
            navigate("/cart/summery")
            
        }else{
            toast({
                title: 'Please select a payment method',
                status: 'warning',
                duration: 3000,
                position: 'top'
            }) 
        }
    }
    //RazorPay loadScript function
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    //---------------------------

    //Define displayRazorPay function

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            toast({
                title: 'Razorpay SDK failed to load. Are you online?',
                status: 'error',
                duration: 3000,
                position: 'top'
            })
            return;
        }

        // creating a new order
        const result = await axios.post(mainURL+"/payment/orders",{amount:price});

        if (!result) {
            toast({
                title: 'Server error. Are you online?',
                status: 'error',
                duration: 3000,
                position: 'top'
            })
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;
        const options = {
            key: "rzp_test_X6OfqtXt1xa5QO", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Meesho",
            description: "Payment for product order",
            image: "https://avatars.githubusercontent.com/u/19436680?s=280&v=4",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post(mainURL+"/payment/success", data);
                alert(result.data.msg);
            },
            prefill: {
                name: order?.deliveryAddress.name,
                email: "abc@example.com",
                contact: order?.deliveryAddress.contactNo,
            },
            notes: {
                address: order?.deliveryAddress.house,
            },
            theme: {
                color: "#c200c6",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    //-------------------------------
    return (
        <div>
            <Box className='priceDetails' pt={"10px"} pl={"20px"}>
                <Text fontWeight={500} fontSize={"18px"}
                >Price Details</Text>
                <Flex mt={"10px"} justifyContent={"space-between"}>
                    <Text fontSize={"16px"} fontWeight={400} color={"#6f6f6f"} _hover={{ cursor: "pointer" }}
                    >Total Product Price</Text>
                    <Text fontSize={"16px"} color={"#454545"}>+₹{price}</Text>
                </Flex>
                <Box h={"10px"} mb={"10px"} borderBottom={"1px solid #8f8f8f"}></Box>
                <Flex justifyContent={"space-between"}>
                    <Text fontSize={"18px"} fontWeight={500}>Order Total</Text>
                    <Text fontSize={"18px"} fontWeight={500}>₹{price}</Text>
                </Flex>
                <br />
                <Box className='continuebtn'
                display={location.pathname=="/cart/address"?"none":"block"}
                >
                        <Text fontSize={"12px"} textAlign={"center"} color={"#5e5e5e"} mb={"10px"}
                        display={payment?"none":"block"}
                        >Clicking on {cod?"Place order":"‘Continue’"} will not deduct any money</Text>
                        <Button width={'full'} fontSize={"18px"} bgColor={"#9F2089"}
                            color={"white"} _hover={{ bgColor: "#9F2089" }}
                            onClick={handleContinue}
                        >{loading?<Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='pink.500'
                            size='md'
                          />:payment?"Pay and Continue":"Continue"}</Button>
                </Box>
            </Box>
        </div>
    )
}

export default PriceDetails

import { Box, Button, Flex, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, SelectField, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import MeeshoLogo from '../../assets/Meesho.png'
import Steps from './Steps'
import { useLocation, useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { modifyCartItem } from '../../redux/cartReducer/action'
import { GrDeliver } from "react-icons/gr";
import PlaceOrderbtn from './PlaceOrderbtn'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const { cartItem } = useSelector((store) => {
        return {
            cartItem: store.cartReducer.cartItem
        }
    }, shallowEqual)
    const navigate = useNavigate()
    const [price, setPrice] = useState(0)
    const [activeItem, setActiveItem] = useState({})
    const [selectedSize, setSelectedSize] = useState()
    const [flag, setFlag] = useState(false)
    const [removeItem, setRemoveItem] = useState({})
    const [steps, setSteps] = useState(0)
    const location = useLocation()
    // const [cartItems,setcartItems]=useState([])
    const dispatch = useDispatch()
    //Drawer variables
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    //----------------
    //modal variables:
    const [openModel, setOpenModel] = useState(false)
    const [closeModel, setCloseModel] = useState(true)
    //----------------
    useEffect(() => {
        // setcartItems(cartItem)
    }, [cartItem, flag])
    useEffect(() => {
        let total = 0;
        cartItem?.forEach((item) => {
            total += item.price * item.quantity;
        })
        setPrice(total)
    }, [cartItem, flag])

    const handleEditItem = (item) => {
        setActiveItem(item)
        setSelectedSize(item.selectedSize)
        onOpen()
    }

    const handleQty = (number) => {
        if (activeItem.quantity <= 1 && number == -1) {
            handleRemove(activeItem)
        } else {
            setActiveItem({ ...activeItem, quantity: activeItem.quantity + number })
        }
    }
    const handleContinue = (item) => {
        let allItems = cartItem;
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i]._id == item._id) {
                allItems[i] = item;
            }
        }
        dispatch(modifyCartItem(allItems))
        setFlag(!flag)
        onClose()
    }

    const handleRemove = (item) => {
        setRemoveItem(item)
        setOpenModel(true)
        setCloseModel(false)
    }
    const finalRemove = (item) => {
        const allItems = cartItem.filter((product) => {
            return item._id !== product._id;
        })
        dispatch(modifyCartItem(allItems))
        setFlag(!flag)
        setOpenModel(false)
        setCloseModel(true)
        onClose()

    }
    const handlecontinueClick = () => {
        setSteps(1)
        navigate("/cart/address")
    }


    return (
        <div style={{ marginTop: "0px", paddingTop: "0px" }}>
            <Flex className='cartHeader' w={"100%"} position={"fixed"} top={0}
                borderBottom={"2px solid #cacaca"} pb={"20px"} bg={"#ffffff"} pt={"5px"}
                mt={"0px"} zIndex={2}
                display={location.pathname == "/cart/summery" ? "none" : "flex"}
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
            {
                cartItem?.length == 0
                    ?
                    <EmptyCart />
                    :
                    <Flex className='cart' w={"60%"} m={"auto"}>
                        <Box borderRight={"2px solid #c7c7c7"} pr={"20px"} w={"65%"}>
                            <Flex display={location.pathname == "/cart/summery" ? "none" : "flex"}>
                                <Text fontWeight={500} fontSize={"18px"}
                                    borderRight={"1px solid #b0b0b0"}
                                    pr={"10px"}
                                >Cart</Text>
                                <Text fontWeight={500} fontSize={"18px"}
                                    pl={"10px"} color={"#909090"}
                                >{cartItem?.length} Item</Text>
                            </Flex>
                            <br />
                            {
                                cartItem?.map((el, i) => {
                                    return <Box key={i} border={"1px solid #d1d1d1"} mb="10px" borderRadius={"5px"}>
                                        <Box pt={"10px"} pr={"20px"} pl={"20px"} pb={"10px"}
                                            borderBottom={"1px solid #808080"}
                                            display={location.pathname == "/cart/summery" ? "block" : "none"}
                                        >
                                            <Flex alignItems={"center"} gap={"10px"}>
                                                <GrDeliver size={"20px"} />
                                                <Text fontSize={"16px"} fontWeight={500}>Estimated Delivery by Wednesday, 18th Oct</Text>
                                            </Flex>
                                        </Box>
                                        <Flex gap={"20px"} p={"20px"}>
                                            <Box className='imageBox' w={"10%"}>
                                                <Flex w={"57px"} h={"57px"} border={"1px solid #9f9f9f"} justifyContent={"center"}
                                                    p={"2px"} borderRadius={"2px"}
                                                    alignItems={"center"}>
                                                    <Image src={el.image1} w={"56px"} h={"56px"} />
                                                </Flex>
                                            </Box>
                                            <Box className='detailBox' w={"85%"}>
                                                <Text noOfLines={1} fontWeight={500}
                                                    fontSize={"16px"}
                                                >{el.name}</Text>
                                                <Text fontSize={"16px"}>
                                                    ₹{el.price}
                                                </Text>
                                                <Flex fontSize={"16px"} gap={"15px"} alignItems={"center"}>
                                                    <Text>Size: {el.selectedSize}</Text>
                                                    <Text w={"4px"} h={"4px"}
                                                        borderRadius={"50%"}
                                                        bgColor={"#a1a1a1"}></Text>
                                                    <Text>Qty: {el.quantity}</Text>
                                                </Flex>
                                                <Flex gap={"5px"} mt={"15px"} alignItems={"center"} fontWeight={500}
                                                    _hover={{ cursor: "pointer" }}
                                                    onClick={() => handleRemove(el)}
                                                    display={location.pathname == "/cart/summery" ? "none" : "flex"}
                                                >
                                                    <RxCross2 />
                                                    <Text>REMOVE</Text>
                                                </Flex>
                                            </Box>
                                            <Box className='editBox' textAlign={"right"}
                                                display={location.pathname == "/cart/summery" ? "none" : "block"}>
                                                <Text fontWeight={500} color={"#a000d6"}
                                                    _hover={{ cursor: "pointer" }}
                                                    onClick={() => handleEditItem(el)}
                                                >Edit</Text>
                                            </Box>
                                        </Flex>
                                        <Box borderBottom={"1px solid #9c9c9c"}></Box>
                                        <Flex p={"10px"} color={"#5a5a5a"} justifyContent={"space-between"}>
                                            <Text>Sold by : Meesho</Text>
                                            <Text>Free Delivery</Text>
                                        </Flex>
                                    </Box>

                                })
                            }
                        </Box>
                        {
                            location.pathname == "/cart/summery"
                                ?
                                <Box Box className='priceDetails' pt={"10px"} pl={"20px"} w={"35%"}>
                                    <PlaceOrderbtn />
                                </Box>
                                :
                                <Box className='priceDetails' pt={"10px"} pl={"20px"} w={"35%"}>
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
                                    <Box className='continuebtn'>
                                        <Text fontSize={"12px"} textAlign={"center"} color={"#5e5e5e"} mb={"10px"}
                                        >Clicking on ‘Continue’ will not deduct any money</Text>
                                        <Button width={'full'} fontSize={"18px"} bgColor={"#9F2089"}
                                            color={"white"} _hover={{ bgColor: "#9F2089" }}
                                            onClick={handlecontinueClick}
                                        >Continue</Button>
                                        <br />
                                        <Image src='https://images.meesho.com/images/marketing/1588578650850.webp' />
                                    </Box>
                                </Box>
                        }
                    </Flex>
            }
            <br />
            <br />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'md'}
            >
                <DrawerOverlay style={{
                    background: '#353543c3',
                }} />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Edit Item</DrawerHeader>
                    <hr />
                    <DrawerBody>
                        <Flex gap={"15px"}>
                            <Box className='imageBox' w={"15%"}>
                                <Image src={activeItem.image1} w={"56px"} h={"56px"} />
                            </Box>
                            <Box className='detailBox' w={"85%"}>
                                <Text noOfLines={1} fontWeight={500}
                                    fontSize={"16px"}
                                >{activeItem.name}</Text>
                                <Text fontSize={"16px"}>
                                    ₹{activeItem.price}
                                </Text>
                                <Flex mt={"5px"} justifyContent={"space-between"}>
                                    <Flex alignItems={"center"} gap={"5px"}>
                                        <Text>Size</Text>
                                        <Select value={selectedSize} onChange={(e) => {
                                            setSelectedSize(e.target.value)
                                            setActiveItem({ ...activeItem, selectedSize: e.target.value })
                                        }} size={'sm'} fontWeight={500} bgColor={"#f2f2f2"}
                                        >
                                            {activeItem?.size?.map((s, i) => (
                                                <option key={i} value={s}>{s}</option>
                                            ))}
                                        </Select>
                                    </Flex>
                                    <Flex alignItems={"center"} gap={"5px"}>
                                        <Text>Qty</Text>
                                        <InputGroup size='sm'>
                                            <InputLeftAddon fontWeight={500} children='-' _hover={{ cursor: "pointer" }}
                                                onClick={() => handleQty(-1)}
                                            />
                                            <Flex pr={"15px"} pl={"15px"} alignItems={"center"}
                                                fontWeight={500}
                                            >{activeItem.quantity}</Flex>
                                            <InputRightAddon fontWeight={500} children='+' _hover={{ cursor: "pointer" }}
                                                onClick={() => handleQty(1)} />
                                        </InputGroup>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                        <br />
                        <Box border={"1px solid #cdcdcd"} w={"112%"} ml={"-25px"}
                        ></Box>
                        <Flex fontSize={"18px"} fontWeight={500} mt={"13px"} justifyContent={"space-between"}>
                            <Text>Total Price</Text>
                            <Text>₹{activeItem.price * activeItem.quantity}</Text>
                        </Flex>
                        <Box border={"1px solid #cdcdcd"} mt={"13px"} w={"112%"} ml={"-25px"}
                            mb={"13px"}
                        ></Box>
                        <Button width={'full'} fontSize={"18px"} bgColor={"#9F2089"}
                            color={"white"} _hover={{ bgColor: "#9F2089" }}
                            onClick={() => handleContinue(activeItem)}
                        >Continue</Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Remove item modal */}

            <Modal isOpen={openModel} onClose={closeModel}>
                <ModalOverlay />
                <ModalContent pt={"20px"}>
                    <ModalHeader>Remove product from cart</ModalHeader>
                    <ModalCloseButton onClick={() => {
                        setOpenModel(false)
                        setCloseModel(true)
                    }} />
                    <ModalBody mt={"-10px"} pt={"0px"}>
                        <Text fontSize={"18px"} fontWeight={500} color={"#616173"}
                        >Are you sure you want to remove {removeItem.name}</Text>
                        <Text fontSize={"18px"} fontWeight={500} color={"#616173"}
                        >(Size: {removeItem.selectedSize})</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Flex fontSize={"16px"} fontWeight={500} color={"#9F2089"} gap={"20px"}>
                            <Text _hover={{ cursor: "pointer" }} onClick={() => {
                                setOpenModel(false)
                                setCloseModel(true)
                            }}>
                                CANCEL
                            </Text>
                            <Text _hover={{ cursor: "pointer" }} onClick={() => finalRemove(removeItem)}>
                                REMOVE
                            </Text>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )
}

export default Cart

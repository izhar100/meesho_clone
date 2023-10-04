import React, { useEffect, useState } from 'react'
import MeeshoLogo from '../assets/Meesho.png'
import { Avatar, Box, Button, Divider, Flex, Image, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { useNavigate, useSearchParams } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { getProduct } from '../redux/productReducer/action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
    const {isAuth,user,token}=useSelector((store)=>{
        return {
            isAuth:store.authReducer.isAuth,
            user:store.authReducer.user,
            token:store.authReducer.token
        }
    },shallowEqual)
    const { cartItem } = useSelector((store) => {
        return {
            cartItem: store.cartReducer.cartItem
        }
    }, shallowEqual)
    const [downloadColor, setDownloadColor] = useState('black')
    const [displayDownload, setDisplayDownload] = useState('none')
    const [displayProfile,setDisplayProfile]=useState('none')
    const [searchQuery,setSearchQuery]=useState("")
    const debouncedQuery=useDebounce(searchQuery,1000)
    const [searchParam,setSearchParam]=useSearchParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleMouseEnter = () => {
        setDisplayDownload('block')
        setDownloadColor('#a30092')
    }
    const handleMouseLeave = () => {
        setDownloadColor('#000000')
        setDisplayDownload('none')
    }
    const handleProfileShow=()=>{
        setDisplayProfile('block')
    }
    const handleProfileHide=()=>{
        setDisplayProfile('none')
    }
    const handleSearchQuery=(e)=>{
        setSearchQuery(e.target.value)
    }
    useEffect(()=>{
        if(searchQuery){
            let params={
                q:searchQuery
            }
            setSearchParam(params)
        }
    },[searchQuery])

    useEffect(()=>{
        
        dispatch(getProduct(debouncedQuery))
    },[debouncedQuery])

    const handleLogOut=()=>{
        localStorage.setItem("user",JSON.stringify({}))
        localStorage.setItem("token","")
        window.location.reload()
    }
    
    return (
        <Box>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex gap={"30px"} w={"50%"}>
                    <Image src={MeeshoLogo} w={"160px"} alt='MeeshoLogo'
                    onClick={()=>navigate("/")}
                     />
                    <InputGroup border={"2px solid #a1a1a1"} borderRadius={"5px"}>
                        <InputLeftAddon children={<CiSearch color='#808080' size={25} />} bgColor={"white"} border={"none"} />
                        <Input
                        value={searchQuery}
                        onChange={handleSearchQuery} 
                         border={"none"} placeholder='Try Shirt, Shoe or Search by Product Code' />
                    </InputGroup>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Flex gap={"5px"} alignItems={"center"} borderRight={"2px solid #9c9c9c"} p={"8px"} pr={"25px"} pl={"25px"} position={'relative'}
                        // _hover={handleHover}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <HiOutlineDevicePhoneMobile size={22} color={downloadColor} />
                        <Text color={downloadColor}>Download App</Text>
                        <Box position={'absolute'} w={"120%"}
                            top={"62px"} left={"-20px"}
                            p={"15px"}
                            boxShadow={' rgba(0, 0, 0, 0.16) 0px 1px 4px'}
                            borderBottomRadius={'10px'}
                            backgroundColor={'#ffffff'}
                            display={displayDownload}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Text as={"b"} fontFamily={'revert'}>Download From</Text>
                            <br />
                            <Image src='https://images.meesho.com/images/pow/playstore-icon-big.png' pt={"10px"} />
                            <br />
                            <Image src='https://images.meesho.com/images/pow/appstore-icon-big.png' pb={"5px"} />
                        </Box>
                        <Box position={'absolute'}
                            w={"130px"}
                            h={"2px"}
                            backgroundColor={'#a30092'}
                            top={"60px"}
                            right={"28px"}
                            display={displayDownload}
                        >
                        </Box>
                    </Flex>
                    <Flex alignItems={"center"} borderRight={"2px solid #9c9c9c"} p={"8px"} pr={"25px"} pl={"25px"}>
                        <Text>Become a Supplier</Text>
                    </Flex>
                    <Flex p={"8px"} pr={"205x"} pl={"25px"}>
                        <Flex gap={"25px"}>
                            <Box position={'relative'}
                            onMouseEnter={handleProfileShow}
                            >
                                <Flex justifyContent={"center"}>
                                    <HiOutlineUser size={22} />
                                </Flex>
                                <Text textAlign={"center"}>
                                    Profile
                                </Text>
                                <Box position={'absolute'} w={"500%"}
                                    top={"64px"} right={"-85px"}
                                    p={"15px"}
                                    boxShadow={' rgba(0, 0, 0, 0.16) 0px 1px 4px'}
                                    borderBottomRadius={'10px'}
                                    backgroundColor={'#ffffff'}
                                    display={displayProfile}
                                    fontFamily={'sans-serif'}
                                    onMouseLeave={handleProfileHide}
                                >
                                    <Flex alignItems={"center"} gap={"5px"}>
                                      <Flex alignItems={"center"} display={token?"flex":"none"}>
                                      <Avatar bg='#d2d2d2' />
                                      </Flex>
                                      <Box>
                                        <Text as={"b"} >Hello User</Text>
                                        <Text fontSize={"12px"}>{user?.phone?user.phone:"To access your meesho account"}</Text>
                                      </Box>
                                    </Flex>
                                    <Button mt={'15px'} mb={'15px'} w={'full'}
                                     onClick={()=>navigate('/signin')}
                                     display={token?"none":"inline"}
                                     colorScheme='pink'>Sign Up</Button>
                                    <hr style={{border:"1px solid #cbcbcb"}}/>
                                    
                                    <Flex mt={'15px'} mb={"15px"} alignItems={"center"} gap={"15px"} _hover={{cursor:"pointer"}}>
                                     <SlBag size={"14px"}/>
                                     <Text as={'b'}>My Orders</Text>
                                    </Flex>
                                    <hr style={{
                                        border:"1px solid #cbcbcb",
                                        display:`${token?"block":"none"}`
                                        }}/>
                                    <Flex mt={'15px'} alignItems={"center"} gap={"15px"}
                                    display={token?"flex":"none"}
                                    _hover={{cursor:"pointer"}} onClick={handleLogOut}>
                                     <IoLogOutOutline size={"20px"}/>
                                     <Text as={'b'}>Logout</Text>
                                    </Flex>
                                </Box>
                                <Box position={'absolute'}
                                    w={"60px"}
                                    h={"2px"}
                                    backgroundColor={'#a30092'}
                                    top={"62px"}
                                    right={"-8px"}
                                    display={displayProfile}
                                >
                                </Box>
                            </Box>
                            <Box _hover={{cursor:"pointer"}} onClick={()=>navigate("/cart")} position={"relative"}>
                                <Text position={"absolute"}
                                 color={"#9F2089"}
                                 bgColor={"#fee0ff"}
                                 borderRadius={"50%"} pr={"5px"} pl={"5px"}
                                 fontSize={"10px"} fontWeight={500} textAlign={"center"}
                                 right={"-4px"} top={"-5px"}
                                 display={cartItem?.length==0?"none":"block"}
                                >{cartItem?.length}</Text>
                                <Flex justifyContent={"center"}>
                                    <BsCart2 size={22} />
                                </Flex>
                                <Text textAlign={"center"}>
                                    Cart
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header

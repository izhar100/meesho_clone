import { Box, Button, Flex, Image, Input, Select, Spacer, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import Steps from './Steps'
import MeeshoLogo from '../../assets/Meesho.png'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addAddress } from '../../redux/orderReducer/action'
import { useNavigate } from 'react-router-dom'
import PriceDetails from './PriceDetails'

const Address = () => {
    const {user,cartItem}=useSelector((store)=>{
        return {
            user:store.authReducer.user,
            cartItem:store.cartReducer.cartItem
        }
    },shallowEqual)
    const [steps, setSteps] = useState(1)
    const [box,setBox]=useState("")
    const [name,setName]=useState("")
    const [contactNo,setcontactNo]=useState("")
    const [house,setHouse]=useState("")
    const [road,setRoad]=useState("")
    const [pincode,setPincode]=useState("")
    const [city,setCity]=useState("")
    const [state,setState]=useState("")
    const [nearby,setNearby]=useState("")
    const toast=useToast()
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleContinue=()=>{
       if(!name || !contactNo || !house || !road || !pincode || !city || !state) {
         toast({
            title: 'Please fill all details',
            status: 'warning',
            duration: 3000,
            position: 'top'
         })
        }else{
            const deliveryAddress={
                name,contactNo:"+91"+contactNo,house,road,pincode,city,state,nearby
            }
            const order={
                user,
                cartItem,
                deliveryAddress
            }
            dispatch(addAddress(order))
            setSteps(2)
            navigate("/cart/payment")
        }
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
        <Flex w={"60%"} m={"auto"}>
            <Box mt={"10px"} pr={"20px"} w={"65%"}
                borderRight={"2px solid #c6c6c6"}>
                <Text fontWeight={500} fontSize={"18px"}>
                    Add Delivery Address
                </Text>
                <Box mt={"10px"} mb={"10px"} border={"1px solid #c1c1c1"}></Box>
                <Flex fontWeight={500} fontSize={"20px"} alignItems={"center"} gap={"10px"}>
                    <BsTelephone />
                    <Text>
                        Contact Details
                    </Text>
                </Flex>
                <br />
                <Box borderBottom={box=="name"?"2px solid #9F2089":"1px solid #b3b3b3"} pb={"5px"}>
                    <Text fontSize={"13px"} color={"#9F2089"} display={box=="name"?"block":"none"}>Name</Text>
                    <Input variant='unstyled' placeholder={box=="name"?"":"Name"} onClick={()=>{
                        setBox("name")
                    }}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </Box>
                <br />
                <br />
                <Box borderBottom={box=="contact"?"2px solid #9F2089":"1px solid #b3b3b3"} pb={"5px"}>
                <Text fontSize={"13px"} color={"#9F2089"} display={box=="contact"?"block":"none"}>Contact Number</Text>
                    <Input variant='unstyled' onClick={()=>setBox("contact")} placeholder={box=="contact"?"":"Contact Number"} 
                    value={contactNo}
                    onChange={(e)=>setcontactNo(e.target.value)}/>
                </Box>
                <br />
                <br />
                <Flex fontWeight={500} fontSize={"20px"} alignItems={"center"} gap={"10px"}>
                    <CiLocationOn />
                    <Text>
                        Address
                    </Text>
                </Flex>
                <br />
                <Box borderBottom={box=="address"?"2px solid #9F2089":"1px solid #b3b3b3"} pb={"5px"}>
                <Text fontSize={"13px"} color={"#9F2089"} display={box=="address"?"block":"none"}>House no./ Building Name</Text>
                    <Input onClick={()=>setBox("address")} variant='unstyled' 
                    placeholder={box=="address"?"":"House no./ Building Name"}
                    value={house}
                    onChange={(e)=>setHouse(e.target.value)}/>
                </Box>
                <br />
                <br />
                <Box borderBottom={box=="area"?"2px solid #9F2089":"1px solid #b3b3b3"} pb={"5px"}>
                <Text fontSize={"13px"} color={"#9F2089"} display={box=="area"?"block":"none"}>Road Name / Area / Colony</Text>
                    <Input onClick={()=>setBox("area")} variant='unstyled' 
                    placeholder={box=="area"?"":'Road Name / Area / Colony'}
                    value={road}
                    onChange={(e)=>setRoad(e.target.value)}/>
                </Box>
                <br />
                <br />
                <Box borderBottom={box=="pin"?"2px solid #9F2089":"1px solid #b3b3b3"}  pb={"5px"}>
                <Text fontSize={"13px"} color={"#9F2089"} display={box=="pin"?"block":"none"}>Pincode</Text>
                    <Input onClick={()=>setBox("pin")} variant='unstyled' 
                    placeholder={box=="pin"?"":'Pincode'} 
                    value={pincode}
                    onChange={(e)=>setPincode(e.target.value)}/>
                </Box>
                <br />
                <br />
                <Flex justifyContent={"space-between"}>
                    <Box borderBottom={box=="city"?"2px solid #9F2089":"1px solid #b3b3b3"} pb={"5px"} w={"45%"}>
                     <Text fontSize={"13px"} color={"#9F2089"} display={box=="city"?"block":"none"}>City</Text>
                        <Input onClick={()=>setBox("city")} variant='unstyled' 
                        placeholder={box=="city"?"":'City'} 
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}/>
                    </Box>
                    <Box borderBottom={box=="state"?"2px solid #9F2089":"1px solid #b3b3b3"} pb={"5px"} w={"45%"}>
                     <Text fontSize={"13px"} color={"#9F2089"} display={box=="state"?"block":"none"}>State</Text>
                        <Select onClick={()=>{
                            setBox("state")
                        }} variant='unstyled' placeholder={box=="state"?"state":"State"} color={box=="state"?"black":"#b3b3b3"}
                        value={state}
                        onChange={(e)=>setState(e.target.value)}
                        >
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </Select>

                    </Box>
                </Flex>
                <br />
                <br />
                <Box borderBottom={box=="nearby"?"2px solid #9F2089":"1px solid #b3b3b3"} pb={"5px"}>
                <Text fontSize={"13px"} color={"#9F2089"} display={box=="nearby"?"block":"none"}>Nearby Famous Place/Shop/School,etc.(optional)</Text>
                    <Input onClick={()=>setBox("nearby")} variant='unstyled' placeholder={box=="nearby"?"":'Nearby Famous Place/Shop/School,etc.(optional)'} 
                    value={nearby}
                    onChange={(e)=>setNearby(e.target.value)}
                    />
                </Box>
                <br />
                <Button mt={"10px"} width={'full'} fontSize={"18px"} bgColor={"#9F2089"}
                    color={"white"} _hover={{ bgColor: "#9F2089" }}
                    onClick={handleContinue}
                >Save Address and Continue</Button>
                <br />
            </Box>
            <Box w={"35%"}>
                <PriceDetails/>
            </Box>
        </Flex>
            <br />

        </div>
    )
}

export default Address

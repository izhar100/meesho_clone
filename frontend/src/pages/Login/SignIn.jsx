import { Box, Button, Flex, FormControl, HStack, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useToast, Spinner } from '@chakra-ui/react'
import { auth } from './firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import axios from 'axios'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { LOGIN_ERROR, LOGIN_REQ, LOGIN_SUCCESS } from '../../redux/authReducer/actionType'
import { useLocation, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const { isAuth, user, token } = useSelector((store) => {
        return {
            isAuth: store.authReducer.isAuth,
            user: store.authReducer.user,
            token: store.authReducer.token
        }
    },shallowEqual)
    const [flag, setFlag] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [otpFlag, setOtpFlag] = useState(true)
    const [hasFilled, setHasFilled] = useState(false);
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState("")
    const [num, setNum] = useState("")
    const toast = useToast()
    const dispatch = useDispatch()
    const location=useLocation()
    const navigate=useNavigate()

    useEffect(() => {
        console.log("authReducer data:", isAuth, token, user)
    }, [])
    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
                console.log(response)
            }
        });
    }

    const handleInputClick = () => {
        setFlag(true)
    }
    const handleContinue = () => {
        if (num.length !== 10) {
            setFlag2(true)
        } else {
            setHasFilled(true);
            const number = `+91${num}`
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, number, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                }).catch((error) => {
                    // Error; SMS not sent
                    console.log(error);
                });
        }
    }

    const verifyOtp = () => {

        if (otp.length === 6) {
            // verifu otp
            setLoading(true)
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                let user = result.user;
                console.log(user.phoneNumber);
                dispatch({ type: LOGIN_REQ })
                axios.post("https://meesho-8lem.onrender.com/user/signin", { phone: user.phoneNumber }).then((res) => {
                    dispatch({ type: LOGIN_SUCCESS, payload: res.data })
                    setLoading(false)
                    toast({
                        title: 'Login Success',
                        status: 'success',
                        duration: 3000,
                        position: 'top'
                    })
                    if(location.state==null){
                        navigate("/")
                    }else{
                        navigate(location.state)
                    }
                }).catch((err) => {
                    dispatch({ type: LOGIN_ERROR })
                    console.log(err)
                    toast({
                        title: 'Something went wrong',
                        status: 'error',
                        duration: 3000,
                        position: 'top'
                    })
                })
                setLoading(false)
                setOtpFlag(true)
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                setLoading(false)
                setOtpFlag(false)
            });
        } else {
            setOtpFlag(false)
        }
    }

    return (
        <>
            <Box bgColor={"#ffe9fd"} p={"50px"} h={"100vh"}>
                {
                    !hasFilled
                        ?
                        <Box w={"31%"} m={"auto"} borderRadius={"10px"}
                            bgColor={"#ffffff"}
                        >
                            <Image src="https://images.meesho.com/images/marketing/1661417516766.webp"
                                w={"100%"} borderTopRadius={"10px"}
                            />
                            <Box p={"40px"}>
                                <Heading fontWeight={650}
                                    fontSize={"20px"}
                                >Sign Up to view your profile</Heading>
                                <br />
                                <Flex mt={"10px"} gap={"15px"}>
                                    <Box borderBottom={"2px solid #bababa"}
                                        pr={"20px"}
                                    >
                                        <Text fontWeight={600}
                                            color={"#858585"}
                                            fontSize={"12px"}
                                            mb={"10px"}
                                        >Country</Text>
                                        <Text
                                            fontSize={"16px"}
                                            fontWeight={600}
                                        >
                                            IN +91
                                        </Text>
                                    </Box>
                                    <Box
                                        w={"76%"}
                                        position={"relative"}
                                    >
                                        <Text
                                            color={flag2 ? "red" : "#9e00ad"}
                                            fontSize={"12px"}
                                            display={flag ? "block" : "none"}
                                        >Phone Number</Text>
                                        <Input variant='flushed' placeholder={flag ? "" : "Phone Number"}
                                            borderBottom={`1px solid ${flag2 ? "#ff0000" : flag ? "#9e00ad" : "#c3c3c3"}`}
                                            mt={flag ? "" : "15px"}
                                            onClick={handleInputClick}
                                            value={num}
                                            onChange={(e) => setNum(e.target.value)}
                                        />
                                        <Text
                                            fontSize={"12px"}
                                            position={"absolute"}
                                            fontWeight={500}
                                            display={flag2 ? "block" : "none"}
                                            color="red"
                                        >Enter a valid phone number</Text>
                                    </Box>
                                </Flex>
                                <br />
                                <Button w={"full"}
                                    bgColor={"#a800ae"}
                                    _hover={{ bgColor: "#a800ae" }}
                                    color={"white"}
                                    onClick={handleContinue}
                                >Continue</Button>
                            </Box>
                        </Box>
                        :
                        <Box w={"31%"} m={"auto"} borderRadius={"10px"}
                            bgColor={"#ffffff"}
                        >
                            <Image src="https://images.meesho.com/images/marketing/1661417516766.webp"
                                w={"100%"} borderTopRadius={"10px"}
                            />
                            <Box p={"40px"}>
                                <Heading fontWeight={650}
                                    fontSize={"20px"}
                                >Enter OTP sent to {num}</Heading>
                                <Text mt={"10px"}
                                    fontSize={"16px"}
                                    fontWeight={700}
                                    color={"#a800ae"}
                                    onClick={() => setHasFilled(false)}
                                    _hover={{ cursor: "pointer" }}
                                >CHANGE NUMBER</Text>
                                <br />
                                <br />
                                <br />
                                <FormControl>
                                    <HStack
                                        justifyContent={"center"}
                                    >
                                        <PinInput
                                            variant={"unstyled"}
                                            isRequired
                                            size={"xl"}
                                            placeholder=''
                                            onChange={(e) => {
                                                setOtp(e)
                                            }}
                                            otp>
                                            <PinInputField
                                                borderRadius={"none"}
                                                border={"none"}
                                                borderBottom={"2px solid #b400c4"}
                                            />
                                            <PinInputField
                                                borderRadius={"none"}
                                                border={"none"}
                                                borderBottom={"2px solid #b400c4"}
                                            />
                                            <PinInputField
                                                borderRadius={"none"}
                                                border={"none"}
                                                borderBottom={"2px solid #b400c4"}
                                            />
                                            <PinInputField
                                                borderRadius={"none"}
                                                border={"none"}
                                                borderBottom={"2px solid #b400c4"}
                                            />
                                            <PinInputField
                                                borderRadius={"none"}
                                                border={"none"}
                                                borderBottom={"2px solid #b400c4"}
                                            />
                                            <PinInputField
                                                borderRadius={"none"}
                                                border={"none"}
                                                borderBottom={"2px solid #b400c4"}
                                            />
                                        </PinInput>
                                    </HStack>
                                    <Text mt={"10px"}
                                        fontSize={"12px"}
                                        fontWeight={700}
                                        color={"red"}
                                        display={!otpFlag ? "block" : "none"}
                                    >Please enter correct OTP</Text>
                                    <br />
                                    <br />
                                    <Button w={"full"}
                                        onClick={verifyOtp}
                                        bgColor={"#a800ae"}
                                        _hover={{ bgColor: "#a800ae" }}
                                        color={"white"}
                                    >{
                                            loading
                                                ?
                                                <Spinner
                                                    thickness='4px'
                                                    speed='0.65s'
                                                    emptyColor='gray.200'
                                                    color='pink.500'
                                                    size='lg'
                                                />
                                                :
                                                "Verify"
                                        }</Button>
                                </FormControl>
                                <br />
                            </Box>
                        </Box>
                }
            </Box>
            <div id="recaptcha"></div>
        </>
    )
}

export default SignIn

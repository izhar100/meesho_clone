import { CheckCircleIcon } from '@chakra-ui/icons'
import { AbsoluteCenter, Box, Button, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Categories = () => {
    return (
        <div>
            <Box>
                <Box position='relative' padding='10' pl={'0'}>
                    <Divider color={"#a800a5"} border={"0.01em solid #a800a5"} />
                    <AbsoluteCenter bg='white' px='5'>
                        <Heading color={'#464646'}>Top Categories to choose from</Heading>
                    </AbsoluteCenter>
                </Box>
                <br />
                <Flex bgColor={'#ebebeb'} p={'20px'} gap={'20px'} pt={"100px"} pl={"30px"} pb={'40px'}
                    background={'linear-gradient(0deg, rgba(200,200,200,1) 33%, rgba(255,196,154,1) 100%)'}
                    borderRadius={'5px'}
                >
                    <Box>
                        <Image src='https://images.meesho.com/images/marketing/1678691686252_400.webp' w={'422px'} />
                    </Box>
                    <Box>
                        <Heading textAlign={'center'} pt={'30px'} fontSize={'50px'}>Be fashion forward</Heading>
                        <Flex gap={'20px'} pt={"50px"}>
                            <Box>
                                <Image src='https://images.meesho.com/images/marketing/1678691699680_300.webp' w={'325px'} />
                            </Box>
                            <Box>
                                <Image src='https://images.meesho.com/images/marketing/1678691712594_300.webp' w={'325px'} />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <br />
                <br />
                <Box
                    backgroundImage={'url("https://images.meesho.com/images/marketing/1678691743015_1200.webp")'}
                    backgroundSize={'100% 100%'}
                    h={'546px'}
                    borderRadius={'5px'}
                >
                    <Flex p={"60px"} gap={'130px'}>
                        <Flex w={'25%'} justifyContent={'center'} position={'relative'}>
                            <Image src='https://images.meesho.com/images/marketing/1686635315750_200.webp' position={'absolute'} top={195}/>
                        </Flex>
                        <Flex>
                            <Box>
                                <Box p={"10px"}>
                                 <Image src='https://images.meesho.com/images/marketing/1678691846068_200.webp'/>
                                </Box>
                                <Flex justifyContent={'center'}>
                                <Image src='https://images.meesho.com/images/marketing/1678691858580_150.webp'/>
                                </Flex>
                            </Box>
                            <Box>
                                <Box p={"10px"}>
                                 <Image src='https://images.meesho.com/images/marketing/1678691832099_200.webp'/>
                                </Box>
                                <Flex justifyContent={'center'}>
                                <Image src='https://images.meesho.com/images/marketing/1678691818629_150.webp' w={'160px'} h={'55px'}/>
                                </Flex>
                            </Box>
                            <Box>
                                <Box p={"10px"}>
                                 <Image src='https://images.meesho.com/images/marketing/1678691796046_200.webp'/>
                                </Box>
                                <Flex justifyContent={'center'}>
                                <Image src='https://images.meesho.com/images/marketing/1678691781261_150.webp'/>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>

                </Box>
                <br />
                <br />
                <Box
                    backgroundImage={'url("https://images.meesho.com/images/marketing/1678691892265_1200.webp")'}
                    backgroundSize={'100% 100%'}
                    h={'546px'}
                    borderRadius={'5px'}
                >
                    <Flex p={"60px"} gap={'130px'}>
                        <Flex w={'25%'} justifyContent={'center'} position={'relative'}>
                            <Image src='https://images.meesho.com/images/marketing/1686635315750_200.webp' position={'absolute'} top={195}/>
                        </Flex>
                        <Flex>
                            <Box>
                                <Box p={"10px"}>
                                 <Image src='https://images.meesho.com/images/marketing/1678691960553_200.webp'/>
                                </Box>
                                <Flex justifyContent={'center'}>
                                <Image src='https://images.meesho.com/images/marketing/1678691971903_150.webp'/>
                                </Flex>
                            </Box>
                            <Box>
                                <Box p={"10px"}>
                                 <Image src='https://images.meesho.com/images/marketing/1678691936892_200.webp'/>
                                </Box>
                                <Flex justifyContent={'center'}>
                                <Image src='https://images.meesho.com/images/marketing/1678691948963_150.webp'/>
                                </Flex>
                            </Box>
                            <Box>
                                <Box p={"10px"}>
                                 <Image src='https://images.meesho.com/images/marketing/1678691925419_200.webp'/>
                                </Box>
                                <Flex justifyContent={'center'}>
                                <Image src='https://images.meesho.com/images/marketing/1678691914513_150.webp'/>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>

                </Box>
                <br />
                <br />
                <Box
                backgroundImage={'url("https://images.meesho.com/images/pow/downloadBannerDesktop_1050.webp")'}
                backgroundSize={'100% 100%'}
                h={'546px'}
                borderRadius={'5px'}
                >
                    <Flex justifyContent={'right'} p={'50px'}>
                        <Box>
                            <Text fontSize={'xx-large'} textAlign={'right'}
                            color={'#0093ee'}
                            >Become a Reseller and</Text>
                            <Heading textAlign={'right'}
                            color={'#9b00a3'}
                            fontSize={'xxx-large'}
                            >Start your Online Business
                            </Heading>
                            <Heading textAlign={'right'}
                            color={'#9b00a3'}
                            fontSize={'xxx-large'}
                            >with Zero Investment
                            </Heading>
                            <br />
                            <br />
                            <Flex gap={'12px'} justifyContent={'right'}>
                               <Box w={'180px'} h={'48px'} borderRadius={"4px"} p={'6px'} pl={'25px'} pr={'25px'} bgColor={'#000000'}>
                               <Image src='https://images.meesho.com/images/pow/playstoreIcon_500.webp' borderRadius={"4px"}/>
                               </Box> 
                               <Box w={'180px'} h={'48px'} borderRadius={"4px"} p={'6px'} pl={'25px'} pr={'25px'} bgColor={'#000000'}>
                               <Image src='https://images.meesho.com/images/pow/appstoreIcon_500.webp' borderRadius={"4px"}/>
                               </Box>
                            </Flex>
                        </Box>
                    </Flex>

                </Box>
                <br />
                <br />
                <Box
                backgroundImage={'url("https://images.meesho.com/images/pow/supplyBannerDesktop_1106.webp")'}
                backgroundSize={'100%'}
                h={'290px'}
                borderRadius={'5px'}
                >
                    <Box pt={'40px'} pl={'60px'} color={"white"}>
                        <Heading>
                        Register as a Meesho Supplier
                        </Heading>
                        <Text fontSize={'18px'} mt={'20px'}>
                        Sell your products to crores of customers at 0% commission
                        </Text>
                        <br />
                        <Flex gap={"25px"}>
                            <Flex alignItems={'center'} gap={'5px'} borderRight={'1px solid white'} pr={'25px'}>
                              <CheckCircleIcon color={'#3abd64'} boxSize={'22px'}/>
                              <Text as={'b'}>Grow your business 10x</Text>  
                            </Flex>
                            <Flex alignItems={'center'} gap={'5px'} borderRight={'1px solid white'} pr={'25px'}>
                              <CheckCircleIcon color={'#3abd64'} boxSize={'22px'}/>
                              <Text as={'b'}>Enjoy 100% Profit</Text>  
                            </Flex>
                            <Flex alignItems={'center'} gap={'5px'} pr={'25px'}>
                              <CheckCircleIcon color={'#3abd64'} boxSize={'22px'}/>
                              <Text as={'b'}>Sell all over India</Text>  
                            </Flex>
                        </Flex>
                        <br />
                        <Button color={'#8500ae'} fontSize={'20px'}>Sign up now</Button>
                    </Box>  
                </Box>
                <br />
                <br />
            </Box>
        </div>
    )
}

export default Categories

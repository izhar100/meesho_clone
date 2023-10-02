import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Box bgColor={"#F8F8FF"}
                p={"20px"}
                pt={"50px"}>
                <Flex w={"90%"} m={"auto"} gap={"20px"}>
                    <Box w={"32%"}>

                        <Heading
                            fontSize={"30px"}
                            fontWeight={500}
                        >
                            Shop Non-Stop on Meesho
                        </Heading>
                        <Text
                            fontSize={"20px"}
                            color={"#787878"}
                        >Trusted by more than 1 Crore Indians
                            Cash on Delivery | Free Delivery
                        </Text>
                        <br />
                        <Flex gap={"20px"}>
                            <Image src='https://images.meesho.com/images/pow/playstore-icon-big_400.webp' w={"47%"} h={"50px"} />
                            <Image src='https://images.meesho.com/images/pow/appstore-icon-big_400.webp' w={"47%"} h={"50px"} />
                        </Flex>

                    </Box>
                    <Flex w={"32%"} gap={"25px"}>
                        <Box color={"#727272"}
                            fontSize={"18px"}
                            fontWeight={500}
                        >
                            <Text mb={"10px"}>
                                Careers
                            </Text>
                            <Text mb={"10px"}>
                                Become a supplier
                            </Text>
                            <Text mb={"10px"}>
                                Hall of Fame
                            </Text>
                            <Text mb={"10px"}>
                                Sitemap
                            </Text>
                        </Box>
                        <Box color={"#727272"}
                            fontSize={"18px"}
                            fontWeight={500}
                        >
                            <Text mb={"10px"}>
                                Legal and Policies
                            </Text>
                            <Text mb={"10px"}>
                                Meesho Tech Blog
                            </Text>
                            <Text mb={"10px"}>
                                Notices and Returns
                            </Text>
                        </Box>
                    </Flex>
                    <Flex w={"32%"} gap={"20px"}>
                        <Box color={"#373737"}
                            fontSize={"20px"}
                            fontWeight={600}
                            w={"50%"}
                        >
                            <Text>Reach out to us</Text>
                            <Flex
                                gap={"10px"}
                                pt={"10px"}

                            >
                                <Image src='https://images.meesho.com/images/pow/facebook.png' />
                                <Image src='https://images.meesho.com/images/pow/instagram.png' />
                                <Image src='https://images.meesho.com/images/pow/youtube.png' />
                                <Image src='https://images.meesho.com/images/pow/linkedin.png' />
                                <Image src='https://images.meesho.com/images/pow/twitter.png' />
                            </Flex>
                        </Box>
                        <Box color={"#727272"}
                            fontSize={"20px"}
                            fontWeight={500}
                            w={"50%"}
                        >
                            <Text color={"#383838"}>Contact Us</Text>
                            <Text fontSize={"12px"} fontWeight={400} mt={"10px"}>
                                Fashnear Technologies Private Limited,
                                CIN: U74900KA2015PTC082263
                                06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
                                E-mail address: query@meesho.com
                                © 2015-2023 Meesho.com
                            </Text>
                        </Box>
                    </Flex>

                </Flex>

            </Box>
        </div>
    )
}

export default Footer

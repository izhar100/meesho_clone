import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <Box w={"90%"} m={"auto"}>
                <Flex justifyContent={"space-between"}>
                    <Text>
                        Woman Ethnic
                    </Text>
                    <Text>
                        Woman Western
                    </Text>
                    <Text>
                        Men
                    </Text>
                    <Text>
                        Kids
                    </Text>
                    <Text>
                        Home & Kitchen
                    </Text>
                    <Text>
                        Beauty & Health
                    </Text>
                    <Text>
                        Jewellery & Accessories
                    </Text>
                    <Text>
                        Bags & Footwear
                    </Text>
                    <Text>
                        Electronics
                    </Text>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar

import { Box, Flex, Heading, Progress, Text } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Ratings = () => {
    return (
        <div>
            <Box p={"20px"} border={"1px solid #e4e4e4"} borderRadius={"5px"}>
                <Text fontSize={"20px"}
                    fontWeight={"bold"}
                >Product Ratings</Text>
                <br />
                <Flex alignItems={"center"} gap={"20px"}>
                    <Box w={"20%"}>
                        <Flex alignItems={"center"} gap={'5px'} color={"#038D63"}>
                            <Heading fontSize={"48px"}>4.5</Heading>
                            <FaStar size={"19px"} />
                        </Flex>
                        <Text fontSize={"13px"}
                            fontWeight={500}
                            color={"#8B8BA3"}
                        >20 Ratings</Text>
                    </Box>
                    <Box w={"80%"}>
                        <Flex w={"100%"} alignItems={"center"} gap={"5px"} fontSize={"12px"}
                            fontWeight={500}>
                            <Box w={"15%"}>
                                <Text>Excellent</Text>
                            </Box>
                            <Box w={"70%"}>
                                <Progress colorScheme='green' size='sm' value={70} borderRadius={"2px"} />
                            </Box>
                            <Box w={"10%"}>
                                <Text color={"#5e5e5e"}>14</Text>
                            </Box>
                        </Flex>
                        <br />
                        <Flex w={"100%"} alignItems={"center"} gap={"5px"} fontSize={"12px"}
                            fontWeight={500}>
                            <Box w={"15%"}>
                                <Text>Very Good</Text>
                            </Box>
                            <Box w={"70%"}>
                                <Progress colorScheme='green' size='sm' value={20} borderRadius={"2px"} />
                            </Box>
                            <Box w={"10%"}>
                                <Text color={"#5e5e5e"}>2</Text>
                            </Box>
                        </Flex>
                        <br />
                        <Flex w={"100%"} alignItems={"center"} gap={"5px"} fontSize={"12px"}
                            fontWeight={500}>
                            <Box w={"15%"}>
                                <Text>Good</Text>
                            </Box>
                            <Box w={"70%"}>
                                <Progress colorScheme='yellow' size='sm' value={10} borderRadius={"2px"} />
                            </Box>
                            <Box w={"10%"}>
                                <Text color={"#5e5e5e"}>1</Text>
                            </Box>
                        </Flex>
                        <br />
                        <Flex w={"100%"} alignItems={"center"} gap={"5px"} fontSize={"12px"}
                            fontWeight={500}>
                            <Box w={"15%"}>
                                <Text>Average</Text>
                            </Box>
                            <Box w={"70%"}>
                                <Progress colorScheme='orange' size='sm' value={20} borderRadius={"2px"} />
                            </Box>
                            <Box w={"10%"}>
                                <Text color={"#5e5e5e"}>2</Text>
                            </Box>
                        </Flex>
                        <br />
                        <Flex w={"100%"} alignItems={"center"} gap={"5px"} fontSize={"12px"}
                            fontWeight={500}>
                            <Box w={"15%"}>
                                <Text>Average</Text>
                            </Box>
                            <Box w={"70%"}>
                                <Progress colorScheme='red' size='sm' value={10} borderRadius={"2px"} />
                            </Box>
                            <Box w={"10%"}>
                                <Text color={"#5e5e5e"}>1</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Ratings

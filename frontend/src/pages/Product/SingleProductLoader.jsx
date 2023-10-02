import React from 'react'

import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const SingleProductLoader = () => {
    return (
        <div>
            <Flex gap={"20px"} w={"80%"} m={"auto"}>
                <Skeleton height='400px' w={"50%"} />
                <Box w="50%">
                  <Skeleton height='100px' />
                  <br />
                  <Skeleton height='20px' />
                  <br />
                  <Skeleton height='20px' />
                  <br />
                  <Skeleton height='20px' />
                </Box>
            </Flex>
        </div>
    )
}

export default SingleProductLoader

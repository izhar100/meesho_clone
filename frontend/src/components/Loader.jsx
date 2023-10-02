import { Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import { Skeleton } from '@chakra-ui/react'

const Loader = () => {
    const items = new Array(20).fill(1)
    console.log("inside loader")
    return (
        <div>
            <Grid gridTemplateColumns={"repeat(4,1fr)"} gap={"20px"} borderRadius={"10px"}>
                {items.map((ind, item) => {
                    return (
                        <GridItem key={ind+item}>
                            <Stack>
                                <Skeleton height='200px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                            </Stack>
                        </GridItem>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Loader

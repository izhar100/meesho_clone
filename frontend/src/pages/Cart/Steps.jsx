import React from 'react'
import {
    Box,
    Flex,
    Stack,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Text,
    useSteps,
} from '@chakra-ui/react'
const steps = [
    { description: 'Cart' },
    { description: 'Address' },
    { description: 'Payment' },
    { description: 'Summery' },
]

function Steps({ind=0}) {
    // const { activeStep, setActiveStep } = useSteps({
    //     index: ind,
    //     count: steps.length,
    // })

    return (
        <Stack w={"100%"}>
            <Stepper w={"70%"} m={"auto"} size='sm' index={ind} gap='0'>
                {steps.map((step, index) => (
                    <Step key={index} gap='0'>
                        <Box>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber fontWeight={500} color="#979797" />}
                                    active={<StepNumber fontWeight={500} color="#007bff"/>}
                                />
                            </StepIndicator>
                            <Text
                                position={"absolute"}
                                left={"-2"}
                                color={index<=ind?"black":"#979797"}
                                fontSize={"small"}
                            >{step.description}</Text>
                        </Box>
                        <StepSeparator _horizontal={{ ml: '0' }} />
                    </Step>
                ))}
            </Stepper>
        </Stack>
    )
}

export default Steps

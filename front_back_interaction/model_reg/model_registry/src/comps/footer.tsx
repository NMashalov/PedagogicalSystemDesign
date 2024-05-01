import { HStack, Text } from '@chakra-ui/react'
import Box from '../assets/box.svg'
import { useItemsStore } from '../store'


export function Footer(){

    const {countModels} =useItemsStore()

    return (
        <HStack>
            <img src={Box}/>
            <Text>
                {countModels()}
            </Text>
        </HStack>
    )
}
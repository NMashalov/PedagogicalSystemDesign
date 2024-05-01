import {Flex, Spacer, StackDivider, VStack,Text, Box} from "@chakra-ui/react";
import { useState } from "react";


function ContextMenu(){
    return (
        <VStack
            className="message menu" 
            divider={<StackDivider borderColor='gray.200' />}
        >
            <Text>Delete</Text>
            <Text>Reaction</Text>
        </VStack>
    )
}

interface MessageProps{
    id: number,
    text: string
}

export function Message(props: MessageProps){
    const [msg]= useState(props.text)
    const [showMenu,setShowMenu] = useState(false)
    return (
        <Flex className='message row'>
            <Spacer/>
            <Box className='message' w='40%' h='10' onContextMenu={() => setShowMenu(true)}>
                <Text>{msg}</Text>
                {showMenu && <ContextMenu/>}
            </Box>
        </Flex>
    )
}
import { Box, Text, Center} from "@chakra-ui/react"

export const Footer = () => {

    return (
        <Box h='200px' w='100%' bgGradient='linear(to-t, blue.100, white)'>
            <Center>
                <Text fontSize='3xl'>Список информации</Text>
            </Center>
        </Box>
    )
}
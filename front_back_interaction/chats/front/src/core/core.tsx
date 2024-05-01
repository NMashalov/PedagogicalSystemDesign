import {VStack,StackDivider, ChakraProvider, ColorModeScript, CSSReset} from '@chakra-ui/react';
import { Outlet } from 'react-router';
import { Footer } from './footer';
import { Header } from './header/header';
import { Box } from '@chakra-ui/react'
import {theme} from './theme'


function CoreLayout(){
    return(
    <VStack 
        divider={<StackDivider borderColor='gray.200' />}
    >
        <Header/>
        <Box minH='1200px'>
            <Outlet />
        </Box>
        <Footer/>
    </VStack> 
    )
}


export const Core = () => {


    return (
        <ChakraProvider theme={theme}>
            <CSSReset/>
            <CoreLayout/>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </ChakraProvider>
    )
}
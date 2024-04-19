import {VStack,StackDivider} from '@chakra-ui/react';
import { Outlet } from 'react-router';
import { Footer } from './footer';
import { Header } from './header/header';
import { Box } from '@chakra-ui/react'




export const Core = () => {


    return (
        <>
            <VStack 
                divider={<StackDivider borderColor='gray.200' />}
            >
                <Header/>
                <Box minH='1200px'>
                    <Outlet />
                </Box>
                <Footer/>
            </VStack>              
        </>
    )
}
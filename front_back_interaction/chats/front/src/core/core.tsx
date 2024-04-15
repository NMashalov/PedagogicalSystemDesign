import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import { Footer } from './footer';
import { Header } from './header';




export const Core = () => {


    return (
        <Box>
            <Header/>
            <Outlet />
            <Footer/>
        </Box>
    )
}
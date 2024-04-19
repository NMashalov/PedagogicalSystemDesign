import {Text, Box}  from '@chakra-ui/react';
import { Outlet } from 'react-router';

export function GameCore(){
    return (
        <Box w='80%' paddingLeft='20%'>
            <Text fontSize='4xl'>Игры</Text>
            <Box h='100px'></Box>
            <Outlet />
        </Box>
    )
}
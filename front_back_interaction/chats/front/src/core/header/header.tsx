import { NavLink} from "../../comps/navlink";
import { useNavigate, useLocation } from "react-router";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { UserProfile } from "./profile";

import {
    Button,
    useColorMode,
    HStack,
    Text,
    StackDivider,
    Divider
  } from '@chakra-ui/react'

import logo from '../../assets/tree.svg'
import { useState } from "react";
import {navLinks} from './descr'
import { RouteNames} from "../../structs/routes";


const HeaderBlocks = () => {
    const {pathname}= useLocation()
    const [headerLinks] = useState<RouteNames>(navLinks)

    return (
        <HStack 
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            justifyContent='space-evenly'
        >
            {Object.entries(headerLinks).map(([title,params]) => (
                <NavLink 
                    route={title} 
                    key = {title} 
                    name={params.name} 
                    items={params.items}
                />
            ))}
        </HStack>
    )
}

const Logo = () => {
    const navigate = useNavigate()
    return (
        <HStack 
            onClick={() => navigate('/')}
        >
            <img width="40" height="40" src={logo}/>
            <Text fontSize='3xl'>Mathema</Text>
        </HStack>
    )
}


export const Header = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <HStack
            justifyContent={'space-evenly'}
            bgGradient='linear(to-b, blue.100, white)'
            borderRadius="5px"
            shadow='md' 
            borderWidth='1px'
            padding="20px"
            width="100%"
            divider={<StackDivider borderWidth='2px' borderColor='gray.200' />}
        >
            <Logo/> 
            <HeaderBlocks/>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ?  <MoonIcon/> : <SunIcon/> }
            </Button>
            <UserProfile/>
        </HStack>        
    )
}

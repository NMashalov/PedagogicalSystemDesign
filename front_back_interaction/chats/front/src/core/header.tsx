import { NavLink, INavLink } from "../comps/navlink";
import { useNavigate, useLocation } from "react-router";
import panda from '../assets/cards/panda.svg'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    HStack,
    useColorModeValue,
  } from '@chakra-ui/react'

import logo from '../assets/tree.svg'
import { useState } from "react";

const Links: Array<INavLink> = [
    {
        route: '/data',
        title: 'Банк задач'
    },
    {
        route: '/games',
        title: 'Игры'
    }
]


const HeaderBlocks = () => {
    const [headerLinks] = useState<Array<INavLink>>(Links)

    return (
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {headerLinks.map((params) => (
                <NavLink key = {params.title} {...params}/>
            ))}
        </HStack>
    )
}

const UserProfile = () => {
    return (
    <Menu>
        <MenuButton>
            <Avatar
                width="30" 
                height="30"
                src={panda }
            />
        </MenuButton>
        <MenuList alignItems={'center'}>
            <MenuItem>
                Настройки
            </MenuItem>
            <MenuItem>
                Настройки
            </MenuItem>
        </MenuList>
    </Menu>
)}




export const Header = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    const {pathname}= useLocation()

    const navigate = useNavigate()
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  border="2px dashed black">
            <Flex  as={'nav'} h={16} alignItems='center' justifyContent='space-between'>
                <Box onClick={() => navigate('/home')}>
                    <Text>Mathema</Text>
                    <img width="30" height="30" src={logo}/>
                </Box>
                <HeaderBlocks/>
                <Box as={'nav'} h={16} alignItems='center' justifyContent='space-between'>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ?  <MoonIcon/> : <SunIcon/> }
                    </Button>
                    <UserProfile/>
                </Box>
            </Flex>
        </Box>        
    )
}

import {Avatar, Menu,MenuButton, MenuList, MenuItem,  } from '@chakra-ui/react'
import panda from '../../assets/cards/panda.svg'


export const UserProfile = () => {
    return (
        <Menu>
            <MenuButton>
                <Avatar
                    width="50" 
                    height="50"
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

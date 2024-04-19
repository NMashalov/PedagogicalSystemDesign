import {Menu,MenuButton, MenuList, MenuItem, Text, Button, Center, VStack, HStack } from '@chakra-ui/react'
// import { useColorMode } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { INavLink,} from '../structs/routes'
import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import puzzle from '../assets/games/puzzle.svg'
  
interface NavLinkProps extends INavLink{
  route: string
}




export const NavLink = (props: NavLinkProps ) => {
    const navigate = useNavigate()
    const [dropdownList,setDrowdownList]= useState(props.items)

    useEffect(
        () => {
          setDrowdownList(props.items)
          console.log(props.items)
        },
        [props]
    )

    return (
      <Menu>
        <MenuButton
          as={Button}
          bg='white.100'
          _hover={{
              background: "white",
              color: "teal.500",
            }}
          rightIcon={<ChevronDownIcon />}
        >
          <HStack>
            <img src={puzzle} height='30px' width='30px'/>
            <Text fontSize='1xl'>{props.name}</Text>
          </HStack>
        </MenuButton>
        <MenuList>
          <VStack>
          {dropdownList.map(
              (elem) => 
                <MenuItem 
                  key={`${props.name}-${elem}`} 
                  onClick={()=>navigate(`/${props.route}/${elem}`)}
                >
                  <Center>
                    <Text fontSize='1xl'>{elem}</Text>
                  </Center>
                </MenuItem> 
          )}
          </VStack>
        </MenuList>
      </Menu>
    )
}
      



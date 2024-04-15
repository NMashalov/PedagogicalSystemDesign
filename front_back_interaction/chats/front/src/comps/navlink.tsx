import { Box, useColorModeValue } from '@chakra-ui/react'

import { useNavigate } from 'react-router'

export interface INavLink {
    route: string,
    title: string
}
  

export const NavLink = (props: INavLink) => {
    const navigate = useNavigate()

    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        onClick={() => navigate(props.route)}>
            {props.title}
      </Box>
    )
  }
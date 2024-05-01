import { HStack, Text,Link } from "@chakra-ui/react"


const LinkButton = ({children}) => {
  return <Link>
      <Text fontSize='2xl'>{children}</Text>
    </Link>
}

function References(){
  return (
    <HStack className="ref links">
    <LinkButton>
      Дашборд
    </LinkButton>
    <LinkButton>
      Документация
    </LinkButton>
  </HStack>
  )
}


export const Header = () => {
    return (
      <div className="header">
          <HStack>
            <Text fontSize='2xl'>Model Store</ Text>
            <References/>
          </HStack>
      </div>
    )
  }
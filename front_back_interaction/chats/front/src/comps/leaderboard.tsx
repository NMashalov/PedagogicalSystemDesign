import { TableContainer, Table, Tbody, Tr, Th, Thead, Td} from '@chakra-ui/react'

export interface ILeaderBoard{
    title: string,
}




export function LeaderBoard() {


    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
            <Thead>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
            </Thead>
        <Tbody>
            <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
            </Tr>
        </Tbody>
        </Table>
    </TableContainer>
    )
}
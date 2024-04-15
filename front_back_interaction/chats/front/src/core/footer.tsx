import { Grid, GridItem } from "@chakra-ui/react"
import { useNavigate } from "react-router"
export const Footer = () => {
    const navigate = useNavigate()
    return (
        <Grid
            gridTemplateRows={'50px 1fr 30px'}
        >
            <GridItem>
                Список информации
            </GridItem>
            <GridItem>
                <a onClick={() => navigate('/law')}>Правообладателям</a>
            </GridItem>
        </Grid>
    )
}
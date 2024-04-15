
import { Text, Box, SimpleGrid} from '@chakra-ui/react'
import { GameCard,  IGameCard} from "../../comps/card";
import { Difficulty, Media,GamesRoutes } from '../../structs/games';
import { Routes } from '../../structs/base';
import boat from "../assets/cards/boat.svg"
import hedgehog from "../assets/cards/hedgehog.svg"
import { useState } from 'react';
import panda from "../assets/cards/panda.svg"
// import penguins from "../assets/cards/penguins.svg"


const games : Array<IGameCard> = [
    {
        navigateLink: GamesRoutes.draw,
        image: boat,
        media: [Media.text],
        description:'Поправь решение до правильного' ,
        title: 'Угадай',
        difficulty: Difficulty.easy
    },
    {
        navigateLink: GamesRoutes.story,
        image: hedgehog,
        media: [Media.text],
        description: 'Поделись тем, что узнал на уроке' ,
        title: "Расскажи",
        difficulty: Difficulty.hard
    },
    {
        navigateLink: GamesRoutes.draw,
        image: panda,
        media: [Media.image, Media.text],
        description: 'Подпиши схему к задаче' ,
        title: "Нарисуй",
        difficulty: Difficulty.easy
    },
]


export function Intro(){

    const [gamesProps] = useState<Array<IGameCard>>(games)

    return (
        <Box>
            <Text fontSize='6xl' textAlign={'center'}>
                Игры  
            </Text>
            <Box justifyContent={'center'}>
                <SimpleGrid
                    spacing={20} 
                    templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
                >
                    {gamesProps.map((game) => <GameCard key={game.title} {...game}/>)}
                </SimpleGrid>
            </Box>
        </Box>
    )
}
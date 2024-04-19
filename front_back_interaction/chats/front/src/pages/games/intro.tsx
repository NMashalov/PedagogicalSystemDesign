import { useState } from 'react';
import { SimpleGrid} from '@chakra-ui/react'
import { GameCard} from "../../comps/card";
import {Games} from '../../structs/games';
import { games } from './descr';

// import penguins from "../assets/cards/penguins.svg"



export function Intro(){

    const [gamesProps] = useState<Games>(games)

    return (
        <SimpleGrid
            columns={2}
            spacing={10}
        >
            {
                Object.entries(gamesProps).map(
                    ([title,game]) => <GameCard title={title} key={title} {...game}/>
                )
            }
        </SimpleGrid>
    )
}
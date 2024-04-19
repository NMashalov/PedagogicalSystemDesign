import { RouteNames } from "../../structs/routes";
import { GameTitles } from "../../structs/games";



export const navLinks: RouteNames ={
    games: {
        name:'Игры',
        items: Object.values(GameTitles)
    },
    bank: {
        name:'Банк задач',
        items: [
            'Физика',
            "Математ"
        ]
    },
    law: {
        name: 'Справочник',
        items: []
    }
}
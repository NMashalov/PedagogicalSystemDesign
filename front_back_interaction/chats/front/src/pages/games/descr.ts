import boat from "../../assets/cards/boat.svg";
import hedgehog from "../../assets/cards/hedgehog.svg";
import penguins from "../../assets/cards/penguins.svg";
import { Difficulty, Media,Games} from '../../structs/games';
import panda from "../../assets/cards/panda.svg"


export const games : Games = {
    guess: {
        image: boat,
        name: 'Угадай',
        media: [Media.text],
        description:'Поправь решение до правильного' ,
        difficulty: Difficulty.easy
    },
    story: {
        image: hedgehog,
        name: 'Расскажи',
        media: [Media.text],
        description: 'Поделись тем, что узнал на уроке' ,
        difficulty: Difficulty.hard
    },
    draw: {
        image: panda,
        name: 'Нарисуй',
        media: [Media.image, Media.text],
        description: 'Подпиши схему к задаче' ,
        difficulty: Difficulty.easy
    },
    complete: {
        image: penguins,
        name: 'Заверши',
        media: [Media.image, Media.text],
        description: 'Подпиши схему к задаче' ,
        difficulty: Difficulty.easy
    }
}
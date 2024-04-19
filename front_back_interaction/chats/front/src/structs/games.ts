export enum GameTitles {
    guess='guess',
    story='story',
    draw='draw',
    complete='complete'
}


export enum Difficulty {
    easy = 'Просто',
    medium = 'Средне',
    hard = 'Сложно'
}


export enum Media {
    text = 'Текст',
    image = 'Картинки'
}

export interface IGameDescription {
    image: string;
    name: string;
    difficulty: Difficulty;
    media: Media[];
    description: string;
    hintText?: string;
}

export type Games = {
    [key in GameTitles] : IGameDescription
}



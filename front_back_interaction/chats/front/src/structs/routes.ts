export enum Routes {
    games='games',
    bank='bank',
    law='law',
    home='home'
}


export interface INavLink {
    name: string,
    items: string[]
}

export type RouteNames = {
    [name in Routes]: INavLink
}



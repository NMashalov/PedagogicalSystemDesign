export enum Routes  {
    home='home',
    panel='panel',
    event= "event",
    description="description",
    strategy="strategy",
    settings='settings',
    map="map"
}

export type RoutesNames = {
    [key in Routes]: {
        name: string,
        icon: JSX.Element
    }
}


export const mdStrategyFolder = "/strategy_md"



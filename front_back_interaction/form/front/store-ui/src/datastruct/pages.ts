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
    [key in Routes]: string
}


export const mdStrategyFolder = "/strategy_md"



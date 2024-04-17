import { SettingsGroup } from "./settings";

export enum StrategyTitle{
    export='export',
    filter='filter',
    form='form'
}


export interface IStrategy{
    title: StrategyTitle;
    brief: string;
}

export type StrategySettings = {
    [title in StrategyTitle] : SettingsGroup[]
}


export type StrategyShorts = {
    [title in StrategyTitle] : string
}

export enum StageStatus{
    yes,
    no
}

import {
    ActionFunctionArgs,
    ParamParseKey,
    Params,
} from "react-router-dom";
import { Routes } from "./pages";

export enum StrategyTitle{
     export='export',
}

export enum StrategyTag{
    export='start',
}

const PathNames = {
    mdName: `${Routes.strategy}/:mdName`,
} as const;

export interface LoadMd extends ActionFunctionArgs {
    params: Params<ParamParseKey<typeof PathNames.mdName>>;
}


export interface IStrategy{
    title: StrategyTitle;
    description: string;
    tag?: StrategyTag[];
    markdownUrl: string;
}

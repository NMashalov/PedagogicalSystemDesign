import {
    ActionFunctionArgs,
    ParamParseKey,
    Params,
} from "react-router-dom";
import { Routes, mdStrategyFolder } from "../../datastruct/pages";



const MdPathNames = {
    stratName: `${Routes.description}/:stratName`,
} as const;

export interface LoadMd extends ActionFunctionArgs {
    params: Params<ParamParseKey<typeof MdPathNames.stratName>>;
}

export const strategyMdLoader = ({params}: LoadMd) => {
    console.log(params.stratName)
    const mdText = fetch(`${mdStrategyFolder}/${params.stratName}.md`).
        then(data => data.text()).
        catch(e => console.log(e))
    return mdText
};


const SettingsPathNames = {
    stratName: `${Routes.settings}/:stratName`,
} as const;


export interface LoadSettings extends ActionFunctionArgs {
    params: Params<ParamParseKey<typeof SettingsPathNames.stratName>>;
}
export const strategySettingsLoader = ({params}:  LoadSettings) => {
    console.log(params.stratName)
    return params.stratName ?? ''
};



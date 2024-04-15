import {
    ActionFunctionArgs,
    ParamParseKey,
    Params,
} from "react-router-dom";


export interface IEvent{
    payload: object;
    created_dttm: string;
    score: number;
}

export interface JsonProp {
    value: string;
    [key: string]: string;
}


export interface IEventResponse {
    event: IEvent;
    appId: string;
    validated: boolean;
    response_dttm: string;
}

const PathNames = {
    appId: '/todos/:appId',
} as const;

export interface LoadEvents extends ActionFunctionArgs {
    params: Params<ParamParseKey<typeof PathNames.appId>>;
}





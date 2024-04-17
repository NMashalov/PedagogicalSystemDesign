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






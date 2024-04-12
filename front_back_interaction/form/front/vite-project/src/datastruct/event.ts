
export interface IEvent{
    payload: object;
    created_dttm: string;
    score: number;
}


export interface IEventResponse {
    event: IEvent;
    app_id: string;
    validated: boolean;
    response_dttm: string;
}
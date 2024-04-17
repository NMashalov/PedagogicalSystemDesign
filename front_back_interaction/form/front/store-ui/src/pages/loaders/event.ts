import {
    ActionFunctionArgs,
    ParamParseKey,
    Params,
    LoaderFunction
} from "react-router-dom";

const PathNames = {
    appId: '/todos/:appId',
} as const;

export interface LoadEvents extends ActionFunctionArgs {
    params: Params<ParamParseKey<typeof PathNames.appId>>;
}


export const eventLoader : LoaderFunction = ({params}: LoadEvents) => {
    console.log(params.appId)
    const raw_json = fetch(`http://127.0.0.1:8000/event/${params.appId}`).
        then(data => data.json()).
        catch(e => console.log(e))
    return {raw_json}
};


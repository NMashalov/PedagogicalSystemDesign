import { useState, useEffect } from 'react';
import JsonView from '@uiw/react-json-view';
import {
    LoaderFunction,
    useLoaderData,
  } from "react-router-dom";
import { LoadEvents } from '../datastruct/event';

export const eventLoader : LoaderFunction = ({params}: LoadEvents) => {
    console.log(params.appId)
    const raw_json = fetch(`http://127.0.0.1:8000/event/${params.appId}`).
        then(data => data.json()).
        catch(e => console.log(e))
    return {raw_json}
};


export const EventProfile = () => {

    const raw_json  = useLoaderData() as object;

    const [jsonData, setJsonData] = useState<object>({
        example: 5
    });

    // const [submitEvent, setSubmitEvent] = useState<Object>({
    //     example: 5
    // });
    useEffect(()=>{
            console.log(raw_json)
            setJsonData(raw_json)
        }
        ,[ raw_json]
    )

  return (
    <div>
        <JsonView value={jsonData} />
        <div>
            <button>Submit Event</button>
            <button>Trash</button>
        </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import JsonView from '@uiw/react-json-view';
import {
    useLoaderData,
  } from "react-router-dom";

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
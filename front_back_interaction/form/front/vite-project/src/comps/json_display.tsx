import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

import React, { useState, useEffect } from 'react';
import JsonView from '@uiw/react-json-view';


export interface JsonProp {
    value: string;
}

export const JsonExample = (props : JsonProp) => {
    const [jsonData, setJsonData] = useState<Object>({
        example: 5
    });

    // const [submitEvent, setSubmitEvent] = useState<Object>({
    //     example: 5
    // });



    useEffect(()=>{
        console.log(props.value)
        fetch(`http://127.0.0.1:8000/event/${props.value}`).
            then(async data => await data.json()).
            then(data => setJsonData(data.event.payload)).
            catch(e => console.log(e))

        // setJsonData({
        //     example: props.value
        // })
    }
    ,[props.value]
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
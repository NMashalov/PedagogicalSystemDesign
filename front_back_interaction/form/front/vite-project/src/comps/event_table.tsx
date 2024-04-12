import React, { useState, useEffect } from 'react';
import { IEvent, IEventResponse } from '../datastruct/event';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef } from 'ag-grid-community';


// Create new GridExample component
export const EventTable = () => {

  const [eventsTrigger,setEventsTrigger]=  useState(false)

  const [rowData, setRowData] = useState<IEventResponse[]>([
    {
      "app_id": "22ced5d2-a70b-42f4-b550-c8f8e376f919",
      "validated": true,
      "response_dttm": "2024-04-12T13:36:33.591412",
      "event": {
        "payload": {
          "study": 8727,
          "work": 3947,
          "perhaps": "QMyYIVjlpfEwYLHOoomp",
        },
        "score": 0.92,
        "created_dttm": "2024-04-12T13:36:33.587376"
      }
    },
  ])

  const [colDefs, setColDefs] = useState<ColDef<IEventResponse>[]>([
    { field: "app_id", editable: true},
    { field: "response_dttm" },
    { field: "validated" },
    //{ field: "event"},
  ]);
  

  useEffect(()=>{
      fetch(`http://127.0.0.1:8000/random_events`).
          then(async data => await data.json()).
          then(data => setRowData(data)).
          catch(e => console.log(e))
      setEventsTrigger(false)
    }
    ,[eventsTrigger]
  )
  
  // Column Definitions: Defines & controls grid columns.
  
  // Container: Defines the grid's theme & dimensions.
  return (
    <div className={"ag-theme-quartz"} style={{ width: '400px', height: "900px"}}>
      <AgGridReact 
        rowData={rowData}
        columnDefs={colDefs}
      />
      <button onClick={() => {setEventsTrigger(true)}}>
        New events
      </button>
    </div>
  );
}

// // Render GridExample
// const root = createRoot(document.getElementById("root")!);
// root.render(
// <GridExample />
// );
import React, { useState, useEffect } from 'react';
import {IEventResponse } from '../datastruct/event';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef } from 'ag-grid-community';

const event : Array<IEventResponse> = [
  {
    appId: "22ced5d2-a70b-42f4-b550-c8f8e376f919",
    validated: true,
    response_dttm: "2024-04-12T13:36:33.591412",
    event: {
      payload: {
        study: 8727,
        work: 3947,
        perhaps: "QMyYIVjlpfEwYLHOoomp",
      },
      score: 0.92,
      created_dttm: "2024-04-12T13:36:33.587376"
    }
  },
]


// Create new GridExample component
export const EventPanel = () => {

  const [eventsTrigger,setEventsTrigger]=  useState(false)

  const [rowData, setRowData] = useState<IEventResponse[]>(event)

  const [colDefs] = useState<ColDef<IEventResponse>[]>([
    { field: "appId", editable: true, headerTooltip: "Уникальный ключ в приложении. Позволяет получить доступ до события",},
    { field: "response_dttm", headerTooltip: "Время отправки события сервером",},
    { field: "validated", headerTooltip: "Время отправки события сервером", },
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
    <div className={"ag-theme-quartz"} style={{ width:'80%', height: "400px"}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        tooltipShowDelay={500}
      />
    </div>
  );
}

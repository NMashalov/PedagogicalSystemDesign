import { useState } from 'react'
import { EventTable } from './comps/event_table';
//import {GridExample} from './comps/example_table' 
import { JsonExample } from './comps/json_display';
import './App.css'
import "ag-grid-community/styles/ag-grid.css"; 

export function App() {
  const [appId, setAppId] = useState('')
  
  return (
    <>
      <h1>События</h1>
      <div className='rowC'>
        <EventTable/>
        <div>
          <input 
            value={appId} // ...force the input's value to match the state variable...
            onChange={e => {
              setAppId(e.target.value)
            }}
          />
          <JsonExample value={appId} />
        </div>
      </div>
    </>
  )
}


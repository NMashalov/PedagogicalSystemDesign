import React, { useState } from 'react';
import { IRow } from '../datastruct/example';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef } from 'ag-grid-community';

import { createRoot } from 'react-dom/client';

// Create new GridExample component
export const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);
  
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className={"ag-theme-quartz"} style={{ width: '400px', height: "900px"}}>
      <AgGridReact 
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
}

// // Render GridExample
// const root = createRoot(document.getElementById("root")!);
// root.render(
// <GridExample />
// );
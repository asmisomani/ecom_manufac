import React from "react";
import DataGridSym from "../../cards/DataGridSym"
import {columns,rows} from "../../staticData/DataGrid"

export default function ReturnOrders() {
  
  return (
    <div className="everypage">
    <DataGridSym columns={columns} rows={rows}/>
    </div>
  );
}

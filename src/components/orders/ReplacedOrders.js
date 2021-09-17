import React from 'react'
import AddANote from "../../cards/AddANote"
import DataGridSym from '../../cards/DataGridSym'
import ReturnOrders from "./ReturnOrders"
import {columns,rows } from "../../staticData/DataGrid"

export default function ReplacedOrders() {
    return (
        <div className="everypage">
            <AddANote note="Replacement Confirmed!"/><br/>
            <DataGridSym columns={columns} rows={rows}/>
        </div>
    )
}

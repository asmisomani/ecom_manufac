import { Paper } from '@material-ui/core'
import React from 'react'
import SummaryCards from "../../cards/SummaryCards"


export default function CancelledOrders() {
    return (
        <div className="everypage gap-3" >
          <Paper elevation={2}>
            <SummaryCards/>
        </Paper>
          <Paper elevation={2}>
            <SummaryCards/>
        </Paper>
          <Paper elevation={2}>
            <SummaryCards/>
        </Paper>
          <Paper elevation={2}>
            <SummaryCards/>
        </Paper>
          <Paper elevation={2}>
            <SummaryCards/>
        </Paper>
          <Paper elevation={2}>
            <SummaryCards/>
        </Paper>
        </div>
    )
}

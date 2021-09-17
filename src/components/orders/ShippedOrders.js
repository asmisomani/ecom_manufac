import { Card, Paper } from '@material-ui/core'
import React from 'react'
import SummaryCards from '../../cards/SummaryCards'

export default function ShippedOrders() {
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

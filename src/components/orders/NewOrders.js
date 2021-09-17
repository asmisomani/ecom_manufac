import React from 'react'
import {ORDERS} from "../../staticData/OrdersData"
import OrdersCards from '../../cards/OrdersCards'
import { useParams } from 'react-router-dom'


export default function NewOrders() {
    
    return (
        <div>
            <div className="everypage">
            {ORDERS.map((orders)=>{return (
                    <OrdersCards orders={orders} />
            )})}
        </div>
        </div>
    )
}

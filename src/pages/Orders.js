import React from 'react'
import OrdersCards from '../cards/OrdersCards'
import {ORDERS} from "../staticData/OrdersData"

export default function Orders(props) {
   
    
    return (
        <div style={{margin:"4rem 0px",display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"center"}}>
            {ORDERS.map((orders)=>{return (
                    <OrdersCards orders={orders} />
            )})}
        </div>
    )
}

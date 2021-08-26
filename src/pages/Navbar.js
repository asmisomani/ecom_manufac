import React from 'react'
import MainNav from "../components/MainNav"
import SecNav from '../components/SecNav'
import "../stylesheets/navbar.css"

export default function Navbar() {
    const SEC_NAV_DATA=[{title:"New",path:'/orders/neworders'},{title:"Confirmed",path:"/orders/confirmedorders"},{title:"Cancelled",path:"/orders/cancelledorders"},{title:"Shipped",path:"/orders/shippedorders"},{title:"Returned",path:"/orders/returnedorders"},{title:"Replaced",path:"/orders/replacedorders"},{title:"Failed",path:"/orders/failedorders"}]
    return (
        <div>
            <MainNav/>
            <SecNav data={SEC_NAV_DATA}/>
        </div>
    )
}

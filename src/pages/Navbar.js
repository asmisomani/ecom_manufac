import React from 'react'
import MainNav from "../components/nav/MainNav"
import SecNav from '../components/nav/SecNav'
import TertNav from '../components/nav/TertiaryNav'
import "../stylesheets/navbar.css"
import {SEC_NAV_DATA} from "../components/nav/SecNavData"

export default function Navbar() {
    
    return (
        <div>
            <MainNav/>
            <SecNav data={SEC_NAV_DATA}/>
            <TertNav/>
        </div>
    )
}

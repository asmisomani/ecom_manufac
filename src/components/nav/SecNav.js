import React from 'react'
import {NavLink} from "react-router-dom"

export default function SecNav(props) {
    return (
        <div className="secnav d-flex flex-row w-100" >
            {props.data.map((data)=>{return (
                <NavLink to={data.path} active>{data.title}</NavLink>
            )})}
        </div>
    )
}

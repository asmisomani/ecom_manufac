import React from 'react'
import {Link} from "react-router-dom"

export default function SecNav(props) {
    return (
        <div className="secnav d-flex flex-row w-100" >
            {props.data.map((data)=>{return (
                <Link to={data.path}>{data.title}</Link>
            )})}
        </div>
    )
}

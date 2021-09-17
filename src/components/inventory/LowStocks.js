import React from 'react'
import SmallCard from "../../cards/SmallCard"
import {BiTrendingUp} from "react-icons/bi"
import {AiOutlineEdit} from "react-icons/ai"

export default function LowStocks() {
    return (
        <div className="everypage gap-3">
            
            <SmallCard>
                <button className="button-filled sm">Stats <BiTrendingUp/></button>
                <button className="button-trans sm"><AiOutlineEdit/></button>
            </SmallCard>
    
            <SmallCard>
                <button className="button-filled ">Stats  <BiTrendingUp/></button>
            </SmallCard>
            
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
    
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
            
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
    
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
            
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
            <SmallCard>
                <button className="button-filled ">Stats</button>
            </SmallCard>
        </div>
    )
}

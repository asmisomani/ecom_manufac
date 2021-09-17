import React from "react";
import SetplanCards from "./Setplan_Cards";
import "../../stylesheets/Setplan.css"


const cardDetails = [
    {
      id: 1,
      heading:"7 Days Free",
      money: "₹0",
      color:{background:"white", color:"#175873"},  
    },
    {
        id: 2,
        heading:"Quarterly",
        money: "₹00",
      },
      {
        id: 2,
        heading:"Monthly",
        money: "₹000",
      },
      {
        id: 2,
        heading:"Yearly",
        money: "₹0000",
      }
];

function Card(cardDetail){
    return(
    <SetplanCards 
     id={cardDetail.id}
     theHeading={cardDetail.heading} 
     theMoney={cardDetail.money}
     Style={cardDetail.color} />
    );
}
function Setplan(){
    return( 
        <div className="set_plan_main_div">
        <div className="set_plan_cards_container">
        <span className="plan_heading">SELECT PLAN</span>
        {cardDetails.map(Card)}
        </div>
        </div>
    );}
    export default Setplan;

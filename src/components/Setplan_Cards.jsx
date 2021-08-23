import React from "react";
import {useHistory} from "react-router-dom";



function SetplanCards(props){

    const history = useHistory();
  function redirectHandler(){
    history.push("/Setplan_Paymentmethod")
  }
    return (
        
    <div className="plan_cards">
         <h1 className="setplancardheading">{props.theHeading}</h1>
         <h1 className="setplancardmoney">{props.theMoney}</h1>
         <button className="setplancardbutton" style={props.Style} type="submit" onClick={redirectHandler}>Select</button>
        </div>
    );}
export default SetplanCards;
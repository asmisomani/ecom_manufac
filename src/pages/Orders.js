import React from "react";
import NewOrders from "../components/orders/NewOrders";
import { Switch, Route, Redirect } from "react-router-dom";
import { SEC_NAV_DATA } from "../components/nav/SecNavData";
import ConfirmedOrders from "../components/orders/ConfirmedOrders";

export default function Orders(props) {
  return (
    <Switch>
        
      {SEC_NAV_DATA.map((data) => { return (
            <Route path={data.path}>{data.component}</Route>
      )})
      
      }
      
    
      
    </Switch> 
  );
}

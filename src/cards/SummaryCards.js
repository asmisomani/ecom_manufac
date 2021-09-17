import { Divider } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap"
import {ORDERS} from "../staticData/SummaryData"

export default function SummaryCards() {
    
    
  return (
      
    <div className="p-3">
      <Row>
        <h6 className="ui-grey capital">product summary</h6>
      </Row>
          <Row>
      <Col md={6}>
        <Row>
          <h5 className="ui-dark-grey uppercase w-auto">id:{ORDERS[0].order_id}</h5>
          <br />
          <p className="primary-1  "> Delivery by <span style={{fontWeight:500}}>{ORDERS[0].delivery_date}</span> </p>
        </Row>
        {ORDERS[0].products.map((product) => {
          return (
            <>
            <Row className="flex-row justify-content-between">
              <p className="ui-grey w-auto">{product.name}</p> <p className="ui-grey capital w-auto">${product.price}</p>
              
            </Row>
            <Divider/>
            </>
            
          );
        })}
        <Row className="flex-row justify-content-between">
            <p className="ui-dark-grey w-auto">Total</p> <p className="ui-dark-grey w-auto">${Number(ORDERS[0].products[0].price)+Number(ORDERS[0].products[1].price)}</p>
        </Row>
        <Row><p className="ui-black">{ORDERS[0].method}</p></Row>
      </Col>
      <Col md={6}>
        <Row>
            <p className="ui-grey capital">delivery partner</p>
        </Row>
        <Row>
            <p className="ui-dark-grey mb-0">Deliver to </p> 
            <p className="ui-grey">
                {ORDERS[0].customer_name} <br/>
                {ORDERS[0].customer_address}
            </p>
        </Row>
      </Col>
      </Row>
    </div>
  );
}

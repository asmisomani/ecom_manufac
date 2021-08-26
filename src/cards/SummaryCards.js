import { Divider } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function SummaryCards() {
    const orders=[
        {
            customer_name:"lorem",
            customer_address:`House 4 \t Ipsum Lane \t Cannaught Place  , New Delhi \t 498623`,
            order_id:"5877op34849", 
            delivery_date:"27 Sept '21",
            method:"Pre Paid",
            products:[{
                name:"T shirt",
                price:"799",
                brand:"Puma" 
            },
            {
                name:"Jeans",
                price:"1199",
                brand:"Levis" 
            }
            ]

        }
    ]
    
  return (
      
    <div>
      <Row>
        <h6 className="ui-grey capital">product summary</h6>
      </Row>
          <Row>
      <Col md={6}>
        <Row>
          <h5 className="ui-dark-grey uppercase w-auto">id:{orders[0].order_id}</h5>
          <br />
          <p className="primary-1  "> Delivery by <span style={{fontWeight:500}}>{orders[0].delivery_date}</span> </p>
        </Row>
        {orders[0].products.map((product) => {
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
            <p className="ui-dark-grey w-auto">Total</p> <p className="ui-dark-grey w-auto">${Number(orders[0].products[0].price)+Number(orders[0].products[1].price)}</p>
        </Row>
        <Row><p className="ui-black">{orders[0].method}</p></Row>
      </Col>
      <Col md={6}>
        <Row>
            <p className="ui-grey capital">delivery partner</p>
        </Row>
        <Row>
            <p className="ui-dark-grey mb-0">Deliver to </p> 
            <p className="ui-grey">
                {orders[0].customer_name} <br/>
                {orders[0].customer_address}
            </p>
        </Row>
      </Col>
      </Row>
    </div>
  );
}

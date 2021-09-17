import React, { useState } from "react";
import cancel from "../images/cancel.svg";
import confirm from "../images/confirm.svg"
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
  Image,
  Form
} from "react-bootstrap";
import { useHistory,Link } from "react-router-dom";
import SummaryCards from "./SummaryCards"

export default function OrdersCards(props) {
  const [modalShowCancelled, setModalShowCancelled] = useState(false);
  const [modalShowConfirmed, setModalShowConfirmed] = useState(false);
  const [input,setInput]=useState("")
  const history= useHistory()
  const styles = {
    backgroundColor: " var(--primary-2) !important",
    border: " var(--primary-2) !important",
    width: "inherit !important",
  };
  function redirectToCancelledOrders(){
   history.push("/orders/cancelledorders")
  }
  function redirectToConfirmedOrders(){
   history.push("/orders/confirmedorders")
  }
  function inputHandler(e){
    setInput(e.target.value)
  }
  return (
    <div className="con capital">
      <Row>
        <Col>
          <h6 className="ui-dark-grey">{props.orders.order_category}</h6>
        </Col>
        <Col>
          <p className="ui-dark-grey text-right">ID:{props.orders.order_id}</p>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <img
            src={props.orders.image}
            alt=""
            width="300px"
            heigh="300px !important"
          />
        </Col>
        <Col>
          <Row>
            <h4 className="ui-black">{props.orders.product_name}</h4>
          </Row>
          <Row>
            <p className="ui-dark-grey">{props.orders.brand}</p>
          </Row>
          <Row>
            <p className="ui-dark-grey">Quantity:{props.orders.quantity}</p>
          </Row>
          <Row>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="m-1 w-inherit"
                styles={styles}
              >
                Buyer Details
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Payment</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Payment Method</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Payment Status</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="m-1 w-inherit"
                styles={styles}
              >
                Payment Details
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Buyer Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Buyer Name</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Buyer Address</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="m-1 w-inherit"
                styles={styles}
              >
                Shipping
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Shipping Details
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delivery Type</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Shipping Carrier
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          style={{
            color: props.orders.popularity == "high" ? "green" : "yellow",
          }}
        >
          <h4>{props.orders.popularity}</h4>
        </Col>
        <Col className="d-flex flex-row gap-3">
          <button
            className="button-trans"
            width="200px"
            onClick={() => setModalShowCancelled(true)}
          >
            Cancel
          </button>
    
       
          <button className="button-filled" width="200px" onClick={() => setModalShowConfirmed(true)}>
            Confirm
          </button>
        </Col>
      </Row>
      {/* cancel */}
      <Modal
        size="md"
        show={modalShowCancelled}
        onHide={() => setModalShowCancelled(false)}
        className="cancel-modal mod"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton className="center flex-column">
          <Image src={cancel} fluid /> <br />
          <Modal.Title id="contained-modal-title-vcenter">
            Order Cancelled!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter the reason for cancellation</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={inputHandler}/>
              <Link className="align-self-end primary-1 border-bottom">Send</Link>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer className="center">
          <Button
            className="button-trans"
            onClick={() => setModalShowCancelled(false)}
            width="100%"
            onClick={redirectToCancelledOrders}
          >
            View Cancelled Orders
          </Button>
        </Modal.Footer>
      </Modal>
      {/* confirm */}
      <Modal
        size="lg"
        show={modalShowConfirmed}
        onHide={() => setModalShowConfirmed(false)}
        className="cancel-modal mod"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton className="center flex-column">
          <Image src={confirm} fluid /> <br />
          <Modal.Title id="contained-modal-title-vcenter">
            Order Confirmed!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <SummaryCards/>
        </Modal.Body>
        <Modal.Footer className="center">
          <Button
            className="button-trans"
            onClick={() => setModalShowConfirmed(false)}
            width="100%"
            onClick={redirectToConfirmedOrders}
          >
            View Confirmed Orders
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

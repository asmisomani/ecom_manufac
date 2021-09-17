import { FormGroup, Paper ,Snackbar} from "@material-ui/core";
import React ,{useState} from "react";
import Alert from '@material-ui/lab/Alert';
import { Form, Row,Col ,Card} from "react-bootstrap";

export default function AddANote(props) {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="p-3 mb-2 addnotecard">
      <Row>
        <h5 className="ui-black">Add product details</h5>
      </Row>
      <Row>
        <Col >
          <FormGroup>
            <Form.Label>Enter Order ID</Form.Label>
            <Form.Control type="text" placeholder="Order ID"></Form.Control>
          </FormGroup>
        </Col>
        <Col className="align-self-end" lg={3}>
            <button className="button-trans sm">Add from Returned Orders</button>
        </Col>
      </Row>
      <Row>
          <Col><FormGroup><Form.Label>Add a note here</Form.Label><Form.Control as="textarea" placeholder="Note"></Form.Control></FormGroup></Col>
          <Col className="align-self-end" lg={3}><button className="button-filled sm" onClick={handleClick}>Confirm</button></Col>
      </Row>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {props.note}
        </Alert>
        </Snackbar>
     
      
    </div>
  );
}

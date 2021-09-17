import {
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Col, Image, Row, Badge } from "react-bootstrap";
import { useState } from "react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function SmallCard(props) {
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const classes = useStyles();

  const handleChange1 = (event) => {
    setSize(event.target.value);
  };
  const handleChange2 = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <Paper elevation={2} className="p-3 smallcard">
      <Row>
        <Badge bg="secondary">Best Seller</Badge>
      </Row>
      <Row>
        <Image
          rounded
          src="https://images.unsplash.com/photo-1618354691551-44de113f0164?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
        />
      </Row>
      <Row className="mt-2">
        <Col>
          <span className="ui-black h3">Rs X</span>
          <span className="ui-grey">/Piece</span>
          <br />
          <h5 className="ui-black pt-1">Product Name</h5>
        </Col>
        <Col>
          <span className="ui-grey">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                onChange={handleChange1}
              >
                <MenuItem value={10}>S</MenuItem>
                <MenuItem value={20}>M</MenuItem>
                <MenuItem value={30}>L</MenuItem>
              </Select>
            </FormControl>
          </span>
          <br />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" >Qty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantity}
                onChange={handleChange2}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
    {props.children}

        </Col>
      </Row>
    </Paper>
  );
}

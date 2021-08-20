import React from "react";
import "../stylesheets/landing.css";
import Form from "react-bootstrap/Form";

import FloatingLabel from "react-bootstrap/FloatingLabel"
import Container from "react-bootstrap/Container"
import {useHistory} from "react-router-dom"


export default function Landing() {
  const history = useHistory();
  function redirectHandler(){
    history.push("/signup")
  }
  function loginHandler(){
    history.push("/setplan")
  }
  return (
    <div id="landing-bg">
      <div className="form-block">
        <h1 className="start-heading primary-1 ml-3 mr-3">welcome</h1>
        <Container fluid className="ml-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        </Container>
        <div><button className="button-filled mt-3 mb-3" onClick={loginHandler}>login</button>
        <p className="mt-3">Don't have an account?</p>
        <button className="button-trans" onClick={redirectHandler}>Sign Up</button>
        </div>
       
      </div>
      
    </div>
  );
}

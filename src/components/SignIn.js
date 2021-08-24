import React, { useState } from "react";
import "../stylesheets/landing.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Container from "react-bootstrap/Container"
import {useHistory} from "react-router-dom"
import ParticleBG from "../particle/ParticleBG";



export default function Landing() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory();
  function redirectHandler(){
    history.push("/signup")
  }
  function loginHandler(){
    history.push("/setplan")
  }
  function inputHandlerEmail(event){
    setEmail(event.target.value)
    
    console.log(event.target.value)
  }
  function inputHandlerPassword(event){
    setPassword(event.target.value)
  }
  
  return (
    <div id="landing-bg">
      <div className="form-block">
        <h1 className="start-heading primary-1 ml-3 mr-3">welcome</h1>
        <Container fluid className="ml-3">
        <Form method="post">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" name="email" onChange={inputHandlerEmail} value={email} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" onChange={inputHandlerPassword} value={password}/>
        </FloatingLabel>
        </Form>
        </Container>
        <div><button className="button-filled mt-3 mb-3" onClick={loginHandler}>login</button>
        <p className="mt-3">Don't have an account?</p>
        <button className="button-trans" onClick={redirectHandler}>Sign Up</button>
        </div>
       
      </div>
      
    </div>
   
  );
}

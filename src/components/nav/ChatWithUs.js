import React from 'react'
import { Divider } from "@material-ui/core";
import {Offcanvas} from "react-bootstrap";
import help from "../images/support.svg"
import {Link} from "react-router-dom";
import {useState} from "react"
import {Chatbot} from "react-chatbot-kit"
import ActionProvider from './Chat/ActionProvider';
import MessageParser from './Chat/MessageParser';
import config from './Chat/config';


export default function ChatWithUs(props) {
  console.log(props.offset)
  const [show, setShow] = useState(props.offset);
  console.log(show)
  // const handleClose = () => setShow(false);
  const handleClose = () => setShow(false);
  console.log(show)
  
    return (
        <div>
           
      <Offcanvas show={props.offset} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={help} height="300px"/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Chatbot config={config} MessageParser={MessageParser} ActionProvider={ActionProvider}/>
          <Link to="/meet" className="schedule_a_meet" >schedule a video call</Link>
        </Offcanvas.Body>
      </Offcanvas> 
        </div>
    )
}

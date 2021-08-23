import React from "react";
import { Carousel } from "react-bootstrap";
import "../stylesheets/userguide.css"
import startbuilding from "../images/start_building.svg"
import beginchat from "../images/begin_chat.svg"
import inprogress from "../images/Growing.svg"
import { useHistory } from "react-router-dom";


export default function UserGuide() {
  const history=useHistory()
  function redirectHandlerIn(){
    history.push('/setplan')
  }
  function redirectHandlerHome(){
    history.push("/home")
  }
  return (
    <div>
      <Carousel interval={null}>
        <Carousel.Item interval={null} autoPlay={false}>
          <img
            className="d-block vh-100 ml-auto"
            src={startbuilding}
            alt="First slide"
          />
          <button className="button-trans btn-prev" onClick={redirectHandlerIn}>Login from another account</button>
          <Carousel.Caption>
            <h3>Getting Started</h3>
            <p className="w-50">Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minus.</p>
          </Carousel.Caption>
          
        </Carousel.Item>
        
        <Carousel.Item interval={null} autoPlay={false}>
          <img
            className="d-block vh-100 float-right"
            src={inprogress}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Track your progress</h3>
            <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, accusantium.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null} autoPlay={false}>
          <img
            className="d-block vh-100 float-right"
            src={beginchat}
            alt="Third slide"
          />
          
          <Carousel.Caption>
            <h3>Chat with Us</h3>
            <p className="w-25">
              Praesent commodo cursus magna, vel Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, architecto? scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null} autoPlay={false}>
          <img
            className="d-block vh-100 float-right"
            src={beginchat}
            alt="Third slide"
          />
          
          <button className="button-filled btn-next" onClick={redirectHandlerHome}>Next</button>
          <Carousel.Caption>
            <h3>Video Tutorials</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

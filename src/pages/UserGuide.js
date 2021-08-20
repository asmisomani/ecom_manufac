import React from "react";
import { Carousel } from "react-bootstrap";
import "../stylesheets/userguide.css"
import startbuilding from "../images/start_building.svg"
import beginchat from "../images/begin_chat.svg"
import inprogress from "../images/Growing.svg"


export default function UserGuide() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block vh-100 ml-auto"
            src={startbuilding}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Getting Started</h3>
            <p className="w-50">Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minus.

            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
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
        <Carousel.Item interval={5000}>
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
      </Carousel>
    </div>
  );
}

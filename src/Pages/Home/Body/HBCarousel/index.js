import React from "react";
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuid } from 'uuid';
import "./styles.css";

const HBCarousel = () =>{
    const slides = [
        {
          key: uuid(),
          content: <img src="/img/carousel/001.png" alt="1" />
        },
        {
          key: uuid(),
          content: <img src="/img/carousel/001.png" alt="2" />
        },
        {
          key: uuid(),
          content: <img src="/img/carousel/001.png" alt="3" />
        }
      ];

    return (
        <div className="web-carousel position-relative">
            <div className="web-carousel-bg position-absolute top-0 left-0">
                <img className="web-carousel-bg-img h-100 w-100" src="/img/homebg1.png" />
            </div>
            <div className="carousel-container">
                <Carousel showNavigation={true} slides={slides} offsetRadius={1} />
            </div>
            <div className="carousel-logo-container w-100 position-absolute">
                <img className="carousel-logo-img w-100" src="/img/hmhomelogo.png" />
            </div>
        </div>
    )
}

export default HBCarousel;
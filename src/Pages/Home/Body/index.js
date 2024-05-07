import React from "react";
import "./styles.css";
import HBCarousel from "./HBCarousel";
import SlideShow from "./SlideShow";

const Body = () => {
    return (
        <div className="web-body">
            <HBCarousel />
            <SlideShow />
        </div>
    )
}

export default Body;
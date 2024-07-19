import React from "react";
import Header from "./Header";
import './styles.css';
import Body from "./Body";

const Article = () => {
    return (
        <div className="web-content">
            <Header />
            <Body />
        </div>
    )
}

export default Article;
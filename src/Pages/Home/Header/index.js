import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
    return (
        <div className="web-header">
            <div className="web-header-logo">
                <img className="web-header-logo-img" src="img/hblogo.svg" />
                <p className="web-header-logo-text">Network.</p>
            </div>
            <div className="web-header-menu">
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/project">Project.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/project">Article.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/project">Service.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/project">Shop.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/project">Support.</Link>
                </div>
                <div className="web-header-menu-item">
                    <Link className="web-header-menu-link" to="/project">About.</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
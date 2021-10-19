import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <NavLink to="/home">Go To The Home</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

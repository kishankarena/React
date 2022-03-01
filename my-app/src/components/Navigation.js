import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/MyBooks">MyBooks</NavLink></li>
                <li><NavLink to="/Favorites">Favorites</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navigation;
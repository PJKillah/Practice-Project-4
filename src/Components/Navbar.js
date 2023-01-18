import React from "react";
import World from '../Images/world.png'

export default function Nav() {
    return(
        <nav className="nav">
            <img className="nav--logo" src={World} alt="" />
            <h3 className="nav--header">my travel journal.</h3>
        </nav>
    )
}
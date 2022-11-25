import { logDOM } from "@testing-library/react";
import React from "react";
import MyImage from "./images/aibnb-logo.png"

export default function Navbar() {
    return(
        <nav>
            <img src={MyImage} className="nav--logo" alt="logo" />
        </nav>
    )
}
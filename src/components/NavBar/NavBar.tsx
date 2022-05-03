import React from "react";
import NBLogo from "../NBLogo/NBLogo";
import "./NavBar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <header>
                <div className="NavBar--wrapper">
                    <NBLogo />
                    <h2>React Course - Project 3</h2>
                </div>
            </header>
        );
    }
}

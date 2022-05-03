import React from "react";
import TrollIcon from "../TrollIcon/TrollIcon";
import "./NBLogo.css";

export default class NBLogo extends React.Component {
    render() {
        return (
            <div className="NBLogo--wrapper">
                <TrollIcon />
                <h1>Meme Generator</h1>
            </div>
        );
    }
}

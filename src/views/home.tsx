import React from "react";
import Generator from "../components/Generator/Generator";
import NavBar from "../components/NavBar/NavBar";

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home--wrapper">
                <NavBar />
                <Generator />
            </div>
        );
    }
}

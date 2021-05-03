import React, { Component } from "react";
import redGlass from "./redGlassesModel.png";
import manGlass from "./manGlassesModel.png";
import fadeGlass from "./fadeGlassesModel.png";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="openingimg">
        <img className="car-top open" src={manGlass}></img>
        <img className="dye-top open" src={redGlass}></img>
        <img className="shoes open" src={fadeGlass}></img>      </div>
    );
  }
}

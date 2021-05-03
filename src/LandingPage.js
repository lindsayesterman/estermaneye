import React, { Component } from "react";
import redGlasses from "./redGlassesModel.png";
import manGlasses from "./manGlassesModel.png";
import fadeGlasses from "./fadeGlassesModel.png";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="openingimg">
        <img className="car-top open" src={manGlasses} alt="man wearing glasses"></img>
        <img className="dye-top open" src={redGlasses} alt="women wearing red glasses"></img>
        <img className="shoes open" src={fadeGlasses} alt="women wearing glasses"></img>{" "}
      </div>
    );
  }
}

import React, { Component } from "react";
import glassesModel from "./glassesModel.png";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="openingimg">
        <img className="car-top open" alt="model wearing glasses" src={glassesModel}></img>
      </div>
    );
  }
}

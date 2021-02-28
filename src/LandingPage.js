import React, { Component } from "react";
import openingGlassesModel from "./openingGlassesModel.png";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="openingimg">
        <img className="car-top open" alt="model wearing glasses" src={openingGlassesModel}></img>
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";

export default class HeaderNav extends React.Component {

  render() {
    return (
      <div className="estermaneye">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h1> Esterman Eye Optical </h1>
        </Link>
      </div>
    );
  }
}

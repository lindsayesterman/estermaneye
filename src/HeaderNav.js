import React from "react";
import { Link } from "react-router-dom";

export default class HeaderNav extends React.Component {

  render() {
    return (
      <div className="lindsay">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h1> ESTERMAN EYE OPTICAL</h1>
        </Link>
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";

export default class HeaderNav extends React.Component {

  render() {
    return (
      <div className="lindsay">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h1> ESTERMAN EYE OPTICAL</h1>
        </Link>
        <form className="searchBar" onSubmit={(e) => this.props.handleSearch(e)}>
          <div className="bar">
            <input
              type="text"
              name="searched"
              id="searched"
              onChange={(e) => this.props.updateSearchHandle(e)}
              placeholder="Screentime Saver"
            ></input>
            <button className="sub" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

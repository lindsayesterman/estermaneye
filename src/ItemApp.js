import React, { Component } from "react";
import NavList from "./NavList.js";
import ItemList from "./ItemList.js";
import store from "./store.js";
import { Route } from "react-router-dom";
import ItemPage from "./ItemPage.js";
import { getItemsForNav } from "./Item-helpers";
import LandingPage from "./LandingPage.js";
import AddToCart from "./AddToCart";
import HeaderNav from "./HeaderNav";
import { getItemsForSearch } from "./Item-helpers.js";

const { navs, items } = store;

class ItemApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      navs,
      searched: "",
      sortedResults: [],
    };
  }

  updateSearchHandle = (e) => {
    this.setState({ searched: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const { searched } = this.state;
    let sortedResults = getItemsForSearch(this.state.items, searched);
    this.setState({ sortedResults });
    console.log(sortedResults);
    console.log(searched);
  };

  setItems = (items) => {
    this.setState({
      items,
      navs,
    });
  };

  render() {
    const { navs } = this.state;
    const items =
      this.state.items && this.state.sortedResults.length
        ? this.state.sortedResults
        : this.state.items;
    return (
      <div>
        {["/", "/nav/:navName"].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              const { navName } = routeProps.match.params;
              const ItemsForNav = getItemsForNav(items, navName);
              return (
                <>
                  <HeaderNav />
                  <form
                    className="searchBar"
                    onSubmit={(e) => this.handleSearch(e)}
                  >
                    <input
                      type="text"
                      id="searched"
                      onChange={(e) => this.updateSearchHandle(e)}
                    />
                    <button className="fa fa-search"></button>
                  </form>
                    <NavList {...routeProps} navs={navs} />
                  <LandingPage />
                  <div id="item-list">
                  <ItemList
                    {...routeProps}
                    items={ItemsForNav || this.state.sortedResults}
                  />
                  </div>
                </>
              );
            }}
          />
        ))}
        <Route
          path="/item/:itemId"
          render={(routeProps) => {
            return <ItemPage item={this.state.item} {...routeProps} />;
          }}
        />
        <Route
          path="/cart/:itemId"
          render={(routeProps) => {
            return <AddToCart item={this.state.item} {...routeProps} />;
          }}
        />
      </div>
    );
  }
}

export default ItemApp;

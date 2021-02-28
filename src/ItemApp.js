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

  handleSearch = (e) => {
    e.preventDefault();
    const { searched, sortedResults } = this.props;
    let test = getItemsForSearch(this.props.items, searched);
    this.setState({ sortedResults: test });
    console.log(sortedResults);
    console.log(searched);
  };

  updateSearchHandle = (e) => {
    this.setState({ searched: e.target.value });
  };

  setItems = (items) => {
    this.setState({
      items,
      navs,
    });
  };

  render() {
    const { items, navs } = this.state;
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
                  <HeaderNav
                    handleSearch={this.handleSearch}
                    updateSearchHandle={this.updateSearchHandle}
                  />
                  <NavList {...routeProps} navs={navs} />
                  <LandingPage />
                  <ItemList {...routeProps} items={ItemsForNav} />
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

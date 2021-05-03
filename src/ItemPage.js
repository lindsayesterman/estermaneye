import React from "react";
import store from "./store.js";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import ScrollToTop from "./ScrollToTop";

class ItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigURL: {},
      cartItem: [],
    };
  }

  handleAddToCart = () => {
    this.setState({
      item: this.props.item,
    });
    this.setState({
      cartItem: this.props.item,
    });
    console.log(this.props.item);
  };

  render() {
    const { items } = store;
    const item = items.find((p) => p.id === this.props.match.params.itemId);
    return (
      <div className="item-info">
        <ScrollToTop/>
        <HeaderNav />
        <div className="c-container">
          <img
            className="c-item"
            src={item.url}
            alt="img 1"
            onClick={this.handleClick}
          ></img>
          <img
            className="c-item"
            src={item.url1}
            alt="img 2"
            onClick={this.handleClick}
          ></img>
          <img
            className="c-item"
            src={item.url2}
            alt="img 3"
            onClick={this.handleClick}
          ></img>
          {item.url3 != null ? <img
            className="c-item"
            src={item.url3}
            alt="img 4"
            onClick={this.handleClick}
          ></img> : console.log("no img")}
        </div>
        <div className="info">
          <h2>{item.name}</h2>
          <div className="piece">
            <span className="label">Price</span>
            <span className="actual">${item.price}</span>
          </div>
          <hr />
          <div className="piece">
            <span className="label">Brand</span>
            <span className="actual">{item.brand}</span>
          </div>
          <hr />
          <div className="piece">
            <span className="label">Size</span>
            <span className="actual">{item.size}</span>
          </div>
          <hr />
          <b>Description</b> <br /> {item.description}
          <hr></hr>
          <Link to={`/cart/${item.id}`}>
            <button
              className="add-to-cart"
              key={this.props.id}
              onClick={this.handleAddToCart}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ItemPage;

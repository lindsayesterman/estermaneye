import React from "react";
import { Link } from "react-router-dom";
import store from "./store.js";
import "./App.css";
import HeaderNav from "./HeaderNav";
import ScrollToTop from "./ScrollToTop";

class AddToCart extends React.Component {
  render() {
    const { items } = store;
    const item = items.find((p) => p.id === this.props.match.params.itemId);
    const cartItems = item;
    const tax = (item.price * 0.07).toFixed(2);
    console.log(cartItems);
    const realPrice = (
      parseFloat(item.price) +
      parseFloat(item.price) * 0.07 +
      4.99
    ).toFixed(2);
    return (
      <div className="cart-page">
        <ScrollToTop />
        <HeaderNav />
        <div className="cart-item">
          <h2>{item.name}</h2>
          <Link to={`/item/${item.id}`}>
            <img alt="item in cart" src={item.url}></img>
          </Link>
          <p>{item.description}</p>
          <p>${item.price} </p>
        </div>
        <div className="checkout-cart">
          <h3>Checkout</h3>
          <h4>Shipping is $4.99</h4>
          <h4>Sales tax is ${tax}</h4>
          <h3>
            Your total price is ${realPrice}, please send ${realPrice} to the
            paypal link below.
          </h3>
          <div className="paypal">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.paypal.com/paypalme/lindsayscloset"
            >
              Pay here with Paypal
            </a>
          </div>
        </div>
        <form
          className="c-form"
          action="https://formspree.io/f/mwkwregz"
          method="POST"
        >
          <input
            name="name"
            type="name"
            placeholder="Enter your name..."
          ></input>
          <input
            name="address"
            type="address"
            placeholder="Enter your address..."
          ></input>
          <input name="item" type="text" value={`${item.name} (Leave this)`}></input>
          <button name="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddToCart;

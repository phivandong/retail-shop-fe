import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    let items = [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.map((item) => items.push(item));
    this.setState({
      items: items,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map((item) => (
          <li key={item.id} className="text-white">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </div>
    );
  }
}

export default Cart;

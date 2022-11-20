import { Component } from "react";
import { request } from "graphql-request";

import DELETE_ITEM from "../../graphql/deleteItem";
import GET_CART from "../../graphql/getCart";

import "./cart.sass";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: ``,
      cartItems: null,
      total: 0,
    };
  }

  componentDidMount() {
    this.setState({ cartItems: this.props.cartItems });
    this.onGetCart();
  }

  onDeleteItem = (id) => {
    request(
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master",
      DELETE_ITEM(id)
    )
      .then(() => this.onGetCart())
      .then(() => this.props.setCartItems(this.state.cartItems));
  };

  onGetCart = () => {
    request(
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master",
      GET_CART
    ).then((data) =>
      this.setState({ cartItems: data.carts }, () =>
        this.setState({
          total: this.state.cartItems.map((item) => item.price * item.quantity),
        })
      )
    );
  };

  render() {
    const countTotal = (nums) => {
      let count = 0;
      for (let i = 0; i < nums.length; i++) {
        count += nums[i];
      }
      return count;
    };
    const RenderItems = (arr) => {
      const { currency } = this.state;
      const items = arr.map((item) => {
        return (
          <div className="cart__products-item" key={item.id}>
            <div className="cart__products-item-title">{item.title}</div>
            <div className="cart__products-item-price">
              {currency === "$"
                ? `$ ${item.price}`
                : currency === "€"
                ? `€ ${(item.price * 0.97).toFixed(0)}`
                : currency === "zł"
                ? `zł ${(item.price * 4.54).toFixed(0)}`
                : currency === "₴"
                ? `₴ ${(item.price * 36.8).toFixed(0)}`
                : `$ ${item.price}`}
            </div>
            <div className="cart__products-item-size">Size: {item.size}</div>
            <div className="cart__products-item-quantity">
              <div className="cart__products-item-quantity-text">
                Quantity:{" "}
              </div>
              <div className="cart__products-item-quantity-number">
                {item.quantity}
              </div>
              <img
                className="cart__products-item-trash"
                src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                onClick={() => this.onDeleteItem(item.id)}
                alt="trash"
              />
            </div>
            <img
              className="cart__products-item-img"
              src={item.mainImage}
              alt={item.title}
            />
            <hr></hr>
          </div>
        );
      });
      return <div className="cart__products">{items}</div>;
    };
    const render = !this.state.cartItems ? (
      <div className="miniCart__empty">Cart is empty</div>
    ) : this.state.cartItems.length === 0 ? (
      <div className="miniCart__empty">Cart is empty</div>
    ) : (
      RenderItems(this.state.cartItems)
    );
    return (
      <div className="cart">
        <h2 className="cart__title">CART</h2>
        <div className="cart__total">
          TOTAL: ${countTotal(this.state.total)}
        </div>
        <button className="cart__checkout">CHECKOUT</button>
        <hr className="cart__hr-first" />
        {render}
      </div>
    );
  }
}

export default Cart;

import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import ProductList from "./components/productList/ProductList";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Cart from "./components/cart/Cart";

import "./style/style.sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFiltered: [],
      productSlug: ``,
      currency: ``,
      cartItems: null,
      size: ``,
      quantity: 0,
    };
  }

  componentDidMount() {
    this.setState({ currency: "$" });
  }

  filteredData = (value) => {
    this.setState({ productsFiltered: value });
  };

  onProductSelected = (value) => {
    this.setState({ productSlug: value });
  };

  setCurrency = (value) => {
    this.setState({ currency: value });
  };

  setCartItems = (value) => {
    this.setState({ cartItems: value });
  };

  render() {
    return (
      <Router>
        <>
          <NavBar
            setCartItems={this.setCartItems}
            cartItems={this.state.cartItems}
            filteredData={this.filteredData}
            setCurrency={this.setCurrency}
          />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <ProductList
                  productsFiltered={this.state.productsFiltered}
                  onProductSelected={this.onProductSelected}
                  currency={this.state.currency}
                />
              </Route>
              <Route exact path="/product/:productSlug">
                <SingleProduct
                  setCartItems={this.setCartItems}
                  selectedProduct={this.state.selectedProduct}
                  currency={this.state.currency}
                />
              </Route>
              <Route exact path="/cart">
                <Cart
                  currency={this.state.currency}
                  setCartItems={this.setCartItems}
                  cartItems={this.state.cartItems}
                />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;

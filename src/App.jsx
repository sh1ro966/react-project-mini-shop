import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/navBar/NavBar';
import ProductList from './components/productList/ProductList';
import SingleProduct from './components/singleProduct/SingleProduct';
import Cart from './components/cart/Cart';


import './style/style.sass';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFiltered: [],
      productSlug: ``,
      currency: ``
    }
  }

  componentDidMount() {
    this.setState({currency: '$'});
  }

  filteredData = (value) => {
    this.setState({productsFiltered: value})
  }

  onProductSelected = (id) => {
    this.setState({productSlug: id})
  }

  setCurrency = (value) => {
    this.setState({currency: value})
  }

  render() {
    return (
      <Router>
        <>
      <NavBar filteredData={this.filteredData} setCurrency={this.setCurrency}/>
        <div className='container'>
          <Switch>
          <Route exact path="/">
              <ProductList productsFiltered={this.state.productsFiltered} onProductSelected={this.onProductSelected} currency={this.state.currency} />
            </Route>
          <Route exact path="/product/:productSlug">
            <SingleProduct selectedProduct={this.state.selectedProduct} currency={this.state.currency} />
            </Route>
            <Route exact path="/cart">
              <Cart currency={this.state.currency} />
            </Route>
            <Route exact path="/checkout">
            </Route>
          </Switch>
        </div>
      </>
      </Router>
    );
  }
}

export default App;
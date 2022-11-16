import { Component } from 'react';

import NavBar from './components/navBar/NavBar';
import ProductList from './components/productList/ProductList';
import SingleProduct from './components/singleProduct/SingleProduct';


import './style/style.sass';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFiltered: []
    }
  }

  // filteredData = (value) => {
  //   this.setState({productsFiltered: value})
  // }

  render() {
    return (
      <>
      <NavBar />
      {/* <NavBar filteredData={this.filteredData}/> */}
        <div className='container'>
          {/* <ProductList productsFiltered={this.state.productsFiltered} /> */}
          <SingleProduct />
        </div>
      </>
    );
  }
}

export default App;
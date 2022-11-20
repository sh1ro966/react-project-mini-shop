import { Component } from "react";
import { Link } from "react-router-dom";

import "./productList.sass";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPrice: 0,
    };
  }

  render() {
    const { productsFiltered } = this.props;
    return (
      <main className="productList">
        {!productsFiltered
          ? null
          : productsFiltered.map((product) =>
              product.quantity !== 0 ? (
                <li
                  className="productList__item"
                  key={product.id}
                  onClick={() => {
                    this.props.onProductSelected(product.slug);
                  }}
                >
                  <Link to={`/product/${product.slug}`}>
                    <img
                      className="productList__item-img"
                      src={product.mainImage.url}
                      alt={product.title}
                    />
                    <div className="productList__item-descr">
                      <div className="productList__item-title">
                        {product.title}
                      </div>
                      <div className="productList__item-price">
                        {this.props.currency === "$"
                          ? `$ ${product.price}`
                          : this.props.currency === "€"
                          ? `€ ${(product.price * 0.97).toFixed(0)}`
                          : this.props.currency === "zł"
                          ? `zł ${(product.price * 4.54).toFixed(0)}`
                          : this.props.currency === "₴"
                          ? `₴ ${(product.price * 36.8).toFixed(0)}`
                          : `$ ${product.price}`}
                      </div>
                    </div>
                  </Link>
                </li>
              ) : (
                <li
                  key={product.id}
                  className="productList__item-missing"
                  onClick={() => {
                    this.props.onProductSelected(product.id);
                  }}
                >
                  <img
                    className="productList__item-img"
                    src={product.mainImage.url}
                    alt={product.title}
                  />
                  <div className="productList__item-descr">
                    <div className="productList__item-title">
                      {product.title}
                    </div>
                    <div className="productList__item-price">OUT OF STOCK</div>
                  </div>
                </li>
              )
            )}
      </main>
    );
  }
}

export default ProductList;

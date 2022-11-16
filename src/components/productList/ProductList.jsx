import { Component } from "react";

import './productList.sass';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemPrice: 0,
        }
    }

    render() { 
       const {productsFiltered} = this.props;
        return (
            <main className="productList">
                {!productsFiltered ? null : productsFiltered.map((product) => product.quantity !==0 ? (<li key={product.id} className="productList__item">
                <img className="productList__item-img" src={product.mainImage.url} alt={product.title} />
                    <div className="productList__item-descr">
                        <div className="productList__item-title">{product.title}</div>
                        <div className="productList__item-price">{`${product.price}`}</div>
                </div>
            </li>) : <li key={product.id} className="productList__item-missing">
                <img className="productList__item-img" src={product.mainImage.url} alt={product.title} />
                    <div className="productList__item-descr">
                        <div className="productList__item-title">{product.title}</div>
                        <div className="productList__item-price">OUT OF STOCK</div>
                </div>
            </li> )}
            </main>
        );
    }
}

export default ProductList;
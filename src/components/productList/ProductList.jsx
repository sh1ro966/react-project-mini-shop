import { useQuery } from "@apollo/client";
import { Component } from "react";

import GET_PRODUCTS from '../../server/getProducts';

import './productList.sass';

class ProductList extends Component {


    render() {
        return (
            <main className="productList">
                <RenderProduct />
            </main>
        );
    }
}

function RenderProduct() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  const products = data.products.map((product) => {
        return (
            <li key={product.id} className="productList__item">
                <img className="productList__item-img" src={product.mainImage.url} alt={product.title} />
                    <div className="productList__item-descr">
                        <div className="productList__item-title">{product.title}</div>
                        <div className="productList__item-price">{product.price} $</div>
                </div>
            </li>
        )
    })
  
    return <>{products}</>;
  }

export default ProductList;
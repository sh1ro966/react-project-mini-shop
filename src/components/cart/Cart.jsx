import { Component } from "react";

import './cart.sass';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: ``
        }
    }

    render() {
        return (
            <div className="cart">
                <h2 className="cart__title">CART</h2>
                    <div className="cart__total">TOTAL: $ 4214124</div>
                    <button className="cart__checkout">CHECKOUT</button>
                <hr className="cart__hr-first" />  
                    <div className="cart__products">
                        <div className="cart__products-item">
                            <div className="cart__products-item-title">NIKE OG CAP VINTAGE EXCLUSIVE</div>
                            {/* <div className="cart__products-item-price">{ this.props.currency === '$' ? `PRICE: $ ${item.price}` : 
                                    this.props.currency === '€' ? `PRICE: € ${(item.price * 0.97).toFixed(0)}` : 
                                    this.props.currency === 'zł' ? `PRICE: zł ${(item.price * 4.54).toFixed(0)}` :
                                    this.props.currency === '₴' ? `PRICE: ₴ ${(item.price * 36.80).toFixed(0)}` : `PRICE: $ ${item.price}` }</div> */}
                                    <div className="cart__products-item-price">1</div>
                            <div className="cart__products-item-size">Size: S</div>
                                <div className="cart__products-item-quantity">
                                        <button className="cart__products-item-quantityMinus">-</button>
                                        <div className="cart__products-item-quantityNum">1</div>
                                        <button className="cart__products-item-quantityPlus">+</button>
                                </div>
                            <img className="cart__products-item-img" src="https://media.graphassets.com/Akwt5brQICm4uBpbc0SA" alt="" />
                            <hr></hr>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Cart;
// import { useState } from "react";
import { Component } from 'react';

import './navBar.sass';

class NavBar extends Component {

    render() {
        return (
            <>
            <nav className="navBar">
                <div className="navBar__wrapper">
                    <img className="navBar__icon" src="https://cdn-icons-png.flaticon.com/128/2898/2898372.png" alt="shop-icon" />
                        <div className="navBar__types">
                            <div className="navBar__types-item">ALL</div>
                            <div className="navBar__types-item">CLOTHES</div>
                            <div className="navBar__types-item">TECH</div>
                        </div>
                    <div className="navBar__currency">
                        <div className="navBar__currency-symbol">$</div>
                        <div className="navBar__currency-btn"><img style={{'width': 10}} src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt="dropdown" /></div>
                    </div>
                        <div className="navBar__cart">
                            <img className="navBar__cart-img" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="shop-cart" />
                            <div className="navBar__cart-quantity">1</div>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}

export default NavBar;

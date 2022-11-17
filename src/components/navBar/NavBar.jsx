import { Component } from 'react';
import { createRef } from 'react';
import { request } from 'graphql-request';
import { NavLink, Link } from 'react-router-dom';

import GET_PRODUCTS from '../../server/getProducts';

import './navBar.sass';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.currencyRef = createRef();
        this.cartRef = createRef();
        this.state = {
           productsFiltered: [],
           currency: ``,
           productsCart: []
        }
    }

    componentDidMount() {
        this.filterProducts();
        this.setState({currency: '$'})
    }

    onCurrencyModal = () => {
        const curRef = this.currencyRef.current;
        curRef.classList.toggle('show');
    }

    onCartModal = () => {
        const curRef = this.cartRef.current;
        curRef.classList.toggle('show');
    }

    onChangeCurrency = (e) => {
        if (e.target.id === 'usd') {
            this.setState(({currency}) => ({currency: '$'}), () => this.props.setCurrency(this.state.currency))
        }
        if (e.target.id === 'eur') {
            this.setState(({currency}) => ({currency: '€'}), () => this.props.setCurrency(this.state.currency))
        }
        if (e.target.id === 'pln') {
            this.setState(({currency}) => ({currency: 'zł'}), () => this.props.setCurrency(this.state.currency))
        }
        if (e.target.id === 'uah') {
            this.setState(({currency}) => ({currency: '₴'}), () => this.props.setCurrency(this.state.currency))
        };
        
    }

    onFilterProducts = (e) => {
        const category = e.target.id;
        this.filterProducts(category);
    }
    
    filterProducts = (categoryTitle = 'All') => {
         request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master', GET_PRODUCTS)
        .then(categoryTitle !== 'All' ? 
        data => this.setState({productsFiltered: data.products.filter(i => i.category[1].categoryTitle === categoryTitle)}, () => {this.props.filteredData(this.state.productsFiltered);}) : 
        data => this.setState({productsFiltered: data.products.filter(i => i.category[0].categoryTitle)}, () => {this.props.filteredData(this.state.productsFiltered);}));
    }

    render() {
        return (
            <>
            <nav className="navBar">
                <div className="navBar__wrapper">
                    <Link to="/">
                    <img className="navBar__icon" src="https://cdn-icons-png.flaticon.com/128/2898/2898372.png" alt="shop-icon" />
                    </Link>
                    <Link className="navBar__types" to="/">
                        <div className="navBar__types" >
                            <div id="All" className="navBar__types-item" onClick={this.onFilterProducts}>All</div>
                            <div id="Clothes" className="navBar__types-item" onClick={this.onFilterProducts}>Clothes</div>
                            <div id="Tech" className="navBar__types-item" onClick={this.onFilterProducts}>Tech</div>
                        </div>
                    </Link>
                    <div className="navBar__currency" onClick={this.onCurrencyModal}>
                        <div className="navBar__currency-symbol">{this.state.currency}</div>
                        <div className="navBar__currency-btn"><img style={{'width': 10}} src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt="dropdown" /></div>
                        <ul ref={this.currencyRef} className="navBar__currency-content" >
                            <li id="usd" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>$ USD</li>
                            <li id="eur" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>€ EUR</li>
                            <li id="pln" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>zł PLN</li>
                            <li id="uah" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>₴ UAH</li>
                        </ul>
                    </div>
                        <div className="navBar__cart" >
                            <img className="navBar__cart-img" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="shop-cart" onClick={this.onCartModal} />
                            <div className="navBar__cart-quantity">1</div>
                                <div ref={this.cartRef} className="miniCart">
                                    <div className="miniCart__products">
                                        {/* <div className="miniCart__products_item">
                                            <div className="miniCart__products-item-title">NIKE OG CAP VINTAGE ORIGINAL</div>
                                            <div className="miniCart__products-item-price">$ 231</div>
                                            <div className="miniCart__products-item-size">Size: S</div>
                                                <div className="miniCart__products-item-quantity">
                                                        <button className="miniCart__products-item-quantityMinus">-</button>
                                                        <div className="miniCart__products-item-quantityNum">1</div>
                                                        <button className="miniCart__products-item-quantityPlus">+</button>
                                                </div>
                                            <img className="miniCart__products-item-img" src="https://media.graphassets.com/hZzKwyFbQ7K1RAxfq49Z" alt="" />  
                                        <hr></hr>  
                                        </div>     */}
                                    </div>
                                        <Link to="/cart">
                                            <button className="miniCart__button-cart" onClick={this.onCartModal}>GO TO CART</button>
                                        </Link>
                                        <Link to="/checkout">
                                    <button className="miniCart__button-check" onClick={this.onCartModal}>CHECKOUT</button>  
                                    </Link>          
                                </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;

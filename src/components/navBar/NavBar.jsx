import { Component } from 'react';
import { createRef } from 'react';
import { request } from 'graphql-request';

import GET_PRODUCTS from '../../server/getProducts';

import './navBar.sass';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.currencyRef = createRef();
        this.state = {
           productsFiltered: []
        }
    }

    componentDidMount() {
        this.filterProducts();
    }

    onCurrencyModal = () => {
        const curRef = this.currencyRef.current;
        curRef.classList.toggle('show');
    }

    onChangeCurrency = (e) => {
        if (e.target.id === 'usd') {
            console.log('usd choosen');
        }
        if (e.target.id === 'eur') {
            console.log('eur choosen');
        }
        if (e.target.id === 'pln') {
            console.log('pln choosen');
        }
        if (e.target.id === 'uah') {
            console.log('uah choosen');
        }
    }

    onFilterProducts = (e) => {
        const category = e.target.id;
        this.filterProducts(category);
    }
    
    filterProducts = (categoryTitle = 'All') => {
         request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master', GET_PRODUCTS)
        .then(categoryTitle !== 'All' ? 
        data => this.setState({productsFiltered: data.products.filter(i => i.category[1].categoryTitle === categoryTitle)}) : 
        data => this.setState({productsFiltered: data.products.filter(i => i.category[0].categoryTitle)}));

        // data => this.setState({productsFiltered: data.products.filter(i => i.category[1].categoryTitle === categoryTitle)}, () => {this.props.filteredData(this.state.productsFiltered);}) : 
        // data => this.setState({productsFiltered: data.products.filter(i => i.category[0].categoryTitle)}, () => {this.props.filteredData(this.state.productsFiltered);}));
    }


    render() {
        return (
            <>
            <nav className="navBar">
                <div className="navBar__wrapper">
                    <img className="navBar__icon" src="https://cdn-icons-png.flaticon.com/128/2898/2898372.png" alt="shop-icon" />
                        <div className="navBar__types" >
                            <div id="All" className="navBar__types-item" onClick={this.onFilterProducts}>All</div>
                            <div id="Clothes" className="navBar__types-item" onClick={this.onFilterProducts}>Clothes</div>
                            <div id="Tech" className="navBar__types-item" onClick={this.onFilterProducts}>Tech</div>
                        </div>
                    <div className="navBar__currency" onClick={this.onCurrencyModal}>
                        <div className="navBar__currency-symbol">$</div>
                        <div className="navBar__currency-btn"><img style={{'width': 10}} src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt="dropdown" /></div>
                        <ul ref={this.currencyRef} className="navBar__currency-content" >
                            <li id="usd" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>$ USD</li>
                            <li id="eur" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>€ EUR</li>
                            <li id="pln" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>zł PLN</li>
                            <li id="uah" className="navBar__currency-contentSymbol" onClick={this.onChangeCurrency}>₴ UAH</li>
                        </ul>
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

import { Component } from "react";
import { createRef } from "react";

import NavBar from "../navBar/NavBar";

import './singleProduct.sass';

class SingleProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <main className="singleProduct">
                    <div className="singleProduct__sideImages">
                        <img className="singleProduct__images-first" src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt="img"></img>
                        <img className="singleProduct__images-second" src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt="img"></img>
                        <img className="singleProduct__images-third" src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt="img"></img>
                    </div>
                        <div className="singleProduct__carousel">
                            <button onClick={this.buttonChange} value={'prev'} className="singleProduct__carousel-button prev">&#8249;</button>
                            <button onClick={this.buttonChange} value={'next'} className="singleProduct__carousel-button next">&#8250;</button>
                            <ul>
                                <li id="1" className="singleProduct__carousel-item">
                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt="" />
                                </li>
                                <li id="2" className="singleProduct__carousel-item">
                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt="" />
                                </li>
                                <li id="3" className="singleProduct__carousel-item">
                                    <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                   
                </main>
            </>
        );
    }
}

export default SingleProduct;
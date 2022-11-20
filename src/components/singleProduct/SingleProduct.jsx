import { Component } from "react";
import { request } from "graphql-request";
import { withRouter } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import GET_SINGLE_PRODUCT from "../../graphql/getSingleProduct";
import ADD_TO_CART from "../../graphql/addToCart";
import PUBLISH_CART from "../../graphql/publishCart";
import GET_CART from "../../graphql/getCart";

import "./singleProduct.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      quantity: 1,
      size: `Empty`,
      cartItems: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.productSlug;
    this.onRequestProduct(id);
    this.onPublishCart();
  }

  onRequestProduct = (id) => {
    request(
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master",
      GET_SINGLE_PRODUCT(id)
    ).then((data) => this.setState({ item: data.product }));
  };

  onAddToCart = (title, price, mainImage, id, size, quantity) => {
    request(
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master",
      ADD_TO_CART(title, price, mainImage, id, size, quantity)
    ).then(() => this.onPublishCart());
  };

  onPublishCart = () => {
    request(
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master",
      PUBLISH_CART
    ).then(() => this.onGetCart());
  };

  onGetCart = () => {
    request(
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clagsd8q200sb01uk9785hs2l/master",
      GET_CART
    ).then((data) =>
      this.setState({ cartItems: data.carts }, () =>
        this.props.setCartItems(this.state.cartItems)
      )
    );
  };

  setQuantityMinus = () => {
    if (this.state.quantity <= 1) {
      return;
    }
    this.setState((state) => ({ quantity: this.state.quantity - 1 }));
  };

  setQuantityPlus = () => {
    if (this.state.quantity >= 99) {
      return;
    }
    this.setState((state) => ({ quantity: this.state.quantity + 1 }));
  };

  onSetSize = (e) => {
    this.setState({ size: e.target.innerText });
  };

  render() {
    const { item, quantity } = this.state;
    return (
      <>
        {item.mainImage && (
          <main className="singleProduct">
            <div className="singleProduct__sideImages">
              <img
                className="singleProduct__images-first"
                src={item.mainImage.url}
                alt={item.title}
              />
              <img
                className="singleProduct__images-second"
                src={item.secondImage.url}
                alt={item.title}
              />
              <img
                className="singleProduct__images-third"
                src={item.thirdImage.url}
                alt={item.title}
              />
            </div>
            <div className="singleProduct__slider">
              <Swiper
                loop={true}
                autoplay={true}
                navigation={true}
                modules={[Navigation]}
                className="singleProduct__slider-wrapper"
              >
                <SwiperSlide className="singleProduct__slider-item">
                  <img src={item.mainImage.url} alt={item.title} />
                </SwiperSlide>
                <SwiperSlide className="singleProduct__slider-item">
                  <img src={item.secondImage.url} alt={item.title} />
                </SwiperSlide>
                <SwiperSlide className="singleProduct__slider-item">
                  <img src={item.thirdImage.url} alt={item.title} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="singleProduct__info">
              <h1 className="singleProduct__info-title">{item.title}</h1>
              <div className="singleProduct__info-category">
                {item.category[1].categoryTitle}
              </div>
              <div className="singleProduct__info-description">
                {item.description}
              </div>
              <div
                className="singleProduct__info-size"
                required
                onClick={this.onSetSize}
              >
                {item.category[1].categoryTitle === "Clothes" ? (
                  <>
                    <button className="singleProduct__info-size-item">S</button>
                    <button className="singleProduct__info-size-item">M</button>
                    <button className="singleProduct__info-size-item">L</button>
                    <button className="singleProduct__info-size-item">
                      XL
                    </button>
                  </>
                ) : (
                  <>
                    <button className="singleProduct__info-size-item">
                      64 GB
                    </button>
                    <button className="singleProduct__info-size-item">
                      256 GB
                    </button>
                    <button className="singleProduct__info-size-item">
                      512 GB
                    </button>
                  </>
                )}
              </div>
              <div className="singleProduct__info-price">
                {this.props.currency === "$"
                  ? `$ ${item.price}`
                  : this.props.currency === "€"
                  ? `€ ${(item.price * 0.97).toFixed(0)}`
                  : this.props.currency === "zł"
                  ? `zł ${(item.price * 4.54).toFixed(0)}`
                  : this.props.currency === "₴"
                  ? `₴ ${(item.price * 36.8).toFixed(0)}`
                  : `$ ${item.price}`}
              </div>
              <div className="singleProduct__info-add">
                <button
                  className="singleProduct__info-button"
                  onClick={() =>
                    this.onAddToCart(
                      item.title,
                      item.price,
                      item.mainImage.url,
                      item.id,
                      this.state.size,
                      this.state.quantity
                    )
                  }
                >
                  Add to card
                </button>
                <div className="singleProduct__info-quantityText">
                  Quantity:
                </div>
                <button
                  className="singleProduct__info-quantityMinus"
                  onClick={this.setQuantityMinus}
                >
                  -
                </button>
                <div className="singleProduct__info-quantity">{quantity}</div>
                <button
                  className="singleProduct__info-quantityPlus"
                  onClick={this.setQuantityPlus}
                >
                  +
                </button>
              </div>
            </div>
          </main>
        )}
      </>
    );
  }
}

export default withRouter(SingleProduct);

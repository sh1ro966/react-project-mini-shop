import { gql } from '@apollo/client';

const ADD_TO_CART = (title, price, mainImage, id, size, quantity) => gql`
mutation addToCart {
  createCart(data: {title: "${title}", price: ${price}, mainImage: "${mainImage}", productId: "${id}", size: "${size}", quantity: ${quantity}}) {
    title
    price
    mainImage
    productId
    size
    quantity
    }
}
`;

export default ADD_TO_CART;
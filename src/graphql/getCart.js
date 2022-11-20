import { gql } from '@apollo/client';

const GET_CART = gql`
  query getCart {
    carts {
      id
      title
      price
      mainImage
      productId
      size
      quantity
    }
  }
  `;
  
  export default GET_CART;
  
import { gql } from '@apollo/client';

const PUBLISH_CART = gql`
mutation publishCart {
    publishManyCarts(to: PUBLISHED) {
      count
    }
  }
  `;
  
  export default PUBLISH_CART;
  
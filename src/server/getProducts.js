import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
query GetProducts {
  products {
    id
    title,
    quantity,
    price,
    description,
    mainImage {
      url
    },
    secondImage {
      url
    },
    thirdImage {
      url
    }
  }
}
`;

export default GET_PRODUCTS;

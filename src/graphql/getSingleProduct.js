import { gql } from '@apollo/client';

const GET_SINGLE_PRODUCT = (slug) => gql`
query GetProducts {
    product(where: {slug: "${slug}"}) {
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
        },
        category {
          categoryTitle
        }
    }
}
`;

export default GET_SINGLE_PRODUCT;


  
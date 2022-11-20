import { gql } from '@apollo/client';

const DELETE_ITEM = (id) => gql`
mutation deleteItem {
    deleteCart(where: {id: "${id}"}) {
      title
    }
  }
`;

export default DELETE_ITEM;
  
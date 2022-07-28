import { gql } from "@apollo/client";

export const postCart = gql`
  mutation PostCart($address1: String!) {
    createOrder(input: { billing: { address1: $address1 } }) {
      orderId
    }
  }
`;

import { gql } from "@apollo/client";

export const GRAPHQL_QUERY = gql`
  mutation MyMutation($address1: String!) {
    createOrder(input: { billing: { address1: $address1 } }) {
      orderId
    }
  }
`;

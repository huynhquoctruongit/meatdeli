import { gql } from "@apollo/client";

export const callPostCart = gql`
  mutation MyMutation($addressText: String!) {
    createOrder(input: { billing: { address1: $addressText } }) {
      orderId
    }
  }
`;

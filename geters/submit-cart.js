import { gql } from "@apollo/client";

export const createCartFunc = gql`
  mutation CHECKOUT_MUTATION($input: CreateOrderInput!) {
    createOrder(input: $input) {
      clientMutationId
      orderId
    }
  }
`;

import { gql } from "@apollo/client";
export const shippingClass = gql`
  query ShippingClass {
    shippingClasses {
      nodes {
        name
        slug
      }
    }
  }
`;

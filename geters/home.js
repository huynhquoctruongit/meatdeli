import { gql } from "@apollo/client";
export const homeGQL = gql`
  query Home {
    products {
      nodes {
        name
        slug
        image {
          altText
          fileSize
          sizes
          slug
          sourceUrl
          srcSet
          title
          uri
        }
        ... on SimpleProduct {
          id
          name
          regularPrice(format: RAW)
          price(format: RAW)
        }
      }
    }
  }
`;

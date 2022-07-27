import { gql } from "@apollo/client";
export const homeGQL = gql`
  query Home {
    products {
      nodes {
        name
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
      }
    }
  }
`;

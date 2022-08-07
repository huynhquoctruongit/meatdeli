import { gql } from '@apollo/client';
export const searchNewsGQL = gql`
  query News($after: String, $search: String) {
    posts(after: $after, first: 6, where: { search: $search }) {
      nodes {
        categories {
          edges {
            node {
              id
            }
          }
        }
        featuredImage {
          node {
            fileSize
            slug
            sourceUrl
            srcSet
            uri
            title
          }
        }
        content
        slug
        title
        postId
        date
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
export const newsGQL = gql`
  query News($after: String) {
    posts(after: $after, first: 6) {
      nodes {
        categories {
          edges {
            node {
              id
            }
          }
        }
        featuredImage {
          node {
            fileSize
            slug
            sourceUrl
            srcSet
            uri
            title
          }
        }
        excerpt
        content
        slug
        title
        postId
        date
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
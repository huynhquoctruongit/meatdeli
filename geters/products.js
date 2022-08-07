import { gql } from "@apollo/client";
export const searchProductGQL = gql`
  query Product($after: String, $search: String) {
    products(after: $after, first: 8, where: { search: $search }) {
      nodes {
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
        shortDescription
        link
        menuOrder
        id
        sku
        slug
        status
        name
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
    productCategories {
      nodes {
        count
        id
        name
        slug
      }
    }
  }
`;
export const productGQL = gql`
  query Product($after: String, $search: String) {
    products(
      after: $after
      first: 12
      where: { orderby: { field: DATE }, search: $search }
    ) {
      nodes {
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
        shortDescription
        link
        menuOrder
        id
        sku
        slug
        status
        name
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
    productCategories {
      nodes {
        count
        id
        name
        slug
      }
    }
  }
`;
export const productDetailGQL = gql`
  query Product($slug: ID!) {
    product(id: $slug, idType: SLUG) {
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
      link
      menuOrder
      description
      productCategories {
        nodes {
          name
          products {
            nodes {
              ... on SimpleProduct {
                id
                name
                salePrice(format: RAW)
                price(format: RAW)
              }
              name
              id
              slug
              image {
                sourceUrl
                srcSet
                title
                uri
                sizes
                link
              }
            }
          }
        }
      }
      description
      shortDescription
      databaseId
      reviews {
        edges {
          rating
          node {
            date
            content
            author {
              node {
                email
                name
              }
            }
          }
        }
      }
      galleryImages {
        nodes {
          title
          uri
          srcSet
          sourceUrl
        }
      }
      id
      sku
      slug
      status
      name
    }
  }
`;

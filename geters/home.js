import { gql } from "@apollo/client";

export const homeGQL = gql`
  query Home {
    productCategories {
      nodes {
        name
        id
        description
        slug
        children {
          nodes {
            slug
            name
            id
          }
        }
        image {
          sourceUrl
          srcSet
          altText
        }
      }
    }
    products {
      nodes {
        name
        slug
        databaseId
        productTags {
          nodes {
            name
          }
        }
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
export const searchProd = gql`
  query Home($search: String!) {
    products(where: { search: $search }) {
      nodes {
        name
        description
        totalSales
      }
    }
  }
`;
export const getCustomer = gql`
  query Home {
    customers {
      nodes {
        sessionToken
        email
        firstName
      }
    }
  }
`;
export const getInfoCompayny = gql`
  query Home {
    user(id: 1, idType: DATABASE_ID) {
      info_page {
        address
        companyname
        email
        phone
        taxdate
        taxnumber
      }
      avatar {
        url
      }
    }
  }
`;

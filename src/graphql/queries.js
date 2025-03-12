import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String,
  $first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword,
    first: $first, after: $after) {
        edges {
            node {
                id,
                fullName,
                description,
                language,
                ownerAvatarUrl,
                stargazersCount,
                forksCount,
                reviewCount,
                ratingAverage
              }
            cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      id
      fullName
      url
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;
  
export const GET_ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;



// xport const GET_REPOSITORIES = gql`
//   query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
//     repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
//         edges {
//             node {
//                 id,
//                 fullName,
//                 description,
//                 language,
//                 ownerAvatarUrl,
//                 stargazersCount,
//                 forksCount,
//                 reviewCount,
//                 ratingAverage
//             }
//         }
//     }
//   }
// `;


// export const GET_REPOSITORY = gql`
//   query($id: ID!) {
//     repository(id: $id) {
//       id
//       fullName
//       url
//       reviews {
//       edges {
//         node {
//           id
//           text
//           rating
//           createdAt
//           user {
//             id
//             username
//           }
//         }
//       }
//     }
//     }
//   }
// `;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTour = /* GraphQL */ `
  query GetTour($id: ID!) {
    getTour(id: $id) {
      id
      name
      caption
      description
      url
      category
      createdAt
      updatedAt
    }
  }
`;
export const listTours = /* GraphQL */ `
  query ListTours(
    $filter: ModelTourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        caption
        description
        url
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

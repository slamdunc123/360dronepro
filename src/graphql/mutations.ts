/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTour = /* GraphQL */ `
  mutation CreateTour(
    $input: CreateTourInput!
    $condition: ModelTourConditionInput
  ) {
    createTour(input: $input, condition: $condition) {
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
export const updateTour = /* GraphQL */ `
  mutation UpdateTour(
    $input: UpdateTourInput!
    $condition: ModelTourConditionInput
  ) {
    updateTour(input: $input, condition: $condition) {
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
export const deleteTour = /* GraphQL */ `
  mutation DeleteTour(
    $input: DeleteTourInput!
    $condition: ModelTourConditionInput
  ) {
    deleteTour(input: $input, condition: $condition) {
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

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTourInput = {
  id?: string | null,
  name: string,
  caption?: string | null,
  description?: string | null,
  url: string,
  category: string,
};

export type ModelTourConditionInput = {
  name?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelTourConditionInput | null > | null,
  or?: Array< ModelTourConditionInput | null > | null,
  not?: ModelTourConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Tour = {
  __typename: "Tour",
  id: string,
  name: string,
  caption?: string | null,
  description?: string | null,
  url: string,
  category: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTourInput = {
  id: string,
  name?: string | null,
  caption?: string | null,
  description?: string | null,
  url?: string | null,
  category?: string | null,
};

export type DeleteTourInput = {
  id: string,
};

export type ModelTourFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelTourFilterInput | null > | null,
  or?: Array< ModelTourFilterInput | null > | null,
  not?: ModelTourFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTourConnection = {
  __typename: "ModelTourConnection",
  items:  Array<Tour | null >,
  nextToken?: string | null,
};

export type CreateTourMutationVariables = {
  input: CreateTourInput,
  condition?: ModelTourConditionInput | null,
};

export type CreateTourMutation = {
  createTour?:  {
    __typename: "Tour",
    id: string,
    name: string,
    caption?: string | null,
    description?: string | null,
    url: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTourMutationVariables = {
  input: UpdateTourInput,
  condition?: ModelTourConditionInput | null,
};

export type UpdateTourMutation = {
  updateTour?:  {
    __typename: "Tour",
    id: string,
    name: string,
    caption?: string | null,
    description?: string | null,
    url: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTourMutationVariables = {
  input: DeleteTourInput,
  condition?: ModelTourConditionInput | null,
};

export type DeleteTourMutation = {
  deleteTour?:  {
    __typename: "Tour",
    id: string,
    name: string,
    caption?: string | null,
    description?: string | null,
    url: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTourQueryVariables = {
  id: string,
};

export type GetTourQuery = {
  getTour?:  {
    __typename: "Tour",
    id: string,
    name: string,
    caption?: string | null,
    description?: string | null,
    url: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListToursQueryVariables = {
  filter?: ModelTourFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListToursQuery = {
  listTours?:  {
    __typename: "ModelTourConnection",
    items:  Array< {
      __typename: "Tour",
      id: string,
      name: string,
      caption?: string | null,
      description?: string | null,
      url: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTourSubscriptionVariables = {
};

export type OnCreateTourSubscription = {
  onCreateTour?:  {
    __typename: "Tour",
    id: string,
    name: string,
    caption?: string | null,
    description?: string | null,
    url: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTourSubscriptionVariables = {
};

export type OnUpdateTourSubscription = {
  onUpdateTour?:  {
    __typename: "Tour",
    id: string,
    name: string,
    caption?: string | null,
    description?: string | null,
    url: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTourSubscriptionVariables = {
};

export type OnDeleteTourSubscription = {
  onDeleteTour?:  {
    __typename: "Tour",
    id: string,
    name: string,
    caption?: string | null,
    description?: string | null,
    url: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

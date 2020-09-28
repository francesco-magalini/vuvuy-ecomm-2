/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePartyInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  companyName?: string | null,
  companyVat?: string | null,
  email?: string | null,
  logo?: string | null,
  mobile?: string | null,
  addressLine1?: string | null,
  addressLine2?: string | null,
  country?: string | null,
};

export type ModelPartyConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  companyVat?: ModelStringInput | null,
  email?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  addressLine1?: ModelStringInput | null,
  addressLine2?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelPartyConditionInput | null > | null,
  or?: Array< ModelPartyConditionInput | null > | null,
  not?: ModelPartyConditionInput | null,
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

export type UpdatePartyInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  companyName?: string | null,
  companyVat?: string | null,
  email?: string | null,
  logo?: string | null,
  mobile?: string | null,
  addressLine1?: string | null,
  addressLine2?: string | null,
  country?: string | null,
};

export type DeletePartyInput = {
  id?: string | null,
};

export type ModelPartyFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  companyVat?: ModelStringInput | null,
  email?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  addressLine1?: ModelStringInput | null,
  addressLine2?: ModelStringInput | null,
  country?: ModelStringInput | null,
  and?: Array< ModelPartyFilterInput | null > | null,
  or?: Array< ModelPartyFilterInput | null > | null,
  not?: ModelPartyFilterInput | null,
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

export type CreatePartyMutationVariables = {
  input: CreatePartyInput,
  condition?: ModelPartyConditionInput | null,
};

export type CreatePartyMutation = {
  createParty:  {
    __typename: "Party",
    id: string,
    firstName: string | null,
    lastName: string | null,
    companyName: string | null,
    companyVat: string | null,
    email: string | null,
    logo: string | null,
    mobile: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    country: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdatePartyMutationVariables = {
  input: UpdatePartyInput,
  condition?: ModelPartyConditionInput | null,
};

export type UpdatePartyMutation = {
  updateParty:  {
    __typename: "Party",
    id: string,
    firstName: string | null,
    lastName: string | null,
    companyName: string | null,
    companyVat: string | null,
    email: string | null,
    logo: string | null,
    mobile: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    country: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeletePartyMutationVariables = {
  input: DeletePartyInput,
  condition?: ModelPartyConditionInput | null,
};

export type DeletePartyMutation = {
  deleteParty:  {
    __typename: "Party",
    id: string,
    firstName: string | null,
    lastName: string | null,
    companyName: string | null,
    companyVat: string | null,
    email: string | null,
    logo: string | null,
    mobile: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    country: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetPartyQueryVariables = {
  id: string,
};

export type GetPartyQuery = {
  getParty:  {
    __typename: "Party",
    id: string,
    firstName: string | null,
    lastName: string | null,
    companyName: string | null,
    companyVat: string | null,
    email: string | null,
    logo: string | null,
    mobile: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    country: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListPartysQueryVariables = {
  filter?: ModelPartyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartysQuery = {
  listPartys:  {
    __typename: "ModelPartyConnection",
    items:  Array< {
      __typename: "Party",
      id: string,
      firstName: string | null,
      lastName: string | null,
      companyName: string | null,
      companyVat: string | null,
      email: string | null,
      logo: string | null,
      mobile: string | null,
      addressLine1: string | null,
      addressLine2: string | null,
      country: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePartySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePartySubscription = {
  onCreateParty:  {
    __typename: "Party",
    id: string,
    firstName: string | null,
    lastName: string | null,
    companyName: string | null,
    companyVat: string | null,
    email: string | null,
    logo: string | null,
    mobile: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    country: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdatePartySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePartySubscription = {
  onUpdateParty:  {
    __typename: "Party",
    id: string,
    firstName: string | null,
    lastName: string | null,
    companyName: string | null,
    companyVat: string | null,
    email: string | null,
    logo: string | null,
    mobile: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    country: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeletePartySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePartySubscription = {
  onDeleteParty:  {
    __typename: "Party",
    id: string,
    firstName: string | null,
    lastName: string | null,
    companyName: string | null,
    companyVat: string | null,
    email: string | null,
    logo: string | null,
    mobile: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    country: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

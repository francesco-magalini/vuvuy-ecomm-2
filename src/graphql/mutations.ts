/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createParty = /* GraphQL */ `
  mutation CreateParty(
    $input: CreatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    createParty(input: $input, condition: $condition) {
      id
      firstName
      lastName
      companyName
      companyVat
      email
      logo
      mobile
      addressLine1
      addressLine2
      country
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateParty = /* GraphQL */ `
  mutation UpdateParty(
    $input: UpdatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    updateParty(input: $input, condition: $condition) {
      id
      firstName
      lastName
      companyName
      companyVat
      email
      logo
      mobile
      addressLine1
      addressLine2
      country
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteParty = /* GraphQL */ `
  mutation DeleteParty(
    $input: DeletePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    deleteParty(input: $input, condition: $condition) {
      id
      firstName
      lastName
      companyName
      companyVat
      email
      logo
      mobile
      addressLine1
      addressLine2
      country
      createdAt
      updatedAt
      owner
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
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
export const listPartys = /* GraphQL */ `
  query ListPartys(
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCurrency = /* GraphQL */ `
  mutation CreateCurrency(
    $input: CreateCurrencyInput!
    $condition: ModelCurrencyConditionInput
  ) {
    createCurrency(input: $input, condition: $condition) {
      id
      name
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCurrency = /* GraphQL */ `
  mutation UpdateCurrency(
    $input: UpdateCurrencyInput!
    $condition: ModelCurrencyConditionInput
  ) {
    updateCurrency(input: $input, condition: $condition) {
      id
      name
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCurrency = /* GraphQL */ `
  mutation DeleteCurrency(
    $input: DeleteCurrencyInput!
    $condition: ModelCurrencyConditionInput
  ) {
    deleteCurrency(input: $input, condition: $condition) {
      id
      name
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      partyId
      enabled
      createdAt
      updatedAt
      owner
      party {
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
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      partyId
      enabled
      createdAt
      updatedAt
      owner
      party {
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
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      partyId
      enabled
      createdAt
      updatedAt
      owner
      party {
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
  }
`;
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      description
      deleted
      visible
      companyName
      companyVat
      firstName
      lastName
      createdAt
      updatedAt
      party {
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
      owner
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      description
      deleted
      visible
      companyName
      companyVat
      firstName
      lastName
      createdAt
      updatedAt
      party {
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
      owner
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      description
      deleted
      visible
      companyName
      companyVat
      firstName
      lastName
      createdAt
      updatedAt
      party {
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
      owner
    }
  }
`;
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
      id
      description
      deleted
      createdAt
      updatedAt
      party {
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
      owner
    }
  }
`;
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
      id
      description
      deleted
      createdAt
      updatedAt
      party {
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
      owner
    }
  }
`;
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
      id
      description
      deleted
      createdAt
      updatedAt
      party {
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
      owner
    }
  }
`;
export const createPurchaseOrder = /* GraphQL */ `
  mutation CreatePurchaseOrder(
    $input: CreatePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    createPurchaseOrder(input: $input, condition: $condition) {
      id
      vendorId {
        id
        description
        deleted
        createdAt
        updatedAt
        party {
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
        owner
      }
      number
      deleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePurchaseOrder = /* GraphQL */ `
  mutation UpdatePurchaseOrder(
    $input: UpdatePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    updatePurchaseOrder(input: $input, condition: $condition) {
      id
      vendorId {
        id
        description
        deleted
        createdAt
        updatedAt
        party {
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
        owner
      }
      number
      deleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePurchaseOrder = /* GraphQL */ `
  mutation DeletePurchaseOrder(
    $input: DeletePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    deletePurchaseOrder(input: $input, condition: $condition) {
      id
      vendorId {
        id
        description
        deleted
        createdAt
        updatedAt
        party {
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
        owner
      }
      number
      deleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPurchaseOrderLine = /* GraphQL */ `
  mutation CreatePurchaseOrderLine(
    $input: CreatePurchaseOrderLineInput!
    $condition: ModelPurchaseOrderLineConditionInput
  ) {
    createPurchaseOrderLine(input: $input, condition: $condition) {
      id
      purchaseOrder {
        id
        vendorId {
          id
          description
          deleted
          createdAt
          updatedAt
          owner
        }
        number
        deleted
        createdAt
        updatedAt
        owner
      }
      extensions
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePurchaseOrderLine = /* GraphQL */ `
  mutation UpdatePurchaseOrderLine(
    $input: UpdatePurchaseOrderLineInput!
    $condition: ModelPurchaseOrderLineConditionInput
  ) {
    updatePurchaseOrderLine(input: $input, condition: $condition) {
      id
      purchaseOrder {
        id
        vendorId {
          id
          description
          deleted
          createdAt
          updatedAt
          owner
        }
        number
        deleted
        createdAt
        updatedAt
        owner
      }
      extensions
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePurchaseOrderLine = /* GraphQL */ `
  mutation DeletePurchaseOrderLine(
    $input: DeletePurchaseOrderLineInput!
    $condition: ModelPurchaseOrderLineConditionInput
  ) {
    deletePurchaseOrderLine(input: $input, condition: $condition) {
      id
      purchaseOrder {
        id
        vendorId {
          id
          description
          deleted
          createdAt
          updatedAt
          owner
        }
        number
        deleted
        createdAt
        updatedAt
        owner
      }
      extensions
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      description
      extensions
      deleted
      createdAt
      updatedAt
      nextItem {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      prevItem {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      itemGroup {
        items {
          id
          itemId
          itemGroupId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      priceList {
        items {
          id
          itemId
          priceListId
          price
          deleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      description
      extensions
      deleted
      createdAt
      updatedAt
      nextItem {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      prevItem {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      itemGroup {
        items {
          id
          itemId
          itemGroupId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      priceList {
        items {
          id
          itemId
          priceListId
          price
          deleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      description
      extensions
      deleted
      createdAt
      updatedAt
      nextItem {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      prevItem {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      itemGroup {
        items {
          id
          itemId
          itemGroupId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      priceList {
        items {
          id
          itemId
          priceListId
          price
          deleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createItemItemGroup = /* GraphQL */ `
  mutation CreateItemItemGroup(
    $input: CreateItemItemGroupInput!
    $condition: ModelItemItemGroupConditionInput
  ) {
    createItemItemGroup(input: $input, condition: $condition) {
      id
      itemId
      itemGroupId
      createdAt
      updatedAt
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      itemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const updateItemItemGroup = /* GraphQL */ `
  mutation UpdateItemItemGroup(
    $input: UpdateItemItemGroupInput!
    $condition: ModelItemItemGroupConditionInput
  ) {
    updateItemItemGroup(input: $input, condition: $condition) {
      id
      itemId
      itemGroupId
      createdAt
      updatedAt
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      itemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const deleteItemItemGroup = /* GraphQL */ `
  mutation DeleteItemItemGroup(
    $input: DeleteItemItemGroupInput!
    $condition: ModelItemItemGroupConditionInput
  ) {
    deleteItemItemGroup(input: $input, condition: $condition) {
      id
      itemId
      itemGroupId
      createdAt
      updatedAt
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      itemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const createItemGroup = /* GraphQL */ `
  mutation CreateItemGroup(
    $input: CreateItemGroupInput!
    $condition: ModelItemGroupConditionInput
  ) {
    createItemGroup(input: $input, condition: $condition) {
      id
      name
      description
      extensions
      deleted
      createdAt
      updatedAt
      item {
        items {
          id
          itemId
          itemGroupId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      nextItemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      prevItemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const updateItemGroup = /* GraphQL */ `
  mutation UpdateItemGroup(
    $input: UpdateItemGroupInput!
    $condition: ModelItemGroupConditionInput
  ) {
    updateItemGroup(input: $input, condition: $condition) {
      id
      name
      description
      extensions
      deleted
      createdAt
      updatedAt
      item {
        items {
          id
          itemId
          itemGroupId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      nextItemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      prevItemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const deleteItemGroup = /* GraphQL */ `
  mutation DeleteItemGroup(
    $input: DeleteItemGroupInput!
    $condition: ModelItemGroupConditionInput
  ) {
    deleteItemGroup(input: $input, condition: $condition) {
      id
      name
      description
      extensions
      deleted
      createdAt
      updatedAt
      item {
        items {
          id
          itemId
          itemGroupId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      nextItemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      prevItemGroup {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        item {
          nextToken
        }
        nextItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItemGroup {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const createItemPriceList = /* GraphQL */ `
  mutation CreateItemPriceList(
    $input: CreateItemPriceListInput!
    $condition: ModelItemPriceListConditionInput
  ) {
    createItemPriceList(input: $input, condition: $condition) {
      id
      itemId
      priceListId
      price
      deleted
      createdAt
      updatedAt
      currency {
        id
        name
        symbol
        createdAt
        updatedAt
        owner
      }
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      priceList {
        id
        name
        extensions
        deleted
        visible
        createdAt
        updatedAt
        item {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updateItemPriceList = /* GraphQL */ `
  mutation UpdateItemPriceList(
    $input: UpdateItemPriceListInput!
    $condition: ModelItemPriceListConditionInput
  ) {
    updateItemPriceList(input: $input, condition: $condition) {
      id
      itemId
      priceListId
      price
      deleted
      createdAt
      updatedAt
      currency {
        id
        name
        symbol
        createdAt
        updatedAt
        owner
      }
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      priceList {
        id
        name
        extensions
        deleted
        visible
        createdAt
        updatedAt
        item {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deleteItemPriceList = /* GraphQL */ `
  mutation DeleteItemPriceList(
    $input: DeleteItemPriceListInput!
    $condition: ModelItemPriceListConditionInput
  ) {
    deleteItemPriceList(input: $input, condition: $condition) {
      id
      itemId
      priceListId
      price
      deleted
      createdAt
      updatedAt
      currency {
        id
        name
        symbol
        createdAt
        updatedAt
        owner
      }
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
      priceList {
        id
        name
        extensions
        deleted
        visible
        createdAt
        updatedAt
        item {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createPriceList = /* GraphQL */ `
  mutation CreatePriceList(
    $input: CreatePriceListInput!
    $condition: ModelPriceListConditionInput
  ) {
    createPriceList(input: $input, condition: $condition) {
      id
      name
      extensions
      deleted
      visible
      createdAt
      updatedAt
      item {
        items {
          id
          itemId
          priceListId
          price
          deleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const updatePriceList = /* GraphQL */ `
  mutation UpdatePriceList(
    $input: UpdatePriceListInput!
    $condition: ModelPriceListConditionInput
  ) {
    updatePriceList(input: $input, condition: $condition) {
      id
      name
      extensions
      deleted
      visible
      createdAt
      updatedAt
      item {
        items {
          id
          itemId
          priceListId
          price
          deleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const deletePriceList = /* GraphQL */ `
  mutation DeletePriceList(
    $input: DeletePriceListInput!
    $condition: ModelPriceListConditionInput
  ) {
    deletePriceList(input: $input, condition: $condition) {
      id
      name
      extensions
      deleted
      visible
      createdAt
      updatedAt
      item {
        items {
          id
          itemId
          priceListId
          price
          deleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const createSalesInvoice = /* GraphQL */ `
  mutation CreateSalesInvoice(
    $input: CreateSalesInvoiceInput!
    $condition: ModelSalesInvoiceConditionInput
  ) {
    createSalesInvoice(input: $input, condition: $condition) {
      id
      customerId
      number
      date
      customer {
        id
        description
        deleted
        visible
        companyName
        companyVat
        firstName
        lastName
        createdAt
        updatedAt
        party {
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
        owner
      }
      salesInvoiceLines {
        id
        salesInvoiceId
        salesInvoice {
          id
          customerId
          number
          date
          extensions
          status
          createdAt
          updatedAt
          owner
        }
        percentageDiscount
        price
        quantity
        extensions
        createdAt
        updatedAt
        item {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      extensions
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSalesInvoice = /* GraphQL */ `
  mutation UpdateSalesInvoice(
    $input: UpdateSalesInvoiceInput!
    $condition: ModelSalesInvoiceConditionInput
  ) {
    updateSalesInvoice(input: $input, condition: $condition) {
      id
      customerId
      number
      date
      customer {
        id
        description
        deleted
        visible
        companyName
        companyVat
        firstName
        lastName
        createdAt
        updatedAt
        party {
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
        owner
      }
      salesInvoiceLines {
        id
        salesInvoiceId
        salesInvoice {
          id
          customerId
          number
          date
          extensions
          status
          createdAt
          updatedAt
          owner
        }
        percentageDiscount
        price
        quantity
        extensions
        createdAt
        updatedAt
        item {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      extensions
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSalesInvoice = /* GraphQL */ `
  mutation DeleteSalesInvoice(
    $input: DeleteSalesInvoiceInput!
    $condition: ModelSalesInvoiceConditionInput
  ) {
    deleteSalesInvoice(input: $input, condition: $condition) {
      id
      customerId
      number
      date
      customer {
        id
        description
        deleted
        visible
        companyName
        companyVat
        firstName
        lastName
        createdAt
        updatedAt
        party {
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
        owner
      }
      salesInvoiceLines {
        id
        salesInvoiceId
        salesInvoice {
          id
          customerId
          number
          date
          extensions
          status
          createdAt
          updatedAt
          owner
        }
        percentageDiscount
        price
        quantity
        extensions
        createdAt
        updatedAt
        item {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
      }
      extensions
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSalesInvoiceLine = /* GraphQL */ `
  mutation CreateSalesInvoiceLine(
    $input: CreateSalesInvoiceLineInput!
    $condition: ModelSalesInvoiceLineConditionInput
  ) {
    createSalesInvoiceLine(input: $input, condition: $condition) {
      id
      salesInvoiceId
      salesInvoice {
        id
        customerId
        number
        date
        customer {
          id
          description
          deleted
          visible
          companyName
          companyVat
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        salesInvoiceLines {
          id
          salesInvoiceId
          percentageDiscount
          price
          quantity
          extensions
          createdAt
          updatedAt
          owner
        }
        extensions
        status
        createdAt
        updatedAt
        owner
      }
      percentageDiscount
      price
      quantity
      extensions
      createdAt
      updatedAt
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateSalesInvoiceLine = /* GraphQL */ `
  mutation UpdateSalesInvoiceLine(
    $input: UpdateSalesInvoiceLineInput!
    $condition: ModelSalesInvoiceLineConditionInput
  ) {
    updateSalesInvoiceLine(input: $input, condition: $condition) {
      id
      salesInvoiceId
      salesInvoice {
        id
        customerId
        number
        date
        customer {
          id
          description
          deleted
          visible
          companyName
          companyVat
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        salesInvoiceLines {
          id
          salesInvoiceId
          percentageDiscount
          price
          quantity
          extensions
          createdAt
          updatedAt
          owner
        }
        extensions
        status
        createdAt
        updatedAt
        owner
      }
      percentageDiscount
      price
      quantity
      extensions
      createdAt
      updatedAt
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteSalesInvoiceLine = /* GraphQL */ `
  mutation DeleteSalesInvoiceLine(
    $input: DeleteSalesInvoiceLineInput!
    $condition: ModelSalesInvoiceLineConditionInput
  ) {
    deleteSalesInvoiceLine(input: $input, condition: $condition) {
      id
      salesInvoiceId
      salesInvoice {
        id
        customerId
        number
        date
        customer {
          id
          description
          deleted
          visible
          companyName
          companyVat
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        salesInvoiceLines {
          id
          salesInvoiceId
          percentageDiscount
          price
          quantity
          extensions
          createdAt
          updatedAt
          owner
        }
        extensions
        status
        createdAt
        updatedAt
        owner
      }
      percentageDiscount
      price
      quantity
      extensions
      createdAt
      updatedAt
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
      owner
    }
  }
`;
export const createSalesOrder = /* GraphQL */ `
  mutation CreateSalesOrder(
    $input: CreateSalesOrderInput!
    $condition: ModelSalesOrderConditionInput
  ) {
    createSalesOrder(input: $input, condition: $condition) {
      id
      customerId
      customer {
        id
        description
        deleted
        visible
        companyName
        companyVat
        firstName
        lastName
        createdAt
        updatedAt
        party {
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
        owner
      }
      notes
      extensions
      deleted
      createdAt
      updatedAt
      owner
      salesOrderLines {
        items {
          id
          salesOrderId
          itemId
          price
          quantity
          extensions
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateSalesOrder = /* GraphQL */ `
  mutation UpdateSalesOrder(
    $input: UpdateSalesOrderInput!
    $condition: ModelSalesOrderConditionInput
  ) {
    updateSalesOrder(input: $input, condition: $condition) {
      id
      customerId
      customer {
        id
        description
        deleted
        visible
        companyName
        companyVat
        firstName
        lastName
        createdAt
        updatedAt
        party {
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
        owner
      }
      notes
      extensions
      deleted
      createdAt
      updatedAt
      owner
      salesOrderLines {
        items {
          id
          salesOrderId
          itemId
          price
          quantity
          extensions
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteSalesOrder = /* GraphQL */ `
  mutation DeleteSalesOrder(
    $input: DeleteSalesOrderInput!
    $condition: ModelSalesOrderConditionInput
  ) {
    deleteSalesOrder(input: $input, condition: $condition) {
      id
      customerId
      customer {
        id
        description
        deleted
        visible
        companyName
        companyVat
        firstName
        lastName
        createdAt
        updatedAt
        party {
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
        owner
      }
      notes
      extensions
      deleted
      createdAt
      updatedAt
      owner
      salesOrderLines {
        items {
          id
          salesOrderId
          itemId
          price
          quantity
          extensions
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createSalesOrderLine = /* GraphQL */ `
  mutation CreateSalesOrderLine(
    $input: CreateSalesOrderLineInput!
    $condition: ModelSalesOrderLineConditionInput
  ) {
    createSalesOrderLine(input: $input, condition: $condition) {
      id
      salesOrderId
      itemId
      price
      quantity
      extensions
      createdAt
      updatedAt
      salesOrder {
        id
        customerId
        customer {
          id
          description
          deleted
          visible
          companyName
          companyVat
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        notes
        extensions
        deleted
        createdAt
        updatedAt
        owner
        salesOrderLines {
          nextToken
        }
      }
      owner
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
    }
  }
`;
export const updateSalesOrderLine = /* GraphQL */ `
  mutation UpdateSalesOrderLine(
    $input: UpdateSalesOrderLineInput!
    $condition: ModelSalesOrderLineConditionInput
  ) {
    updateSalesOrderLine(input: $input, condition: $condition) {
      id
      salesOrderId
      itemId
      price
      quantity
      extensions
      createdAt
      updatedAt
      salesOrder {
        id
        customerId
        customer {
          id
          description
          deleted
          visible
          companyName
          companyVat
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        notes
        extensions
        deleted
        createdAt
        updatedAt
        owner
        salesOrderLines {
          nextToken
        }
      }
      owner
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
    }
  }
`;
export const deleteSalesOrderLine = /* GraphQL */ `
  mutation DeleteSalesOrderLine(
    $input: DeleteSalesOrderLineInput!
    $condition: ModelSalesOrderLineConditionInput
  ) {
    deleteSalesOrderLine(input: $input, condition: $condition) {
      id
      salesOrderId
      itemId
      price
      quantity
      extensions
      createdAt
      updatedAt
      salesOrder {
        id
        customerId
        customer {
          id
          description
          deleted
          visible
          companyName
          companyVat
          firstName
          lastName
          createdAt
          updatedAt
          owner
        }
        notes
        extensions
        deleted
        createdAt
        updatedAt
        owner
        salesOrderLines {
          nextToken
        }
      }
      owner
      item {
        id
        name
        description
        extensions
        deleted
        createdAt
        updatedAt
        nextItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        prevItem {
          id
          name
          description
          extensions
          deleted
          createdAt
          updatedAt
          owner
        }
        owner
        itemGroup {
          nextToken
        }
        priceList {
          nextToken
        }
      }
    }
  }
`;

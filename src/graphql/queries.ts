/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
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
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPurchaseOrder = /* GraphQL */ `
  query GetPurchaseOrder($id: ID!) {
    getPurchaseOrder(id: $id) {
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
export const listPurchaseOrders = /* GraphQL */ `
  query ListPurchaseOrders(
    $filter: ModelPurchaseOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchaseOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPurchaseOrderLine = /* GraphQL */ `
  query GetPurchaseOrderLine($id: ID!) {
    getPurchaseOrderLine(id: $id) {
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
export const listPurchaseOrderLines = /* GraphQL */ `
  query ListPurchaseOrderLines(
    $filter: ModelPurchaseOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchaseOrderLines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        purchaseOrder {
          id
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
      nextToken
    }
  }
`;
export const getSalesInvoice = /* GraphQL */ `
  query GetSalesInvoice($id: ID!) {
    getSalesInvoice(id: $id) {
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
export const listSalesInvoices = /* GraphQL */ `
  query ListSalesInvoices(
    $filter: ModelSalesInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSalesInvoiceLine = /* GraphQL */ `
  query GetSalesInvoiceLine($id: ID!) {
    getSalesInvoiceLine(id: $id) {
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
export const listSalesInvoiceLines = /* GraphQL */ `
  query ListSalesInvoiceLines(
    $filter: ModelSalesInvoiceLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesInvoiceLines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCurrencys = /* GraphQL */ `
  query ListCurrencys(
    $filter: ModelCurrencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCurrencys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        symbol
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCurrency = /* GraphQL */ `
  query GetCurrency($id: ID!) {
    getCurrency(id: $id) {
      id
      name
      symbol
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
export const listSalesOrders = /* GraphQL */ `
  query ListSalesOrders(
    $filter: ModelSalesOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSalesOrder = /* GraphQL */ `
  query GetSalesOrder($id: ID!) {
    getSalesOrder(id: $id) {
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
export const getSalesOrderLine = /* GraphQL */ `
  query GetSalesOrderLine($id: ID!) {
    getSalesOrderLine(id: $id) {
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
export const listSalesOrderLines = /* GraphQL */ `
  query ListSalesOrderLines(
    $filter: ModelSalesOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOrderLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          notes
          extensions
          deleted
          createdAt
          updatedAt
          owner
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
          owner
        }
      }
      nextToken
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const getItemItemGroup = /* GraphQL */ `
  query GetItemItemGroup($id: ID!) {
    getItemItemGroup(id: $id) {
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
export const listItemItemGroups = /* GraphQL */ `
  query ListItemItemGroups(
    $filter: ModelItemItemGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemItemGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
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
          owner
        }
      }
      nextToken
    }
  }
`;
export const listItemGroups = /* GraphQL */ `
  query ListItemGroups(
    $filter: ModelItemGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getItemGroup = /* GraphQL */ `
  query GetItemGroup($id: ID!) {
    getItemGroup(id: $id) {
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
export const getItemPriceList = /* GraphQL */ `
  query GetItemPriceList($id: ID!) {
    getItemPriceList(id: $id) {
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
export const listItemPriceLists = /* GraphQL */ `
  query ListItemPriceLists(
    $filter: ModelItemPriceListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemPriceLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
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
          owner
        }
      }
      nextToken
    }
  }
`;
export const listPriceLists = /* GraphQL */ `
  query ListPriceLists(
    $filter: ModelPriceListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPriceLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPriceList = /* GraphQL */ `
  query GetPriceList($id: ID!) {
    getPriceList(id: $id) {
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

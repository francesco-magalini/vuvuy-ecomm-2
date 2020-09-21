/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor($owner: String) {
    onCreateVendor(owner: $owner) {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor($owner: String) {
    onUpdateVendor(owner: $owner) {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor($owner: String) {
    onDeleteVendor(owner: $owner) {
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
export const onCreatePurchaseOrder = /* GraphQL */ `
  subscription OnCreatePurchaseOrder($owner: String) {
    onCreatePurchaseOrder(owner: $owner) {
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
export const onUpdatePurchaseOrder = /* GraphQL */ `
  subscription OnUpdatePurchaseOrder($owner: String) {
    onUpdatePurchaseOrder(owner: $owner) {
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
export const onDeletePurchaseOrder = /* GraphQL */ `
  subscription OnDeletePurchaseOrder($owner: String) {
    onDeletePurchaseOrder(owner: $owner) {
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
export const onCreatePurchaseOrderLine = /* GraphQL */ `
  subscription OnCreatePurchaseOrderLine($owner: String) {
    onCreatePurchaseOrderLine(owner: $owner) {
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
export const onUpdatePurchaseOrderLine = /* GraphQL */ `
  subscription OnUpdatePurchaseOrderLine($owner: String) {
    onUpdatePurchaseOrderLine(owner: $owner) {
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
export const onDeletePurchaseOrderLine = /* GraphQL */ `
  subscription OnDeletePurchaseOrderLine($owner: String) {
    onDeletePurchaseOrderLine(owner: $owner) {
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
export const onCreateSalesInvoice = /* GraphQL */ `
  subscription OnCreateSalesInvoice($owner: String) {
    onCreateSalesInvoice(owner: $owner) {
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
export const onUpdateSalesInvoice = /* GraphQL */ `
  subscription OnUpdateSalesInvoice($owner: String) {
    onUpdateSalesInvoice(owner: $owner) {
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
export const onDeleteSalesInvoice = /* GraphQL */ `
  subscription OnDeleteSalesInvoice($owner: String) {
    onDeleteSalesInvoice(owner: $owner) {
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
export const onCreateSalesInvoiceLine = /* GraphQL */ `
  subscription OnCreateSalesInvoiceLine($owner: String) {
    onCreateSalesInvoiceLine(owner: $owner) {
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
export const onUpdateSalesInvoiceLine = /* GraphQL */ `
  subscription OnUpdateSalesInvoiceLine($owner: String) {
    onUpdateSalesInvoiceLine(owner: $owner) {
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
export const onDeleteSalesInvoiceLine = /* GraphQL */ `
  subscription OnDeleteSalesInvoiceLine($owner: String) {
    onDeleteSalesInvoiceLine(owner: $owner) {
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
export const onCreateCurrency = /* GraphQL */ `
  subscription OnCreateCurrency($owner: String) {
    onCreateCurrency(owner: $owner) {
      id
      name
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCurrency = /* GraphQL */ `
  subscription OnUpdateCurrency($owner: String) {
    onUpdateCurrency(owner: $owner) {
      id
      name
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCurrency = /* GraphQL */ `
  subscription OnDeleteCurrency($owner: String) {
    onDeleteCurrency(owner: $owner) {
      id
      name
      symbol
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty($owner: String) {
    onCreateParty(owner: $owner) {
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
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty($owner: String) {
    onUpdateParty(owner: $owner) {
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
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty($owner: String) {
    onDeleteParty(owner: $owner) {
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
export const onCreateSalesOrder = /* GraphQL */ `
  subscription OnCreateSalesOrder($owner: String) {
    onCreateSalesOrder(owner: $owner) {
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
export const onUpdateSalesOrder = /* GraphQL */ `
  subscription OnUpdateSalesOrder($owner: String) {
    onUpdateSalesOrder(owner: $owner) {
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
export const onDeleteSalesOrder = /* GraphQL */ `
  subscription OnDeleteSalesOrder($owner: String) {
    onDeleteSalesOrder(owner: $owner) {
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
export const onCreateSalesOrderLine = /* GraphQL */ `
  subscription OnCreateSalesOrderLine($owner: String) {
    onCreateSalesOrderLine(owner: $owner) {
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
export const onUpdateSalesOrderLine = /* GraphQL */ `
  subscription OnUpdateSalesOrderLine($owner: String) {
    onUpdateSalesOrderLine(owner: $owner) {
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
export const onDeleteSalesOrderLine = /* GraphQL */ `
  subscription OnDeleteSalesOrderLine($owner: String) {
    onDeleteSalesOrderLine(owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String) {
    onCreateItem(owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String) {
    onUpdateItem(owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String) {
    onDeleteItem(owner: $owner) {
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
export const onCreateItemItemGroup = /* GraphQL */ `
  subscription OnCreateItemItemGroup($owner: String) {
    onCreateItemItemGroup(owner: $owner) {
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
export const onUpdateItemItemGroup = /* GraphQL */ `
  subscription OnUpdateItemItemGroup($owner: String) {
    onUpdateItemItemGroup(owner: $owner) {
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
export const onDeleteItemItemGroup = /* GraphQL */ `
  subscription OnDeleteItemItemGroup($owner: String) {
    onDeleteItemItemGroup(owner: $owner) {
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
export const onCreateItemGroup = /* GraphQL */ `
  subscription OnCreateItemGroup($owner: String) {
    onCreateItemGroup(owner: $owner) {
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
export const onUpdateItemGroup = /* GraphQL */ `
  subscription OnUpdateItemGroup($owner: String) {
    onUpdateItemGroup(owner: $owner) {
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
export const onDeleteItemGroup = /* GraphQL */ `
  subscription OnDeleteItemGroup($owner: String) {
    onDeleteItemGroup(owner: $owner) {
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
export const onCreateItemPriceList = /* GraphQL */ `
  subscription OnCreateItemPriceList($owner: String) {
    onCreateItemPriceList(owner: $owner) {
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
export const onUpdateItemPriceList = /* GraphQL */ `
  subscription OnUpdateItemPriceList($owner: String) {
    onUpdateItemPriceList(owner: $owner) {
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
export const onDeleteItemPriceList = /* GraphQL */ `
  subscription OnDeleteItemPriceList($owner: String) {
    onDeleteItemPriceList(owner: $owner) {
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
export const onCreatePriceList = /* GraphQL */ `
  subscription OnCreatePriceList($owner: String) {
    onCreatePriceList(owner: $owner) {
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
export const onUpdatePriceList = /* GraphQL */ `
  subscription OnUpdatePriceList($owner: String) {
    onUpdatePriceList(owner: $owner) {
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
export const onDeletePriceList = /* GraphQL */ `
  subscription OnDeletePriceList($owner: String) {
    onDeletePriceList(owner: $owner) {
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

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCurrencyInput = {
  id?: string | null,
  name?: string | null,
  symbol?: string | null,
};

export type ModelCurrencyConditionInput = {
  name?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  and?: Array< ModelCurrencyConditionInput | null > | null,
  or?: Array< ModelCurrencyConditionInput | null > | null,
  not?: ModelCurrencyConditionInput | null,
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

export type UpdateCurrencyInput = {
  id: string,
  name?: string | null,
  symbol?: string | null,
};

export type DeleteCurrencyInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  partyId: string,
  enabled?: boolean | null,
};

export type ModelUserConditionInput = {
  partyId?: ModelIDInput | null,
  enabled?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  partyId?: string | null,
  enabled?: boolean | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

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

export type CreateCustomerInput = {
  id?: string | null,
  description?: string | null,
  deleted?: boolean | null,
  visible?: boolean | null,
  companyName?: string | null,
  companyVat?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  customerPartyId?: string | null,
};

export type ModelCustomerConditionInput = {
  description?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  visible?: ModelBooleanInput | null,
  companyName?: ModelStringInput | null,
  companyVat?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerInput = {
  id: string,
  description?: string | null,
  deleted?: boolean | null,
  visible?: boolean | null,
  companyName?: string | null,
  companyVat?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  customerPartyId?: string | null,
};

export type DeleteCustomerInput = {
  id?: string | null,
};

export type CreateVendorInput = {
  id?: string | null,
  description?: string | null,
  deleted?: boolean | null,
  vendorPartyId: string,
};

export type ModelVendorConditionInput = {
  description?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
};

export type UpdateVendorInput = {
  id: string,
  description?: string | null,
  deleted?: boolean | null,
  vendorPartyId?: string | null,
};

export type DeleteVendorInput = {
  id?: string | null,
};

export type CreatePurchaseOrderInput = {
  id?: string | null,
  number?: string | null,
  deleted?: boolean | null,
  purchaseOrderVendorIdId: string,
};

export type ModelPurchaseOrderConditionInput = {
  number?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelPurchaseOrderConditionInput | null > | null,
  or?: Array< ModelPurchaseOrderConditionInput | null > | null,
  not?: ModelPurchaseOrderConditionInput | null,
};

export type UpdatePurchaseOrderInput = {
  id: string,
  number?: string | null,
  deleted?: boolean | null,
  purchaseOrderVendorIdId?: string | null,
};

export type DeletePurchaseOrderInput = {
  id?: string | null,
};

export type CreatePurchaseOrderLineInput = {
  id?: string | null,
  extensions?: string | null,
  purchaseOrderLinePurchaseOrderId: string,
};

export type ModelPurchaseOrderLineConditionInput = {
  extensions?: ModelStringInput | null,
  and?: Array< ModelPurchaseOrderLineConditionInput | null > | null,
  or?: Array< ModelPurchaseOrderLineConditionInput | null > | null,
  not?: ModelPurchaseOrderLineConditionInput | null,
};

export type UpdatePurchaseOrderLineInput = {
  id: string,
  extensions?: string | null,
  purchaseOrderLinePurchaseOrderId?: string | null,
};

export type DeletePurchaseOrderLineInput = {
  id?: string | null,
};

export type CreateItemInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
  itemNextItemId?: string | null,
  itemPrevItemId?: string | null,
};

export type ModelItemConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type UpdateItemInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
  itemNextItemId?: string | null,
  itemPrevItemId?: string | null,
};

export type DeleteItemInput = {
  id?: string | null,
};

export type CreateItemItemGroupInput = {
  id?: string | null,
  itemId: string,
  itemGroupId: string,
};

export type ModelItemItemGroupConditionInput = {
  itemId?: ModelIDInput | null,
  itemGroupId?: ModelIDInput | null,
  and?: Array< ModelItemItemGroupConditionInput | null > | null,
  or?: Array< ModelItemItemGroupConditionInput | null > | null,
  not?: ModelItemItemGroupConditionInput | null,
};

export type UpdateItemItemGroupInput = {
  id: string,
  itemId?: string | null,
  itemGroupId?: string | null,
};

export type DeleteItemItemGroupInput = {
  id?: string | null,
};

export type CreateItemGroupInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
  itemGroupNextItemGroupId?: string | null,
  itemGroupPrevItemGroupId?: string | null,
};

export type ModelItemGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelItemGroupConditionInput | null > | null,
  or?: Array< ModelItemGroupConditionInput | null > | null,
  not?: ModelItemGroupConditionInput | null,
};

export type UpdateItemGroupInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
  itemGroupNextItemGroupId?: string | null,
  itemGroupPrevItemGroupId?: string | null,
};

export type DeleteItemGroupInput = {
  id?: string | null,
};

export type CreateItemPriceListInput = {
  id?: string | null,
  itemId: string,
  priceListId: string,
  price?: number | null,
  deleted?: boolean | null,
  itemPriceListCurrencyId?: string | null,
};

export type ModelItemPriceListConditionInput = {
  itemId?: ModelIDInput | null,
  priceListId?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelItemPriceListConditionInput | null > | null,
  or?: Array< ModelItemPriceListConditionInput | null > | null,
  not?: ModelItemPriceListConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateItemPriceListInput = {
  id: string,
  itemId?: string | null,
  priceListId?: string | null,
  price?: number | null,
  deleted?: boolean | null,
  itemPriceListCurrencyId?: string | null,
};

export type DeleteItemPriceListInput = {
  id?: string | null,
};

export type CreatePriceListInput = {
  id?: string | null,
  name?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
  visible?: boolean | null,
};

export type ModelPriceListConditionInput = {
  name?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  visible?: ModelBooleanInput | null,
  and?: Array< ModelPriceListConditionInput | null > | null,
  or?: Array< ModelPriceListConditionInput | null > | null,
  not?: ModelPriceListConditionInput | null,
};

export type UpdatePriceListInput = {
  id: string,
  name?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
  visible?: boolean | null,
};

export type DeletePriceListInput = {
  id?: string | null,
};

export type CreateSalesInvoiceInput = {
  id?: string | null,
  customerId: string,
  number?: string | null,
  date?: string | null,
  extensions?: string | null,
  status?: number | null,
};

export type ModelSalesInvoiceConditionInput = {
  customerId?: ModelIDInput | null,
  number?: ModelStringInput | null,
  date?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelSalesInvoiceConditionInput | null > | null,
  or?: Array< ModelSalesInvoiceConditionInput | null > | null,
  not?: ModelSalesInvoiceConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSalesInvoiceInput = {
  id: string,
  customerId?: string | null,
  number?: string | null,
  date?: string | null,
  extensions?: string | null,
  status?: number | null,
};

export type DeleteSalesInvoiceInput = {
  id?: string | null,
};

export type CreateSalesInvoiceLineInput = {
  id?: string | null,
  salesInvoiceId: string,
  percentageDiscount?: number | null,
  price?: number | null,
  quantity?: number | null,
  extensions?: string | null,
  salesInvoiceLineItemId?: string | null,
};

export type ModelSalesInvoiceLineConditionInput = {
  salesInvoiceId?: ModelIDInput | null,
  percentageDiscount?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  extensions?: ModelStringInput | null,
  and?: Array< ModelSalesInvoiceLineConditionInput | null > | null,
  or?: Array< ModelSalesInvoiceLineConditionInput | null > | null,
  not?: ModelSalesInvoiceLineConditionInput | null,
};

export type UpdateSalesInvoiceLineInput = {
  id: string,
  salesInvoiceId?: string | null,
  percentageDiscount?: number | null,
  price?: number | null,
  quantity?: number | null,
  extensions?: string | null,
  salesInvoiceLineItemId?: string | null,
};

export type DeleteSalesInvoiceLineInput = {
  id?: string | null,
};

export type CreateSalesOrderInput = {
  id?: string | null,
  customerId: string,
  notes?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
};

export type ModelSalesOrderConditionInput = {
  customerId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelSalesOrderConditionInput | null > | null,
  or?: Array< ModelSalesOrderConditionInput | null > | null,
  not?: ModelSalesOrderConditionInput | null,
};

export type UpdateSalesOrderInput = {
  id: string,
  customerId?: string | null,
  notes?: string | null,
  extensions?: string | null,
  deleted?: boolean | null,
};

export type DeleteSalesOrderInput = {
  id?: string | null,
};

export type CreateSalesOrderLineInput = {
  id?: string | null,
  salesOrderId: string,
  itemId: string,
  price?: number | null,
  quantity?: number | null,
  extensions?: string | null,
};

export type ModelSalesOrderLineConditionInput = {
  salesOrderId?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  extensions?: ModelStringInput | null,
  and?: Array< ModelSalesOrderLineConditionInput | null > | null,
  or?: Array< ModelSalesOrderLineConditionInput | null > | null,
  not?: ModelSalesOrderLineConditionInput | null,
};

export type UpdateSalesOrderLineInput = {
  id: string,
  salesOrderId?: string | null,
  itemId?: string | null,
  price?: number | null,
  quantity?: number | null,
  extensions?: string | null,
};

export type DeleteSalesOrderLineInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  partyId?: ModelIDInput | null,
  enabled?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  visible?: ModelBooleanInput | null,
  companyName?: ModelStringInput | null,
  companyVat?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
};

export type ModelPurchaseOrderFilterInput = {
  id?: ModelIDInput | null,
  number?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelPurchaseOrderFilterInput | null > | null,
  or?: Array< ModelPurchaseOrderFilterInput | null > | null,
  not?: ModelPurchaseOrderFilterInput | null,
};

export type ModelPurchaseOrderLineFilterInput = {
  id?: ModelIDInput | null,
  extensions?: ModelStringInput | null,
  and?: Array< ModelPurchaseOrderLineFilterInput | null > | null,
  or?: Array< ModelPurchaseOrderLineFilterInput | null > | null,
  not?: ModelPurchaseOrderLineFilterInput | null,
};

export type ModelSalesInvoiceFilterInput = {
  id?: ModelIDInput | null,
  customerId?: ModelIDInput | null,
  number?: ModelStringInput | null,
  date?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelSalesInvoiceFilterInput | null > | null,
  or?: Array< ModelSalesInvoiceFilterInput | null > | null,
  not?: ModelSalesInvoiceFilterInput | null,
};

export type ModelSalesInvoiceLineFilterInput = {
  id?: ModelIDInput | null,
  salesInvoiceId?: ModelIDInput | null,
  percentageDiscount?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  extensions?: ModelStringInput | null,
  and?: Array< ModelSalesInvoiceLineFilterInput | null > | null,
  or?: Array< ModelSalesInvoiceLineFilterInput | null > | null,
  not?: ModelSalesInvoiceLineFilterInput | null,
};

export type ModelCurrencyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  and?: Array< ModelCurrencyFilterInput | null > | null,
  or?: Array< ModelCurrencyFilterInput | null > | null,
  not?: ModelCurrencyFilterInput | null,
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

export type ModelSalesOrderFilterInput = {
  id?: ModelIDInput | null,
  customerId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelSalesOrderFilterInput | null > | null,
  or?: Array< ModelSalesOrderFilterInput | null > | null,
  not?: ModelSalesOrderFilterInput | null,
};

export type ModelSalesOrderLineFilterInput = {
  id?: ModelIDInput | null,
  salesOrderId?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  extensions?: ModelStringInput | null,
  and?: Array< ModelSalesOrderLineFilterInput | null > | null,
  or?: Array< ModelSalesOrderLineFilterInput | null > | null,
  not?: ModelSalesOrderLineFilterInput | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelItemItemGroupFilterInput = {
  id?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  itemGroupId?: ModelIDInput | null,
  and?: Array< ModelItemItemGroupFilterInput | null > | null,
  or?: Array< ModelItemItemGroupFilterInput | null > | null,
  not?: ModelItemItemGroupFilterInput | null,
};

export type ModelItemGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelItemGroupFilterInput | null > | null,
  or?: Array< ModelItemGroupFilterInput | null > | null,
  not?: ModelItemGroupFilterInput | null,
};

export type ModelItemPriceListFilterInput = {
  id?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  priceListId?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  deleted?: ModelBooleanInput | null,
  and?: Array< ModelItemPriceListFilterInput | null > | null,
  or?: Array< ModelItemPriceListFilterInput | null > | null,
  not?: ModelItemPriceListFilterInput | null,
};

export type ModelPriceListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  extensions?: ModelStringInput | null,
  deleted?: ModelBooleanInput | null,
  visible?: ModelBooleanInput | null,
  and?: Array< ModelPriceListFilterInput | null > | null,
  or?: Array< ModelPriceListFilterInput | null > | null,
  not?: ModelPriceListFilterInput | null,
};

export type CreateCurrencyMutationVariables = {
  input: CreateCurrencyInput,
  condition?: ModelCurrencyConditionInput | null,
};

export type CreateCurrencyMutation = {
  createCurrency:  {
    __typename: "Currency",
    id: string,
    name: string | null,
    symbol: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateCurrencyMutationVariables = {
  input: UpdateCurrencyInput,
  condition?: ModelCurrencyConditionInput | null,
};

export type UpdateCurrencyMutation = {
  updateCurrency:  {
    __typename: "Currency",
    id: string,
    name: string | null,
    symbol: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteCurrencyMutationVariables = {
  input: DeleteCurrencyInput,
  condition?: ModelCurrencyConditionInput | null,
};

export type DeleteCurrencyMutation = {
  deleteCurrency:  {
    __typename: "Currency",
    id: string,
    name: string | null,
    symbol: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    partyId: string,
    enabled: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    party:  {
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
    },
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    partyId: string,
    enabled: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    party:  {
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
    },
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    partyId: string,
    enabled: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    party:  {
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
    },
  } | null,
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

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer:  {
    __typename: "Customer",
    id: string,
    description: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    companyName: string | null,
    companyVat: string | null,
    firstName: string | null,
    lastName: string | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    owner: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer:  {
    __typename: "Customer",
    id: string,
    description: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    companyName: string | null,
    companyVat: string | null,
    firstName: string | null,
    lastName: string | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    owner: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer:  {
    __typename: "Customer",
    id: string,
    description: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    companyName: string | null,
    companyVat: string | null,
    firstName: string | null,
    lastName: string | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    owner: string | null,
  } | null,
};

export type CreateVendorMutationVariables = {
  input: CreateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type CreateVendorMutation = {
  createVendor:  {
    __typename: "Vendor",
    id: string,
    description: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    },
    owner: string | null,
  } | null,
};

export type UpdateVendorMutationVariables = {
  input: UpdateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type UpdateVendorMutation = {
  updateVendor:  {
    __typename: "Vendor",
    id: string,
    description: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    },
    owner: string | null,
  } | null,
};

export type DeleteVendorMutationVariables = {
  input: DeleteVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type DeleteVendorMutation = {
  deleteVendor:  {
    __typename: "Vendor",
    id: string,
    description: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    },
    owner: string | null,
  } | null,
};

export type CreatePurchaseOrderMutationVariables = {
  input: CreatePurchaseOrderInput,
  condition?: ModelPurchaseOrderConditionInput | null,
};

export type CreatePurchaseOrderMutation = {
  createPurchaseOrder:  {
    __typename: "PurchaseOrder",
    id: string,
    vendorId:  {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    },
    number: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdatePurchaseOrderMutationVariables = {
  input: UpdatePurchaseOrderInput,
  condition?: ModelPurchaseOrderConditionInput | null,
};

export type UpdatePurchaseOrderMutation = {
  updatePurchaseOrder:  {
    __typename: "PurchaseOrder",
    id: string,
    vendorId:  {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    },
    number: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeletePurchaseOrderMutationVariables = {
  input: DeletePurchaseOrderInput,
  condition?: ModelPurchaseOrderConditionInput | null,
};

export type DeletePurchaseOrderMutation = {
  deletePurchaseOrder:  {
    __typename: "PurchaseOrder",
    id: string,
    vendorId:  {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    },
    number: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreatePurchaseOrderLineMutationVariables = {
  input: CreatePurchaseOrderLineInput,
  condition?: ModelPurchaseOrderLineConditionInput | null,
};

export type CreatePurchaseOrderLineMutation = {
  createPurchaseOrderLine:  {
    __typename: "PurchaseOrderLine",
    id: string,
    purchaseOrder:  {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdatePurchaseOrderLineMutationVariables = {
  input: UpdatePurchaseOrderLineInput,
  condition?: ModelPurchaseOrderLineConditionInput | null,
};

export type UpdatePurchaseOrderLineMutation = {
  updatePurchaseOrderLine:  {
    __typename: "PurchaseOrderLine",
    id: string,
    purchaseOrder:  {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeletePurchaseOrderLineMutationVariables = {
  input: DeletePurchaseOrderLineInput,
  condition?: ModelPurchaseOrderLineConditionInput | null,
};

export type DeletePurchaseOrderLineMutation = {
  deletePurchaseOrderLine:  {
    __typename: "PurchaseOrderLine",
    id: string,
    purchaseOrder:  {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem:  {
    __typename: "Item",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    nextItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    prevItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
    itemGroup:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    priceList:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem:  {
    __typename: "Item",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    nextItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    prevItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
    itemGroup:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    priceList:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem:  {
    __typename: "Item",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    nextItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    prevItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
    itemGroup:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    priceList:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateItemItemGroupMutationVariables = {
  input: CreateItemItemGroupInput,
  condition?: ModelItemItemGroupConditionInput | null,
};

export type CreateItemItemGroupMutation = {
  createItemItemGroup:  {
    __typename: "ItemItemGroup",
    id: string,
    itemId: string,
    itemGroupId: string,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    itemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type UpdateItemItemGroupMutationVariables = {
  input: UpdateItemItemGroupInput,
  condition?: ModelItemItemGroupConditionInput | null,
};

export type UpdateItemItemGroupMutation = {
  updateItemItemGroup:  {
    __typename: "ItemItemGroup",
    id: string,
    itemId: string,
    itemGroupId: string,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    itemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type DeleteItemItemGroupMutationVariables = {
  input: DeleteItemItemGroupInput,
  condition?: ModelItemItemGroupConditionInput | null,
};

export type DeleteItemItemGroupMutation = {
  deleteItemItemGroup:  {
    __typename: "ItemItemGroup",
    id: string,
    itemId: string,
    itemGroupId: string,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    itemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type CreateItemGroupMutationVariables = {
  input: CreateItemGroupInput,
  condition?: ModelItemGroupConditionInput | null,
};

export type CreateItemGroupMutation = {
  createItemGroup:  {
    __typename: "ItemGroup",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    nextItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    prevItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateItemGroupMutationVariables = {
  input: UpdateItemGroupInput,
  condition?: ModelItemGroupConditionInput | null,
};

export type UpdateItemGroupMutation = {
  updateItemGroup:  {
    __typename: "ItemGroup",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    nextItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    prevItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteItemGroupMutationVariables = {
  input: DeleteItemGroupInput,
  condition?: ModelItemGroupConditionInput | null,
};

export type DeleteItemGroupMutation = {
  deleteItemGroup:  {
    __typename: "ItemGroup",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    nextItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    prevItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateItemPriceListMutationVariables = {
  input: CreateItemPriceListInput,
  condition?: ModelItemPriceListConditionInput | null,
};

export type CreateItemPriceListMutation = {
  createItemPriceList:  {
    __typename: "ItemPriceList",
    id: string,
    itemId: string,
    priceListId: string,
    price: number | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    currency:  {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    priceList:  {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type UpdateItemPriceListMutationVariables = {
  input: UpdateItemPriceListInput,
  condition?: ModelItemPriceListConditionInput | null,
};

export type UpdateItemPriceListMutation = {
  updateItemPriceList:  {
    __typename: "ItemPriceList",
    id: string,
    itemId: string,
    priceListId: string,
    price: number | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    currency:  {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    priceList:  {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type DeleteItemPriceListMutationVariables = {
  input: DeleteItemPriceListInput,
  condition?: ModelItemPriceListConditionInput | null,
};

export type DeleteItemPriceListMutation = {
  deleteItemPriceList:  {
    __typename: "ItemPriceList",
    id: string,
    itemId: string,
    priceListId: string,
    price: number | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    currency:  {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    priceList:  {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type CreatePriceListMutationVariables = {
  input: CreatePriceListInput,
  condition?: ModelPriceListConditionInput | null,
};

export type CreatePriceListMutation = {
  createPriceList:  {
    __typename: "PriceList",
    id: string,
    name: string | null,
    extensions: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdatePriceListMutationVariables = {
  input: UpdatePriceListInput,
  condition?: ModelPriceListConditionInput | null,
};

export type UpdatePriceListMutation = {
  updatePriceList:  {
    __typename: "PriceList",
    id: string,
    name: string | null,
    extensions: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeletePriceListMutationVariables = {
  input: DeletePriceListInput,
  condition?: ModelPriceListConditionInput | null,
};

export type DeletePriceListMutation = {
  deletePriceList:  {
    __typename: "PriceList",
    id: string,
    name: string | null,
    extensions: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateSalesInvoiceMutationVariables = {
  input: CreateSalesInvoiceInput,
  condition?: ModelSalesInvoiceConditionInput | null,
};

export type CreateSalesInvoiceMutation = {
  createSalesInvoice:  {
    __typename: "SalesInvoice",
    id: string,
    customerId: string,
    number: string | null,
    date: string | null,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    salesInvoiceLines:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    extensions: string | null,
    status: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateSalesInvoiceMutationVariables = {
  input: UpdateSalesInvoiceInput,
  condition?: ModelSalesInvoiceConditionInput | null,
};

export type UpdateSalesInvoiceMutation = {
  updateSalesInvoice:  {
    __typename: "SalesInvoice",
    id: string,
    customerId: string,
    number: string | null,
    date: string | null,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    salesInvoiceLines:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    extensions: string | null,
    status: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteSalesInvoiceMutationVariables = {
  input: DeleteSalesInvoiceInput,
  condition?: ModelSalesInvoiceConditionInput | null,
};

export type DeleteSalesInvoiceMutation = {
  deleteSalesInvoice:  {
    __typename: "SalesInvoice",
    id: string,
    customerId: string,
    number: string | null,
    date: string | null,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    salesInvoiceLines:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    extensions: string | null,
    status: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateSalesInvoiceLineMutationVariables = {
  input: CreateSalesInvoiceLineInput,
  condition?: ModelSalesInvoiceLineConditionInput | null,
};

export type CreateSalesInvoiceLineMutation = {
  createSalesInvoiceLine:  {
    __typename: "SalesInvoiceLine",
    id: string,
    salesInvoiceId: string,
    salesInvoice:  {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    percentageDiscount: number | null,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateSalesInvoiceLineMutationVariables = {
  input: UpdateSalesInvoiceLineInput,
  condition?: ModelSalesInvoiceLineConditionInput | null,
};

export type UpdateSalesInvoiceLineMutation = {
  updateSalesInvoiceLine:  {
    __typename: "SalesInvoiceLine",
    id: string,
    salesInvoiceId: string,
    salesInvoice:  {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    percentageDiscount: number | null,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteSalesInvoiceLineMutationVariables = {
  input: DeleteSalesInvoiceLineInput,
  condition?: ModelSalesInvoiceLineConditionInput | null,
};

export type DeleteSalesInvoiceLineMutation = {
  deleteSalesInvoiceLine:  {
    __typename: "SalesInvoiceLine",
    id: string,
    salesInvoiceId: string,
    salesInvoice:  {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    percentageDiscount: number | null,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateSalesOrderMutationVariables = {
  input: CreateSalesOrderInput,
  condition?: ModelSalesOrderConditionInput | null,
};

export type CreateSalesOrderMutation = {
  createSalesOrder:  {
    __typename: "SalesOrder",
    id: string,
    customerId: string,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    notes: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    salesOrderLines:  {
      __typename: "ModelSalesOrderLineConnection",
      items:  Array< {
        __typename: "SalesOrderLine",
        id: string,
        salesOrderId: string,
        itemId: string,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateSalesOrderMutationVariables = {
  input: UpdateSalesOrderInput,
  condition?: ModelSalesOrderConditionInput | null,
};

export type UpdateSalesOrderMutation = {
  updateSalesOrder:  {
    __typename: "SalesOrder",
    id: string,
    customerId: string,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    notes: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    salesOrderLines:  {
      __typename: "ModelSalesOrderLineConnection",
      items:  Array< {
        __typename: "SalesOrderLine",
        id: string,
        salesOrderId: string,
        itemId: string,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteSalesOrderMutationVariables = {
  input: DeleteSalesOrderInput,
  condition?: ModelSalesOrderConditionInput | null,
};

export type DeleteSalesOrderMutation = {
  deleteSalesOrder:  {
    __typename: "SalesOrder",
    id: string,
    customerId: string,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    notes: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    salesOrderLines:  {
      __typename: "ModelSalesOrderLineConnection",
      items:  Array< {
        __typename: "SalesOrderLine",
        id: string,
        salesOrderId: string,
        itemId: string,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSalesOrderLineMutationVariables = {
  input: CreateSalesOrderLineInput,
  condition?: ModelSalesOrderLineConditionInput | null,
};

export type CreateSalesOrderLineMutation = {
  createSalesOrderLine:  {
    __typename: "SalesOrderLine",
    id: string,
    salesOrderId: string,
    itemId: string,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    salesOrder:  {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateSalesOrderLineMutationVariables = {
  input: UpdateSalesOrderLineInput,
  condition?: ModelSalesOrderLineConditionInput | null,
};

export type UpdateSalesOrderLineMutation = {
  updateSalesOrderLine:  {
    __typename: "SalesOrderLine",
    id: string,
    salesOrderId: string,
    itemId: string,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    salesOrder:  {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteSalesOrderLineMutationVariables = {
  input: DeleteSalesOrderLineInput,
  condition?: ModelSalesOrderLineConditionInput | null,
};

export type DeleteSalesOrderLineMutation = {
  deleteSalesOrderLine:  {
    __typename: "SalesOrderLine",
    id: string,
    salesOrderId: string,
    itemId: string,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    salesOrder:  {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    partyId: string,
    enabled: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    party:  {
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
    },
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      partyId: string,
      enabled: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      party:  {
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
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer:  {
    __typename: "Customer",
    id: string,
    description: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    companyName: string | null,
    companyVat: string | null,
    firstName: string | null,
    lastName: string | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    owner: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVendorQueryVariables = {
  id: string,
};

export type GetVendorQuery = {
  getVendor:  {
    __typename: "Vendor",
    id: string,
    description: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    },
    owner: string | null,
  } | null,
};

export type ListVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorsQuery = {
  listVendors:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPurchaseOrderQueryVariables = {
  id: string,
};

export type GetPurchaseOrderQuery = {
  getPurchaseOrder:  {
    __typename: "PurchaseOrder",
    id: string,
    vendorId:  {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    },
    number: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListPurchaseOrdersQueryVariables = {
  filter?: ModelPurchaseOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchaseOrdersQuery = {
  listPurchaseOrders:  {
    __typename: "ModelPurchaseOrderConnection",
    items:  Array< {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPurchaseOrderLineQueryVariables = {
  id: string,
};

export type GetPurchaseOrderLineQuery = {
  getPurchaseOrderLine:  {
    __typename: "PurchaseOrderLine",
    id: string,
    purchaseOrder:  {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListPurchaseOrderLinesQueryVariables = {
  filter?: ModelPurchaseOrderLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchaseOrderLinesQuery = {
  listPurchaseOrderLines:  {
    __typename: "ModelPurchaseOrderLineConnection",
    items:  Array< {
      __typename: "PurchaseOrderLine",
      id: string,
      purchaseOrder:  {
        __typename: "PurchaseOrder",
        id: string,
        number: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSalesInvoiceQueryVariables = {
  id: string,
};

export type GetSalesInvoiceQuery = {
  getSalesInvoice:  {
    __typename: "SalesInvoice",
    id: string,
    customerId: string,
    number: string | null,
    date: string | null,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    salesInvoiceLines:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    extensions: string | null,
    status: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListSalesInvoicesQueryVariables = {
  filter?: ModelSalesInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesInvoicesQuery = {
  listSalesInvoices:  {
    __typename: "ModelSalesInvoiceConnection",
    items:  Array< {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSalesInvoiceLineQueryVariables = {
  id: string,
};

export type GetSalesInvoiceLineQuery = {
  getSalesInvoiceLine:  {
    __typename: "SalesInvoiceLine",
    id: string,
    salesInvoiceId: string,
    salesInvoice:  {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    percentageDiscount: number | null,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListSalesInvoiceLinesQueryVariables = {
  filter?: ModelSalesInvoiceLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesInvoiceLinesQuery = {
  listSalesInvoiceLines:  {
    __typename: "ModelSalesInvoiceLineConnection",
    items:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListCurrencysQueryVariables = {
  filter?: ModelCurrencyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCurrencysQuery = {
  listCurrencys:  {
    __typename: "ModelCurrencyConnection",
    items:  Array< {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCurrencyQueryVariables = {
  id: string,
};

export type GetCurrencyQuery = {
  getCurrency:  {
    __typename: "Currency",
    id: string,
    name: string | null,
    symbol: string | null,
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

export type ListSalesOrdersQueryVariables = {
  filter?: ModelSalesOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesOrdersQuery = {
  listSalesOrders:  {
    __typename: "ModelSalesOrderConnection",
    items:  Array< {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSalesOrderQueryVariables = {
  id: string,
};

export type GetSalesOrderQuery = {
  getSalesOrder:  {
    __typename: "SalesOrder",
    id: string,
    customerId: string,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    notes: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    salesOrderLines:  {
      __typename: "ModelSalesOrderLineConnection",
      items:  Array< {
        __typename: "SalesOrderLine",
        id: string,
        salesOrderId: string,
        itemId: string,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetSalesOrderLineQueryVariables = {
  id: string,
};

export type GetSalesOrderLineQuery = {
  getSalesOrderLine:  {
    __typename: "SalesOrderLine",
    id: string,
    salesOrderId: string,
    itemId: string,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    salesOrder:  {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListSalesOrderLinesQueryVariables = {
  filter?: ModelSalesOrderLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesOrderLinesQuery = {
  listSalesOrderLines:  {
    __typename: "ModelSalesOrderLineConnection",
    items:  Array< {
      __typename: "SalesOrderLine",
      id: string,
      salesOrderId: string,
      itemId: string,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      salesOrder:  {
        __typename: "SalesOrder",
        id: string,
        customerId: string,
        notes: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      owner: string | null,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem:  {
    __typename: "Item",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    nextItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    prevItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
    itemGroup:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    priceList:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetItemItemGroupQueryVariables = {
  id: string,
};

export type GetItemItemGroupQuery = {
  getItemItemGroup:  {
    __typename: "ItemItemGroup",
    id: string,
    itemId: string,
    itemGroupId: string,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    itemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type ListItemItemGroupsQueryVariables = {
  filter?: ModelItemItemGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemItemGroupsQuery = {
  listItemItemGroups:  {
    __typename: "ModelItemItemGroupConnection",
    items:  Array< {
      __typename: "ItemItemGroup",
      id: string,
      itemId: string,
      itemGroupId: string,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      owner: string | null,
      itemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListItemGroupsQueryVariables = {
  filter?: ModelItemGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemGroupsQuery = {
  listItemGroups:  {
    __typename: "ModelItemGroupConnection",
    items:  Array< {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetItemGroupQueryVariables = {
  id: string,
};

export type GetItemGroupQuery = {
  getItemGroup:  {
    __typename: "ItemGroup",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    nextItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    prevItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetItemPriceListQueryVariables = {
  id: string,
};

export type GetItemPriceListQuery = {
  getItemPriceList:  {
    __typename: "ItemPriceList",
    id: string,
    itemId: string,
    priceListId: string,
    price: number | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    currency:  {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    priceList:  {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type ListItemPriceListsQueryVariables = {
  filter?: ModelItemPriceListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemPriceListsQuery = {
  listItemPriceLists:  {
    __typename: "ModelItemPriceListConnection",
    items:  Array< {
      __typename: "ItemPriceList",
      id: string,
      itemId: string,
      priceListId: string,
      price: number | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      currency:  {
        __typename: "Currency",
        id: string,
        name: string | null,
        symbol: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      owner: string | null,
      priceList:  {
        __typename: "PriceList",
        id: string,
        name: string | null,
        extensions: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListPriceListsQueryVariables = {
  filter?: ModelPriceListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPriceListsQuery = {
  listPriceLists:  {
    __typename: "ModelPriceListConnection",
    items:  Array< {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPriceListQueryVariables = {
  id: string,
};

export type GetPriceListQuery = {
  getPriceList:  {
    __typename: "PriceList",
    id: string,
    name: string | null,
    extensions: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    partyId: string,
    enabled: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    party:  {
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
    },
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    partyId: string,
    enabled: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    party:  {
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
    },
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    partyId: string,
    enabled: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    party:  {
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
    },
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer:  {
    __typename: "Customer",
    id: string,
    description: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    companyName: string | null,
    companyVat: string | null,
    firstName: string | null,
    lastName: string | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    owner: string | null,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer:  {
    __typename: "Customer",
    id: string,
    description: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    companyName: string | null,
    companyVat: string | null,
    firstName: string | null,
    lastName: string | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    owner: string | null,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer:  {
    __typename: "Customer",
    id: string,
    description: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    companyName: string | null,
    companyVat: string | null,
    firstName: string | null,
    lastName: string | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    owner: string | null,
  } | null,
};

export type OnCreateVendorSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor:  {
    __typename: "Vendor",
    id: string,
    description: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    },
    owner: string | null,
  } | null,
};

export type OnUpdateVendorSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor:  {
    __typename: "Vendor",
    id: string,
    description: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    },
    owner: string | null,
  } | null,
};

export type OnDeleteVendorSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor:  {
    __typename: "Vendor",
    id: string,
    description: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    party:  {
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
    },
    owner: string | null,
  } | null,
};

export type OnCreatePurchaseOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePurchaseOrderSubscription = {
  onCreatePurchaseOrder:  {
    __typename: "PurchaseOrder",
    id: string,
    vendorId:  {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    },
    number: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdatePurchaseOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePurchaseOrderSubscription = {
  onUpdatePurchaseOrder:  {
    __typename: "PurchaseOrder",
    id: string,
    vendorId:  {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    },
    number: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeletePurchaseOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePurchaseOrderSubscription = {
  onDeletePurchaseOrder:  {
    __typename: "PurchaseOrder",
    id: string,
    vendorId:  {
      __typename: "Vendor",
      id: string,
      description: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      },
      owner: string | null,
    },
    number: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreatePurchaseOrderLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePurchaseOrderLineSubscription = {
  onCreatePurchaseOrderLine:  {
    __typename: "PurchaseOrderLine",
    id: string,
    purchaseOrder:  {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdatePurchaseOrderLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePurchaseOrderLineSubscription = {
  onUpdatePurchaseOrderLine:  {
    __typename: "PurchaseOrderLine",
    id: string,
    purchaseOrder:  {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeletePurchaseOrderLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePurchaseOrderLineSubscription = {
  onDeletePurchaseOrderLine:  {
    __typename: "PurchaseOrderLine",
    id: string,
    purchaseOrder:  {
      __typename: "PurchaseOrder",
      id: string,
      vendorId:  {
        __typename: "Vendor",
        id: string,
        description: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      number: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateSalesInvoiceSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSalesInvoiceSubscription = {
  onCreateSalesInvoice:  {
    __typename: "SalesInvoice",
    id: string,
    customerId: string,
    number: string | null,
    date: string | null,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    salesInvoiceLines:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    extensions: string | null,
    status: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateSalesInvoiceSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSalesInvoiceSubscription = {
  onUpdateSalesInvoice:  {
    __typename: "SalesInvoice",
    id: string,
    customerId: string,
    number: string | null,
    date: string | null,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    salesInvoiceLines:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    extensions: string | null,
    status: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteSalesInvoiceSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSalesInvoiceSubscription = {
  onDeleteSalesInvoice:  {
    __typename: "SalesInvoice",
    id: string,
    customerId: string,
    number: string | null,
    date: string | null,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    salesInvoiceLines:  Array< {
      __typename: "SalesInvoiceLine",
      id: string,
      salesInvoiceId: string,
      salesInvoice:  {
        __typename: "SalesInvoice",
        id: string,
        customerId: string,
        number: string | null,
        date: string | null,
        extensions: string | null,
        status: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      percentageDiscount: number | null,
      price: number | null,
      quantity: number | null,
      extensions: string | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    extensions: string | null,
    status: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateSalesInvoiceLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSalesInvoiceLineSubscription = {
  onCreateSalesInvoiceLine:  {
    __typename: "SalesInvoiceLine",
    id: string,
    salesInvoiceId: string,
    salesInvoice:  {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    percentageDiscount: number | null,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateSalesInvoiceLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSalesInvoiceLineSubscription = {
  onUpdateSalesInvoiceLine:  {
    __typename: "SalesInvoiceLine",
    id: string,
    salesInvoiceId: string,
    salesInvoice:  {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    percentageDiscount: number | null,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteSalesInvoiceLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSalesInvoiceLineSubscription = {
  onDeleteSalesInvoiceLine:  {
    __typename: "SalesInvoiceLine",
    id: string,
    salesInvoiceId: string,
    salesInvoice:  {
      __typename: "SalesInvoice",
      id: string,
      customerId: string,
      number: string | null,
      date: string | null,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      salesInvoiceLines:  Array< {
        __typename: "SalesInvoiceLine",
        id: string,
        salesInvoiceId: string,
        percentageDiscount: number | null,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      extensions: string | null,
      status: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    },
    percentageDiscount: number | null,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateCurrencySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCurrencySubscription = {
  onCreateCurrency:  {
    __typename: "Currency",
    id: string,
    name: string | null,
    symbol: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateCurrencySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCurrencySubscription = {
  onUpdateCurrency:  {
    __typename: "Currency",
    id: string,
    name: string | null,
    symbol: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteCurrencySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCurrencySubscription = {
  onDeleteCurrency:  {
    __typename: "Currency",
    id: string,
    name: string | null,
    symbol: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
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

export type OnCreateSalesOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSalesOrderSubscription = {
  onCreateSalesOrder:  {
    __typename: "SalesOrder",
    id: string,
    customerId: string,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    notes: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    salesOrderLines:  {
      __typename: "ModelSalesOrderLineConnection",
      items:  Array< {
        __typename: "SalesOrderLine",
        id: string,
        salesOrderId: string,
        itemId: string,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateSalesOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSalesOrderSubscription = {
  onUpdateSalesOrder:  {
    __typename: "SalesOrder",
    id: string,
    customerId: string,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    notes: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    salesOrderLines:  {
      __typename: "ModelSalesOrderLineConnection",
      items:  Array< {
        __typename: "SalesOrderLine",
        id: string,
        salesOrderId: string,
        itemId: string,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteSalesOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSalesOrderSubscription = {
  onDeleteSalesOrder:  {
    __typename: "SalesOrder",
    id: string,
    customerId: string,
    customer:  {
      __typename: "Customer",
      id: string,
      description: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      companyName: string | null,
      companyVat: string | null,
      firstName: string | null,
      lastName: string | null,
      createdAt: string,
      updatedAt: string,
      party:  {
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
      owner: string | null,
    },
    notes: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    salesOrderLines:  {
      __typename: "ModelSalesOrderLineConnection",
      items:  Array< {
        __typename: "SalesOrderLine",
        id: string,
        salesOrderId: string,
        itemId: string,
        price: number | null,
        quantity: number | null,
        extensions: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSalesOrderLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSalesOrderLineSubscription = {
  onCreateSalesOrderLine:  {
    __typename: "SalesOrderLine",
    id: string,
    salesOrderId: string,
    itemId: string,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    salesOrder:  {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateSalesOrderLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSalesOrderLineSubscription = {
  onUpdateSalesOrderLine:  {
    __typename: "SalesOrderLine",
    id: string,
    salesOrderId: string,
    itemId: string,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    salesOrder:  {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteSalesOrderLineSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSalesOrderLineSubscription = {
  onDeleteSalesOrderLine:  {
    __typename: "SalesOrderLine",
    id: string,
    salesOrderId: string,
    itemId: string,
    price: number | null,
    quantity: number | null,
    extensions: string | null,
    createdAt: string,
    updatedAt: string,
    salesOrder:  {
      __typename: "SalesOrder",
      id: string,
      customerId: string,
      customer:  {
        __typename: "Customer",
        id: string,
        description: string | null,
        deleted: boolean | null,
        visible: boolean | null,
        companyName: string | null,
        companyVat: string | null,
        firstName: string | null,
        lastName: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      },
      notes: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      salesOrderLines:  {
        __typename: "ModelSalesOrderLineConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateItemSubscription = {
  onCreateItem:  {
    __typename: "Item",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    nextItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    prevItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
    itemGroup:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    priceList:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem:  {
    __typename: "Item",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    nextItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    prevItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
    itemGroup:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    priceList:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem:  {
    __typename: "Item",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    nextItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    prevItem:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
    itemGroup:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    priceList:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateItemItemGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateItemItemGroupSubscription = {
  onCreateItemItemGroup:  {
    __typename: "ItemItemGroup",
    id: string,
    itemId: string,
    itemGroupId: string,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    itemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnUpdateItemItemGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateItemItemGroupSubscription = {
  onUpdateItemItemGroup:  {
    __typename: "ItemItemGroup",
    id: string,
    itemId: string,
    itemGroupId: string,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    itemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnDeleteItemItemGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteItemItemGroupSubscription = {
  onDeleteItemItemGroup:  {
    __typename: "ItemItemGroup",
    id: string,
    itemId: string,
    itemGroupId: string,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    itemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnCreateItemGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateItemGroupSubscription = {
  onCreateItemGroup:  {
    __typename: "ItemGroup",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    nextItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    prevItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateItemGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateItemGroupSubscription = {
  onUpdateItemGroup:  {
    __typename: "ItemGroup",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    nextItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    prevItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteItemGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteItemGroupSubscription = {
  onDeleteItemGroup:  {
    __typename: "ItemGroup",
    id: string,
    name: string | null,
    description: string | null,
    extensions: string | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemItemGroupConnection",
      items:  Array< {
        __typename: "ItemItemGroup",
        id: string,
        itemId: string,
        itemGroupId: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    nextItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    prevItemGroup:  {
      __typename: "ItemGroup",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      nextItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItemGroup:  {
        __typename: "ItemGroup",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateItemPriceListSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateItemPriceListSubscription = {
  onCreateItemPriceList:  {
    __typename: "ItemPriceList",
    id: string,
    itemId: string,
    priceListId: string,
    price: number | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    currency:  {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    priceList:  {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnUpdateItemPriceListSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateItemPriceListSubscription = {
  onUpdateItemPriceList:  {
    __typename: "ItemPriceList",
    id: string,
    itemId: string,
    priceListId: string,
    price: number | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    currency:  {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    priceList:  {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnDeleteItemPriceListSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteItemPriceListSubscription = {
  onDeleteItemPriceList:  {
    __typename: "ItemPriceList",
    id: string,
    itemId: string,
    priceListId: string,
    price: number | null,
    deleted: boolean | null,
    createdAt: string,
    updatedAt: string,
    currency:  {
      __typename: "Currency",
      id: string,
      name: string | null,
      symbol: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    item:  {
      __typename: "Item",
      id: string,
      name: string | null,
      description: string | null,
      extensions: string | null,
      deleted: boolean | null,
      createdAt: string,
      updatedAt: string,
      nextItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      prevItem:  {
        __typename: "Item",
        id: string,
        name: string | null,
        description: string | null,
        extensions: string | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      owner: string | null,
      itemGroup:  {
        __typename: "ModelItemItemGroupConnection",
        nextToken: string | null,
      } | null,
      priceList:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
    },
    owner: string | null,
    priceList:  {
      __typename: "PriceList",
      id: string,
      name: string | null,
      extensions: string | null,
      deleted: boolean | null,
      visible: boolean | null,
      createdAt: string,
      updatedAt: string,
      item:  {
        __typename: "ModelItemPriceListConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
  } | null,
};

export type OnCreatePriceListSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePriceListSubscription = {
  onCreatePriceList:  {
    __typename: "PriceList",
    id: string,
    name: string | null,
    extensions: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdatePriceListSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePriceListSubscription = {
  onUpdatePriceList:  {
    __typename: "PriceList",
    id: string,
    name: string | null,
    extensions: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeletePriceListSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePriceListSubscription = {
  onDeletePriceList:  {
    __typename: "PriceList",
    id: string,
    name: string | null,
    extensions: string | null,
    deleted: boolean | null,
    visible: boolean | null,
    createdAt: string,
    updatedAt: string,
    item:  {
      __typename: "ModelItemPriceListConnection",
      items:  Array< {
        __typename: "ItemPriceList",
        id: string,
        itemId: string,
        priceListId: string,
        price: number | null,
        deleted: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

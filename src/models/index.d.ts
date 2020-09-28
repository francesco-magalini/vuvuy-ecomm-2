import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Party {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly companyName?: string;
  readonly companyVat?: string;
  readonly email?: string;
  readonly logo?: string;
  readonly mobile?: string;
  readonly addressLine1?: string;
  readonly addressLine2?: string;
  readonly country?: string;
  constructor(init: ModelInit<Party>);
  static copyOf(source: Party, mutator: (draft: MutableModel<Party>) => MutableModel<Party> | void): Party;
}
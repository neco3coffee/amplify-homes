import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Card {
  readonly id: string;
  readonly image?: string;
  readonly title?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Card, CardMetaData>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}

export declare class Home {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}
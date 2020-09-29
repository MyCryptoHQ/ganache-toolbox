import { tokens } from '@config';

import { TAddress } from './address';

export type Tokens = keyof typeof tokens;

export interface TTokens {
  [k: string]: IToken;
}

export interface IToken {
  ABI: Array<any>;
  address: TAddress;
  name: Tokens;
  fromAddress: TAddress;
}

import { IToken, TAddress, TTokens } from '@types';

import DaiAbi from './ABI/DAI.json';
import GntAbi from './ABI/GNT.json';
import LendAbi from './ABI/LEND.json';
import RepAbi from './ABI/REP.json';

export const DAI: IToken = {
  ABI: DaiAbi,
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' as TAddress,
  name: 'DAI',
  fromAddress: '0x223034EDbe95823c1160C16F26E3000315171cA9' as TAddress
};

export const GNT: IToken = {
  ABI: GntAbi,
  address: '0xa74476443119A942dE498590Fe1f2454d7D4aC0d' as TAddress,
  name: 'GNT',
  fromAddress: '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8' as TAddress
};

export const LEND: IToken = {
  ABI: LendAbi,
  address: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03' as TAddress,
  name: 'LEND',
  fromAddress: '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8' as TAddress
};

export const REP: IToken = {
  ABI: RepAbi,
  address: '0x1985365e9f78359a9B6AD760e32412f4a445E862' as TAddress,
  name: 'REP',
  fromAddress: '0x43984d578803891dfa9706bdeee6078d80cfc79e' as TAddress
};

export const tokens: TTokens = {
  DAI,
  LEND,
  REP,
  GNT
};

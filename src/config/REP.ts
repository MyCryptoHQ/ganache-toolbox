import { IToken, TAddress } from '@types';

import RepAbi from './ABI/REP.json';

export const REP: IToken = {
  ABI: RepAbi,
  address: '0x1985365e9f78359a9B6AD760e32412f4a445E862' as TAddress,
  name: 'REP',
  fromAddress: '0x43984d578803891dfa9706bdeee6078d80cfc79e' as TAddress
};

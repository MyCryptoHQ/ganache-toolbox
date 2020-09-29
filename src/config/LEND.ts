import { IToken, TAddress } from '@types';

import LendAbi from './ABI/LEND.json';

export const LEND: IToken = {
  ABI: LendAbi,
  address: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03' as TAddress,
  name: 'LEND',
  fromAddress: '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8' as TAddress
};

import { IToken, TAddress } from '@types';

import DaiAbi from './ABI/DAI.json';

export const DAI: IToken = {
  ABI: DaiAbi,
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' as TAddress,
  name: 'DAI',
  fromAddress: '0x223034EDbe95823c1160C16F26E3000315171cA9' as TAddress
};

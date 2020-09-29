import BN from 'bn.js';
import Web3 from 'web3';

import { IToken, TAddress } from '@types';

export const transfer = async (
  instance: Web3,
  to: TAddress,
  token: IToken,
  amount: BN = instance.utils.toBN(100)
) => {
  const decimals = instance.utils.toBN(18);

  // Get ERC20 Token contract instance
  const contract = new instance.eth.Contract(token.ABI, token.address);
  // calculate ERC20 token amount
  const value = amount.mul(instance.utils.toBN(10).pow(decimals));
  // call transfer function
  await contract.methods.transfer(to, value).send({ from: token.fromAddress });
};

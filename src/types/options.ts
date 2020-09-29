import { TAddress } from './address';

export interface IOptions {
  skipPrompts: boolean;
  instance: string;
  address: TAddress;
  token?: string;
  amount: number;
}

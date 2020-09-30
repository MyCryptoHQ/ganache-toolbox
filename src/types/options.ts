import { Options } from 'yargs';

import { TAddress } from './address';

export interface IArgs {
  [key: string]: Options;
}
export interface IYargsObject {
  [x: string]: unknown;
  i: string;
  a: TAddress;
  t: string;
  m: number;
  y: boolean;
  _: string[];
  $0: string;
}

export interface IOptions {
  skipPrompts: boolean;
  instance: string;
  address: TAddress;
  token?: string;
  amount: number;
}

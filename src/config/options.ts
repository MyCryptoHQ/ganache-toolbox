import { IArgs } from '@types';

export const options: IArgs = {
  i: {
    alias: 'instance',
    describe: 'The Ganache node URL',
    type: 'string',
    requiresArg: true,
    demandOption: false
  },
  a: {
    alias: 'address',
    describe: 'Your Ethereum address',
    type: 'string',
    requiresArg: true,
    demandOption: true
  },
  t: {
    alias: 'token',
    describe: 'The Token you want to be funded',
    type: 'string',
    requiresArg: true,
    demandOption: false
  },
  m: {
    alias: 'amount',
    describe: 'The amount of token you want',
    type: 'number',
    requiresArg: true,
    demandOption: false
  },
  y: {
    alias: 'yes',
    describe: 'Skip prompts',
    type: 'boolean',
    requiresArg: false,
    demandOption: false
  }
};

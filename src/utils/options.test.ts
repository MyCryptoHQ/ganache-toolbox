import { DEFAULT_INSTANCE } from '@config';
import { IOptions, TAddress } from '@types';

import { argsToOpts, validateOpts } from './options';

describe('arguments to options', () => {
  it('transform array of arguments into options object', () => {
    const args = [
      'node',
      '/bin/exec',
      '--yes',
      '--instance',
      'https://test.com',
      '--address',
      'an address',
      '--token',
      'DAI'
    ];

    const expected = argsToOpts(args);

    const result = {
      skipPrompts: true,
      instance: 'https://test.com',
      address: 'an address',
      token: 'DAI'
    };

    expect(expected).toEqual(result);
  });
});

describe('validate options', () => {
  it('return options when valid', async () => {
    const opts: IOptions = {
      skipPrompts: true,
      instance: DEFAULT_INSTANCE,
      address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf' as TAddress
    };

    const expected = await validateOpts(opts);

    expect(expected).toEqual(opts);
  });
  it('return undefinded when skipPrompts is passed and options are invalid', async () => {
    const opts: IOptions = {
      skipPrompts: true,
      instance: DEFAULT_INSTANCE,
      address: 'Invalid' as TAddress
    };

    const expected = await validateOpts(opts);

    expect(expected).toBeUndefined();
  });
});

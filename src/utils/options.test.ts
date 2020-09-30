import { DEFAULT_INSTANCE } from '@config';
import { IOptions, TAddress } from '@types';

import { validateOpts } from './options';

describe('validate options', () => {
  it('return options when valid', async () => {
    const opts: IOptions = {
      skipPrompts: true,
      instance: DEFAULT_INSTANCE,
      address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf' as TAddress,
      amount: 100
    };

    const expected = await validateOpts(opts);

    expect(expected).toEqual(opts);
  });
  it('return undefinded when skipPrompts is passed and options are invalid', async () => {
    const spy = jest.spyOn(console, 'log');

    const opts: IOptions = {
      skipPrompts: true,
      instance: DEFAULT_INSTANCE,
      address: 'Invalid' as TAddress,
      amount: 100
    };

    const expected = await validateOpts(opts);

    expect(expected).toBeUndefined();
    expect(spy).toHaveBeenCalled();
  });
});

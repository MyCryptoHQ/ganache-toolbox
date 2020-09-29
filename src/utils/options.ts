import arg from 'arg';
import { boolean, number, object, string } from 'yup';

import { DEFAULT_INSTANCE, tokens } from '@config';
import { IOptions, TAddress } from '@types';
import { handleOptsErrors } from '@utils';

const optsSchema = object().shape({
  skipPrompt: boolean(),
  instance: string().url().notRequired(),
  address: string()
    .matches(/^0x[a-fA-F0-9]{40}$/g, 'Invalid address')
    .required(),
  token: string().oneOf(Object.keys(tokens)).notRequired(),
  amount: number().min(1).max(10000).notRequired()
});

export const argsToOpts = (rawArgs: string[]): IOptions => {
  const args = arg(
    {
      '--instance': String,
      '--address': String,
      '--token': String,
      '--amount': Number,
      '--yes': Boolean,
      '-i': '--instance',
      '-a': '--address',
      '-t': '--token',
      '-m': '--amount',
      '-y': '--yes'
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    skipPrompts: args['--yes'] || false,
    instance: args['--instance'] || DEFAULT_INSTANCE,
    address: (args['--address'] as TAddress) || ('' as TAddress),
    token: args['--token'],
    amount: args['--amount'] || 100
  };
};

export const validateOpts = async (opts: IOptions) => {
  try {
    await optsSchema.validate(opts, { abortEarly: false });
    return opts;
  } catch (err) {
    return await handleOptsErrors(opts, err);
  }
};

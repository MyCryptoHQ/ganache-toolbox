import arg from 'arg';
import { boolean, object, string } from 'yup';

import { DEFAULT_INSTANCE, tokens } from '@config';
import { IOptions, TAddress } from '@types';
import { handleOptsErrors } from '@utils';

const optsSchema = object().shape({
  skipPrompt: boolean(),
  instance: string().url().notRequired(),
  address: string()
    .matches(/^0x[a-fA-F0-9]{40}$/g, 'Invalid address')
    .required(),
  token: string().oneOf(Object.keys(tokens)).notRequired()
});

export const argsToOpts = (rawArgs: string[]): IOptions => {
  const args = arg(
    {
      '--instance': String,
      '--address': String,
      '--token': String,
      '--yes': Boolean,
      '-i': '--instance',
      '-a': '--address',
      '-t': '--token',
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
    token: args['--token']
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

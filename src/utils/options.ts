import yargs from 'yargs';
import { boolean, number, object, string } from 'yup';

import { DEFAULT_INSTANCE, options, tokens } from '@config';
import { IOptions, IYargsObject, TAddress } from '@types';
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

export const argsToOpts = (): IOptions => {
  const args: IYargsObject = yargs.usage('Usage: ganache-toolbox -a <address>').options(options)
    .argv as IYargsObject;
  console.log(args);
  return {
    skipPrompts: args.y || false,
    instance: args.i || DEFAULT_INSTANCE,
    address: args.a || ('' as TAddress),
    token: args.t as string,
    amount: args.m || 100
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

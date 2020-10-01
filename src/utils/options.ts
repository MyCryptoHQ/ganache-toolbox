import yargs from 'yargs';
import { boolean, number, object, string } from 'yup';

import { options, tokens } from '@config';
import { IOptions, IYargsObject, TAddress } from '@types';
import { handleOptsErrors } from '@utils';

const optsSchema = object().shape({
  skipPrompt: boolean(),
  instance: string().url(),
  address: string()
    .matches(/^0x[a-fA-F0-9]{40}$/g, 'Invalid address')
    .required(),
  token: string().oneOf(Object.keys(tokens)).notRequired(),
  amount: number().min(1).max(10000).notRequired()
});

export const argsToOpts = (): IOptions => {
  const args: IYargsObject = yargs
    .usage('Usage: ganache-toolbox -a <address> -i <instance_url>')
    .options(options).argv as IYargsObject;
  return {
    skipPrompts: args.y || false,
    instance: args.i,
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

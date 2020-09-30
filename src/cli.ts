import Listr from 'listr';
import Web3 from 'web3';

import { tokens } from '@config';
import { argsToOpts, transfer, validateOpts } from '@utils';

export const cli = async () => {
  const opts = await validateOpts(argsToOpts());
  if (opts) {
    const instance = new Web3(opts.instance);
    const tasks = new Listr([], { exitOnError: false });

    if (opts.token) {
      const key = opts.token;
      tasks.add({
        title: `Sending ${opts.token}`,
        task: async () =>
          await transfer(instance, opts.address, tokens[key], instance.utils.toBN(opts.amount))
      });
    } else {
      Object.keys(tokens).map(async (key) => {
        tasks.add({
          title: `Sending ${key}`,
          task: async () =>
            await transfer(instance, opts.address, tokens[key], instance.utils.toBN(opts.amount))
        });
      });
    }
    tasks.run().catch(() => {
      process.exitCode = 1;
    });
  } else {
    process.exitCode = 1;
  }
};

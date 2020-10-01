import Listr from 'listr';
import Web3 from 'web3';

import { tokens } from '@config';
import { argsToOpts, transfer, validateOpts } from '@utils';

export const cli = async () => {
  const opts = await validateOpts(argsToOpts());
  if (opts) {
    const tasks = new Listr([], { exitOnError: true });
    const transferTasks = new Listr([], { exitOnError: false });
    const instance = new Web3(opts.instance);

    tasks.add({
      title: `Connecting to ${opts.instance}`,
      task: async () => await instance.eth.net.isListening()
    });

    if (opts.token) {
      const key = opts.token;
      transferTasks.add({
        title: `Sending ${opts.token}`,
        task: async () =>
          await transfer(instance, opts.address, tokens[key], instance.utils.toBN(opts.amount))
      });
    } else {
      Object.keys(tokens).map(async (key) => {
        transferTasks.add({
          title: `Sending ${key}`,
          task: async () =>
            await transfer(instance, opts.address, tokens[key], instance.utils.toBN(opts.amount))
        });
      });
    }
    tasks.add({
      title: `Sending Tokens`,
      task: () => transferTasks
    });

    tasks.run().catch(() => {
      process.exitCode = 1;
    });
  } else {
    process.exitCode = 1;
  }
};

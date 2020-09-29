import { red } from 'chalk';
import inquirer from 'inquirer';
import { ValidationError } from 'yup';

import { DEFAULT_INSTANCE, tokens } from '@config';
import { IOptions } from '@types';

export const handleOptsErrors = async (opts: IOptions, err: ValidationError) => {
  const questions: any[] = [];
  const availableTokens = Object.keys(tokens);

  if (opts.skipPrompts) {
    console.log(`${red.bold('ERROR :')} ${red(err.inner[0].message)}`);
    return undefined;
  } else {
    err.inner.forEach((error: any) => {
      switch (error.path) {
        case 'token':
          questions.push({
            type: 'list',
            name: 'token',
            message: `Token not supported, please choose one from the list`,
            choices: availableTokens,
            default: availableTokens[0]
          });
          break;
        case 'instance':
          questions.push({
            type: 'input',
            name: 'instance',
            message: `Ganache instance should be an url, please enter a valid url`,
            default: DEFAULT_INSTANCE
          });
          break;
        case 'address':
          questions.push({
            type: 'input',
            name: 'address',
            message: `The address either invalid or missing, please enter a valid address`
          });
          break;
        default:
          console.log(`${red.bold('ERROR :')} ${red(error.message)}`);
      }
    });
    const answers = await inquirer.prompt(questions);
    return {
      ...opts,
      instance: answers.instance || opts.instance,
      token: answers.token || opts.token,
      address: answers.address || opts.address
    };
  }
};

# Ganache Toolbox

[![GitHub license](https://img.shields.io/github/license/MyCryptoHQ/ganache-toolbox.svg)](https://github.com/MyCryptoHQ/ganache-toolbox/blob/master/LICENSE)
[![Build](https://github.com/MyCryptoHQ/ganache-toolbox/workflows/GitHub%20CI/badge.svg?branch=master)](https://github.com/MyCryptoHQ/MyCrypto/actions)
[![GitHub release](https://img.shields.io/github/release/MyCryptoHQ/ganache-toolbox.svg)](https://GitHub.com/MyCryptoHQ/ganache-toolbox/releases/)
[![NPM](https://nodei.co/npm/ganache-toolbox.png?mini=true)](https://npmjs.org/package/ganache-toolbox)

Ganache Toolbox is a simple CLI to fund a Ganache test account with relevant tokens to execute tests on [MyCrypto](https://github.com/MyCryptoHQ/MyCrypto).

## Installation

With `npm`

```bash
npm install -g @mycrypto/ganache-toolbox
```

Alternatively you can use `npx` to use the CLI without installing it

```bash
npx @mycrypto/ganache-toolbox [...]
```

## Usage

### Basic usage

```bash
# To fund your account with 100 of each tokens the CLI support
ganache-toolbox --address [ your_address ] --instance [ instance_url ]
```

### Advanced usage

```bash
# To fund your account with one of the supported tokens
ganache-toolbox -address [ your_address ] --instance [ instance_url ] --token [ DAI | REP | LEND | GNT ]
```

```bash
# Specify the amount of tokens you want to be funded.
ganache-toolbox -address [ your_address ] --instance [ instance_url ] --amount [0...10000]
```

### Skipping prompt

ganache-toolbox could ask you, if not used correctly, to correct your passed arguments. In order to use it inside a container pass the `--yes` or `-y` flag to avoid being prompted with questions.

```bash
# To disable prompting
ganache-toolbox --yes -address [ your_address ] --instance [ instance_url ]
```

### Available flags

- `--yes` / `-y` : Disable prompt
- `--instance` / `-i`: URL of your ganache node
- `--address` / `-a`: The Ethereum address where the CLI will send the token(s)
- `--token` / `-t`: The available token you want to be found (Actually available: `DAI, REP, LEND ,GNT`)
- `--amount` / `-m`: The amount of tokens you want

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Spin up the project

```bash
git clone https://github.com/MyCryptoHQ/ganache-toolbox.git
cd ganache-toolbox
yarn
yarn start
```

### Build the project

```bash
yarn build
```

built application can be found in the `dist` folder

### Run tests

```bash
yarn test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

export const ABI = {
  DAI: [
    {
      inputs: [{ internalType: 'uint256', name: 'chainId_', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'src', type: 'address' },
        { indexed: true, internalType: 'address', name: 'guy', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'Approval',
      type: 'event'
    },
    {
      anonymous: true,
      inputs: [
        { indexed: true, internalType: 'bytes4', name: 'sig', type: 'bytes4' },
        { indexed: true, internalType: 'address', name: 'usr', type: 'address' },
        { indexed: true, internalType: 'bytes32', name: 'arg1', type: 'bytes32' },
        { indexed: true, internalType: 'bytes32', name: 'arg2', type: 'bytes32' },
        { indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' }
      ],
      name: 'LogNote',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'src', type: 'address' },
        { indexed: true, internalType: 'address', name: 'dst', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      constant: true,
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'PERMIT_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'address', name: '', type: 'address' }
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'usr', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'usr', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'burn',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ internalType: 'address', name: 'guy', type: 'address' }],
      name: 'deny',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'usr', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'mint',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'src', type: 'address' },
        { internalType: 'address', name: 'dst', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'move',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'nonces',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'holder', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'nonce', type: 'uint256' },
        { internalType: 'uint256', name: 'expiry', type: 'uint256' },
        { internalType: 'bool', name: 'allowed', type: 'bool' },
        { internalType: 'uint8', name: 'v', type: 'uint8' },
        { internalType: 'bytes32', name: 'r', type: 'bytes32' },
        { internalType: 'bytes32', name: 's', type: 'bytes32' }
      ],
      name: 'permit',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'usr', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'pull',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'usr', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'push',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ internalType: 'address', name: 'guy', type: 'address' }],
      name: 'rely',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'dst', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'src', type: 'address' },
        { internalType: 'address', name: 'dst', type: 'address' },
        { internalType: 'uint256', name: 'wad', type: 'uint256' }
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'version',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'wards',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ],
  GNT: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'golemFactory',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_master', type: 'address' }],
      name: 'setMigrationMaster',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint8' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_value', type: 'uint256' }],
      name: 'migrate',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'finalize',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'refund',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'migrationMaster',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'tokenCreationCap',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_agent', type: 'address' }],
      name: 'setMigrationAgent',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'migrationAgent',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'fundingEndBlock',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalMigrated',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'transfer',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'tokenCreationMin',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'funding',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'tokenCreationRate',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'fundingStartBlock',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'create',
      outputs: [],
      payable: true,
      type: 'function'
    },
    {
      inputs: [
        { name: '_golemFactory', type: 'address' },
        { name: '_migrationMaster', type: 'address' },
        { name: '_fundingStartBlock', type: 'uint256' },
        { name: '_fundingEndBlock', type: 'uint256' }
      ],
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_from', type: 'address' },
        { indexed: true, name: '_to', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_from', type: 'address' },
        { indexed: true, name: '_to', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' }
      ],
      name: 'Migrate',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_from', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' }
      ],
      name: 'Refund',
      type: 'event'
    }
  ],
  REP: [
    {
      constant: true,
      inputs: [],
      name: 'getController',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_controller', type: 'address' }],
      name: 'setController',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'controllerLookupName',
      outputs: [{ name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        { name: '_controller', type: 'address' },
        { name: '_controllerLookupName', type: 'bytes32' }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    { payable: true, stateMutability: 'payable', type: 'fallback' }
  ],
  LEND: [
    {
      constant: true,
      inputs: [],
      name: 'supply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'teamTokenBonus',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'approve',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'TOTAL_SOLD_TOKEN_SUPPLY_LIMIT',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'currentState',
      outputs: [{ name: '', type: 'uint8' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'PRESALE_MAX_ETH',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'buyTokensPresale',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_from', type: 'address' },
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'transferFrom',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'presaleSoldTokens',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'tokenManager',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'icoSoldTokens',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_nextState', type: 'uint8' }],
      name: 'setState',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'PRESALE_PRICE',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'ICO_PRICE1',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'withdrawEther',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'DEVELOPERS_BONUS',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_mgr', type: 'address' }],
      name: 'setTokenManager',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'TOTAL_SUPPLY',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getPrice',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'transfer',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'enableTransfers',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'buyTokens',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'buyTokensICO',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSoldTokens',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: '_owner', type: 'address' },
        { name: '_spender', type: 'address' }
      ],
      name: 'allowance',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'escrow',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'ICO_PRICE3',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'PRESALE_TOKEN_SUPPLY_LIMIT',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'ICO_PRICE2',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        { name: '_tokenManager', type: 'address' },
        { name: '_escrow', type: 'address' },
        { name: '_teamTokenBonus', type: 'address' }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    { payable: true, stateMutability: 'payable', type: 'fallback' },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'owner', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' }
      ],
      name: 'LogBuy',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'owner', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' }
      ],
      name: 'LogBurn',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_from', type: 'address' },
        { indexed: true, name: '_to', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_owner', type: 'address' },
        { indexed: true, name: '_spender', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' }
      ],
      name: 'Approval',
      type: 'event'
    }
  ]
};

export const ABI = [
  {
    'inputs': [],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'account',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'ApprovalForAll',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256[]',
        'name': 'ids',
        'type': 'uint256[]'
      },
      {
        'indexed': false,
        'internalType': 'uint256[]',
        'name': 'values',
        'type': 'uint256[]'
      }
    ],
    'name': 'TransferBatch',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'sender',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'receiver',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'token',
        'type': 'string'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'tokenID',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'senderBalance',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'receiverBalance',
        'type': 'uint256'
      }
    ],
    'name': 'TransferLog',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'TransferSingle',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'value',
        'type': 'string'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256'
      }
    ],
    'name': 'URI',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'account',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': 'accounts',
        'type': 'address[]'
      },
      {
        'internalType': 'uint256[]',
        'name': 'ids',
        'type': 'uint256[]'
      }
    ],
    'name': 'balanceOfBatch',
    'outputs': [
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '_name',
        'type': 'string'
      }
    ],
    'name': 'createUniqueToken',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '_name',
        'type': 'string'
      }
    ],
    'name': 'getBalanceByName',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'account',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      }
    ],
    'name': 'isApprovedForAll',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '_name',
        'type': 'string'
      },
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'mint',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256[]',
        'name': 'ids',
        'type': 'uint256[]'
      },
      {
        'internalType': 'uint256[]',
        'name': 'amounts',
        'type': 'uint256[]'
      },
      {
        'internalType': 'bytes',
        'name': 'data',
        'type': 'bytes'
      }
    ],
    'name': 'safeBatchTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': 'data',
        'type': 'bytes'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'setApprovalForAll',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'bytes4',
        'name': 'interfaceId',
        'type': 'bytes4'
      }
    ],
    'name': 'supportsInterface',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'tokenNames',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'name': 'tokens',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'tokensInCirculation',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_receiver',
        'type': 'address'
      },
      {
        'internalType': 'string',
        'name': '_name',
        'type': 'string'
      },
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferTokens',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'uri',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
];
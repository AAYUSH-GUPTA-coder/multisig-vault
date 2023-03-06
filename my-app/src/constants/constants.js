const ERC20_CONTRACT_ADDRESS = "0x3F78e84159741f6628cBa776B9005a53c485d120";

const MULTI_SIG_WALLET_ADDRESS = "0xccc8aFf496bCae6a05114dB4c27279d8b6D0942A";

const ERC20_ABI = [
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
    ],
    type: "constructor",
    stateMutability: "nonpayable",
  },
  {
    name: "Approval",
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    type: "event",
  },
  {
    name: "Paused",
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    type: "event",
  },
  {
    name: "RoleAdminChanged",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "bytes32", name: "previousAdminRole", type: "bytes32" },
      { internalType: "bytes32", name: "newAdminRole", type: "bytes32" },
    ],
    type: "event",
  },
  {
    name: "RoleGranted",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
    ],
    type: "event",
  },
  {
    name: "RoleRevoked",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
    ],
    type: "event",
  },
  {
    name: "Transfer",
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    type: "event",
  },
  {
    name: "Unpaused",
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    type: "event",
  },
  {
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "MINTER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "PAUSER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "allowance",
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "approve",
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "balanceOf",
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "burn",
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "burnFrom",
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "decreaseAllowance",
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "getRoleAdmin",
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getRoleMember",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    outputs: [{ internalType: "address", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getRoleMemberCount",
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "grantRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "hasRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "increaseAllowance",
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "mint",
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    type: "function",
    stateMutability: "view",
  },
  { name: "pause", type: "function", stateMutability: "nonpayable" },
  {
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "renounceRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "revokeRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "supportsInterface",
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "transfer",
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "transferFrom",
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  { name: "unpause", type: "function", stateMutability: "nonpayable" },
];

const MULTI_SIG_WALLET_ABI = [
  { type: "constructor", stateMutability: "nonpayable" },
  {
    name: "OwnershipTransferred",
    inputs: [
      { internalType: "address", name: "previousOwner", type: "address" },
      { internalType: "address", name: "newOwner", type: "address" },
    ],
    type: "event",
  },
  {
    name: "RoleAdminChanged",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "bytes32", name: "previousAdminRole", type: "bytes32" },
      { internalType: "bytes32", name: "newAdminRole", type: "bytes32" },
    ],
    type: "event",
  },
  {
    name: "RoleGranted",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
    ],
    type: "event",
  },
  {
    name: "RoleRevoked",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
    ],
    type: "event",
  },
  {
    name: "SignerLimitChange",
    inputs: [{ internalType: "uint256", name: "signerLimit", type: "uint256" }],
    type: "event",
  },
  {
    name: "TransactionCompleted",
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "unlockTime", type: "uint256" },
      { internalType: "uint256", name: "transactionId", type: "uint256" },
    ],
    type: "event",
  },
  {
    name: "TransactionCreated",
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "unlockTime", type: "uint256" },
      { internalType: "uint256", name: "transactionId", type: "uint256" },
    ],
    type: "event",
  },
  {
    name: "TransactionRejected",
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "transactionId", type: "uint256" },
    ],
    type: "event",
  },
  {
    name: "TransactionSigned",
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "transactionId", type: "uint256" },
    ],
    type: "event",
  },
  {
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "SIGNER",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "addTransaction",
    inputs: [
      { internalType: "address payable", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_unlockTime", type: "uint256" },
    ],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "balance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "connectToOtherContracts",
    inputs: [
      { internalType: "address[]", name: "contracts", type: "address[]" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "emergencyWithdraw",
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "executeTransaction",
    inputs: [
      { internalType: "uint256", name: "_transactionId", type: "uint256" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "getConfirmationCount",
    inputs: [
      { internalType: "uint256", name: "_transactionId", type: "uint256" },
    ],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getConfirmations",
    inputs: [
      { internalType: "uint256", name: "_transactionId", type: "uint256" },
    ],
    outputs: [
      { internalType: "address[]", name: "_confirmations", type: "address[]" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getRoleAdmin",
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getRoleMember",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    outputs: [{ internalType: "address", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getRoleMemberCount",
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getTransactionCount",
    inputs: [
      { internalType: "bool", name: "pending", type: "bool" },
      { internalType: "bool", name: "executed", type: "bool" },
    ],
    outputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "grantRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "hasRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "rejectTransaction",
    inputs: [
      { internalType: "uint256", name: "_transactionId", type: "uint256" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "renounceOwnership",
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "renounceRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "revokeRole",
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "setSignerLimit",
    inputs: [
      { internalType: "uint256", name: "_signerLimit", type: "uint256" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "signTransaction",
    inputs: [
      { internalType: "uint256", name: "_transactionId", type: "uint256" },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "signerLimit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "supportsInterface",
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "token",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "transactions",
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    outputs: [
      { internalType: "address payable", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "unlockTime", type: "uint256" },
      { internalType: "uint256", name: "signatureCount", type: "uint256" },
      { internalType: "bool", name: "executed", type: "bool" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "transferOwnership",
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    type: "function",
    stateMutability: "nonpayable",
  },
];

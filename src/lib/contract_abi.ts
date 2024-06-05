export const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AllDataReceived",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CannotRemoveYourself",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CannotRenounceRole",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DataAlreadyReceived",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidProofId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidSourceId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidVerifierId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MustBeGreaterThanZero",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyAdmin",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyNodeAdmin",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyOwnerCanModify",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyStaticTeam",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PageSizeExceedsMax",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PrivateViewerDoesNotExist",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RequiredMetadataNotPassed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SourceArchived",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "BeaconUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "instanceId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "dataHash",
        "type": "bytes32"
      }
    ],
    "name": "Consensus",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "instanceId",
        "type": "bytes32"
      }
    ],
    "name": "ConsensusDisagreement",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "instanceId",
        "type": "bytes32"
      }
    ],
    "name": "ConsensusFailed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "instanceId",
        "type": "bytes32"
      }
    ],
    "name": "ConsensusPromoted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "teamManagement",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ModifiedTeamManagementContract",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newMaxPageSize",
        "type": "uint256"
      }
    ],
    "name": "NewMaxPageSize",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sourceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "verifierName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "verifierCategories",
        "type": "string[]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "ownerAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "proofHash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "publicProofHash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "blockTime",
        "type": "uint256"
      }
    ],
    "name": "NewProof",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sourceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "configHash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "ownerAddress",
        "type": "address"
      }
    ],
    "name": "NewSource",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "categories",
        "type": "string[]"
      }
    ],
    "name": "NewVerifier",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "requester",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "publicKey",
        "type": "string"
      }
    ],
    "name": "PrivateEncryptedProofRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "requesterAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "privateEncryptedProofHash",
        "type": "string"
      }
    ],
    "name": "PrivateEncryptedProofReturned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sourceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "name": "ProofMetadata",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "requiredMetadata",
        "type": "string[]"
      }
    ],
    "name": "RequiredMetadataChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sourceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "configHash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "ownerAddress",
        "type": "address"
      }
    ],
    "name": "SourceModified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sourceId_",
        "type": "uint256"
      }
    ],
    "name": "SourceStopped",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "sourceId",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "proofId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "proofHash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "publicProofHash",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "metadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          }
        ],
        "internalType": "struct JiriLedger.ProofObjUpload[]",
        "name": "proofs",
        "type": "tuple[]"
      }
    ],
    "name": "addBulkProof",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "privateViewers",
        "type": "address[]"
      }
    ],
    "name": "addPrivateViewers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sourceId_",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "proofHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "publicProofHash",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "value",
            "type": "string"
          }
        ],
        "internalType": "struct JiriLedger.MetadataObj[]",
        "name": "metadata",
        "type": "tuple[]"
      }
    ],
    "name": "addProof",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "configHash",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "value",
            "type": "string"
          }
        ],
        "internalType": "struct JiriLedger.MetadataObj[]",
        "name": "defaultMetadata",
        "type": "tuple[]"
      }
    ],
    "name": "addSource",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "verifierName",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "iconURI",
        "type": "bytes"
      },
      {
        "internalType": "address[]",
        "name": "privateViewers",
        "type": "address[]"
      },
      {
        "internalType": "string[]",
        "name": "categories",
        "type": "string[]"
      }
    ],
    "name": "addVerifier",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllSources",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "verifierId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "verifierName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "configHash",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "ownerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "readerAddress",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "defaultMetadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "totalProofs",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastProofTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isArchived",
            "type": "bool"
          }
        ],
        "internalType": "struct JiriLedger.SourceObj[]",
        "name": "_sources",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllVerifierTypes",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "bytes",
            "name": "iconURI",
            "type": "bytes"
          },
          {
            "internalType": "address[]",
            "name": "privateViewers",
            "type": "address[]"
          },
          {
            "internalType": "string[]",
            "name": "categories",
            "type": "string[]"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          }
        ],
        "internalType": "struct JiriLedger.Verifier[]",
        "name": "verifiers",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      }
    ],
    "name": "getProof",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "sourceId",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "proofId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "proofHash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "publicProofHash",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "metadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "blockTime",
            "type": "uint256"
          }
        ],
        "internalType": "struct JiriLedger.ProofObj",
        "name": "proof",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRequiredMetadata",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sourceId_",
        "type": "uint256"
      }
    ],
    "name": "getSource",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "verifierId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "verifierName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "configHash",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "ownerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "readerAddress",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "defaultMetadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "totalProofs",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastProofTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isArchived",
            "type": "bool"
          }
        ],
        "internalType": "struct JiriLedger.SourceObj",
        "name": "source",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sourceId_",
        "type": "uint256"
      }
    ],
    "name": "getSourceProofs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "sourceId",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "proofId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "proofHash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "publicProofHash",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "metadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "blockTime",
            "type": "uint256"
          }
        ],
        "internalType": "struct JiriLedger.ProofObj[]",
        "name": "proofs",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sourceId_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pageSize",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startingIndex",
        "type": "uint256"
      }
    ],
    "name": "getSourceProofsPaged",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "sourceId",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "proofId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "proofHash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "publicProofHash",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "metadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "blockTime",
            "type": "uint256"
          }
        ],
        "internalType": "struct JiriLedger.ProofObj[]",
        "name": "pagedProofs",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "getSourcesForOwner",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "verifierId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "verifierName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "configHash",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "ownerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "readerAddress",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "defaultMetadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "totalProofs",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastProofTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isArchived",
            "type": "bool"
          }
        ],
        "internalType": "struct JiriLedger.SourceObj[]",
        "name": "_sources",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pageSize",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startingIndex",
        "type": "uint256"
      }
    ],
    "name": "getSourcesPaged",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "verifierId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "verifierName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "configHash",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "ownerAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "readerAddress",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "value",
                "type": "string"
              }
            ],
            "internalType": "struct JiriLedger.MetadataObj[]",
            "name": "defaultMetadata",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "totalProofs",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastProofTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isArchived",
            "type": "bool"
          }
        ],
        "internalType": "struct JiriLedger.SourceObj[]",
        "name": "pagedSources",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      }
    ],
    "name": "getVerifierType",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "bytes",
            "name": "iconURI",
            "type": "bytes"
          },
          {
            "internalType": "address[]",
            "name": "privateViewers",
            "type": "address[]"
          },
          {
            "internalType": "string[]",
            "name": "categories",
            "type": "string[]"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          }
        ],
        "internalType": "struct JiriLedger.Verifier",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getVerifierTypesForAccount",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "bytes",
            "name": "iconURI",
            "type": "bytes"
          },
          {
            "internalType": "string[]",
            "name": "categories",
            "type": "string[]"
          }
        ],
        "internalType": "struct JiriLedger.VerifierObj[]",
        "name": "verifiers",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "requiredMetadata",
        "type": "string[]"
      },
      {
        "internalType": "address",
        "name": "teamManagementContract",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "minRequiredConsensusCount",
        "type": "uint16"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxPageSize",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minRequired",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sourceId_",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "configHash",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "value",
            "type": "string"
          }
        ],
        "internalType": "struct JiriLedger.MetadataObj[]",
        "name": "metadata",
        "type": "tuple[]"
      }
    ],
    "name": "modifySource",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      }
    ],
    "name": "removeAllPrivateViewers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "privateViewer",
        "type": "address"
      }
    ],
    "name": "removePrivateViewer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "requiredMetadata",
        "type": "string[]"
      }
    ],
    "name": "replaceRequiredMetadata",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "categories",
        "type": "string[]"
      }
    ],
    "name": "replaceVerifierCategories",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "publicKey",
        "type": "string"
      }
    ],
    "name": "requestPrivateEncryptedProof",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "resetProofs",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "proofId",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "requesterAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "privateEncryptedProofHash",
        "type": "string"
      }
    ],
    "name": "returnPrivateEncryptedProof",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sourceId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "sources",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "configHash",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "ownerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "readerAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "totalValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalQuantity",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isArchived",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sourceId_",
        "type": "uint256"
      }
    ],
    "name": "stopSource",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "teamSize",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newMaxPageSize",
        "type": "uint256"
      }
    ],
    "name": "updateMaxPageSize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "teamManagementContract",
        "type": "address"
      }
    ],
    "name": "updateTeamManagementContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "verifierId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "verifierName",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "iconURI",
        "type": "bytes"
      }
    ],
    "name": "updateVerifier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      }
    ],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

export const contractABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'AddressAlreadyAuthorized',
        type: 'error',
    },
    {
        inputs: [],
        name: 'AddressIsNotAuthorized',
        type: 'error',
    },
    {
        inputs: [],
        name: 'CannotRemoveYourself',
        type: 'error',
    },
    {
        inputs: [],
        name: 'CannotRenounceRole',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidSourceId',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidVerifierId',
        type: 'error',
    },
    {
        inputs: [],
        name: 'JiriLedgerProofsAddressNotSet',
        type: 'error',
    },
    {
        inputs: [],
        name: 'MustBeGreaterThanZero',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NoZeroAddress',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyAdmin',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyJiriLedgerPaymentContract',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyJiriLedgerProofsContract',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyMessagesFromPaymentChainId',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyMessagesFromRegisteredChainId',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyMessagesRelayedByTeleporter',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyNodeAdmin',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyOwnerCanModify',
        type: 'error',
    },
    {
        inputs: [],
        name: 'PageSizeExceedsMax',
        type: 'error',
    },
    {
        inputs: [],
        name: 'PrivateViewerDoesNotExist',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'caller',
                type: 'address',
            },
            {
                internalType: 'string',
                name: 'reason',
                type: 'string',
            },
        ],
        name: 'SourceOwnerError',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'previousAdmin',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'newAdmin',
                type: 'address',
            },
        ],
        name: 'AdminChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address[]',
                name: 'newAllowedRelayerAddresses',
                type: 'address[]',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'AllowedRelayerAddressesUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'beacon',
                type: 'address',
            },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'originChainID',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'senderAddress',
                type: 'address',
            },
        ],
        name: 'CrossChainMessageReceived',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'sourceId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'walletAddress',
                type: 'address',
            },
        ],
        name: 'DecryptAuthorizationGranted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'sourceId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'walletAddress',
                type: 'address',
            },
        ],
        name: 'DecryptAuthorizationRevoked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newFeeAmount',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'FeeAmountUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'newFeeTokenAddress',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'FeeTokenAddressUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint8',
                name: 'version',
                type: 'uint8',
            },
        ],
        name: 'Initialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'enum JiriLedgerFunctions',
                name: 'functionType',
                type: 'uint8',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'paramsData',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'messageId',
                type: 'uint256',
            },
        ],
        name: 'InvalidJiriLedgerFunctionCalled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'paymentContract',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'ModifiedJiriPaymentContract',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'paymentChainID',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'senderAddress',
                type: 'address',
            },
        ],
        name: 'ModifiedPaymentChainId',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newMaxPageSize',
                type: 'uint256',
            },
        ],
        name: 'NewMaxPageSize',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'sourceId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'configHash',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'ownerAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'archived',
                type: 'bool',
            },
        ],
        name: 'NewSource',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string[]',
                name: 'categories',
                type: 'string[]',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'formConfigHash',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'autoArchive',
                type: 'bool',
            },
        ],
        name: 'NewVerifier',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'proofId',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'requester',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'publicKey',
                type: 'string',
            },
        ],
        name: 'PrivateEncryptedProofRequested',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'newDestinationBlockchainId',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'RegisteredBlockchainIdUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newRequiredGasLimit',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'RequiredGasLimitUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string[]',
                name: 'requiredMetadata',
                type: 'string[]',
            },
        ],
        name: 'RequiredMetadataChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'previousAdminRole',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'newAdminRole',
                type: 'bytes32',
            },
        ],
        name: 'RoleAdminChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'RoleGranted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'RoleRevoked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'sourceId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'configHash',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'ownerAddress',
                type: 'address',
            },
        ],
        name: 'SourceModified',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'sourceId',
                type: 'uint256',
            },
        ],
        name: 'SourceStopped',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'originChainID',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'senderAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'message',
                type: 'bytes',
            },
        ],
        name: 'TeleporterMessageReceived',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'destinationAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'message',
                type: 'bytes',
            },
        ],
        name: 'TeleporterMessageSent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'lastState',
                type: 'string',
            },
        ],
        name: 'UpdatedSourceLastProofState',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'implementation',
                type: 'address',
            },
        ],
        name: 'Upgraded',
        type: 'event',
    },
    {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                internalType: 'address[]',
                name: 'privateViewers',
                type: 'address[]',
            },
        ],
        name: 'addPrivateViewers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'verifierName',
                type: 'string',
            },
            {
                internalType: 'bytes',
                name: 'iconURI',
                type: 'bytes',
            },
            {
                internalType: 'address[]',
                name: 'privateViewers',
                type: 'address[]',
            },
            {
                internalType: 'string[]',
                name: 'categories',
                type: 'string[]',
            },
            {
                internalType: 'string',
                name: 'formConfigHash',
                type: 'string',
            },
            {
                internalType: 'bool',
                name: 'autoArchive',
                type: 'bool',
            },
        ],
        name: 'addVerifier',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'walletAddress',
                type: 'address',
            },
        ],
        name: 'allowDecrypt',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'walletAddress',
                type: 'address',
            },
        ],
        name: 'disallowDecrypt',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAllSources',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verifierId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'verifierName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'configHash',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: 'ownerAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'readerAddress',
                        type: 'address',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'defaultMetadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalProofs',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'lastProofTimestamp',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'isArchived',
                        type: 'bool',
                    },
                    {
                        internalType: 'string',
                        name: 'lastProofState',
                        type: 'string',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.SourceObj[]',
                name: '_sources',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAllUnarchivedSources',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verifierId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'verifierName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'configHash',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: 'ownerAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'readerAddress',
                        type: 'address',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'defaultMetadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalProofs',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'lastProofTimestamp',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'isArchived',
                        type: 'bool',
                    },
                    {
                        internalType: 'string',
                        name: 'lastProofState',
                        type: 'string',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.SourceObj[]',
                name: '_sources',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAllVerifierTypes',
        outputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes',
                        name: 'iconURI',
                        type: 'bytes',
                    },
                    {
                        internalType: 'string[]',
                        name: 'categories',
                        type: 'string[]',
                    },
                    {
                        internalType: 'string',
                        name: 'formConfigHash',
                        type: 'string',
                    },
                    {
                        internalType: 'bool',
                        name: 'autoArchive',
                        type: 'bool',
                    },
                    {
                        internalType: 'address[]',
                        name: 'privateViewers',
                        type: 'address[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verifierId',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct JiriLedger.VerifierObj[]',
                name: 'verifierObjs',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'proofId',
                type: 'bytes32',
            },
        ],
        name: 'getProof',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'sourceId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'proofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'string',
                        name: 'proofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'publicProofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'metadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'quantity',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockTime',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'state',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'correctedProofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'oldIncorrectProofId',
                        type: 'bytes32',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.ProofObj',
                name: 'proof',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getRequiredMetadata',
        outputs: [
            {
                internalType: 'string[]',
                name: '',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
        ],
        name: 'getRoleAdmin',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
        ],
        name: 'getSource',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verifierId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'verifierName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'configHash',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: 'ownerAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'readerAddress',
                        type: 'address',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'defaultMetadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalProofs',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'lastProofTimestamp',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'isArchived',
                        type: 'bool',
                    },
                    {
                        internalType: 'string',
                        name: 'lastProofState',
                        type: 'string',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.SourceObj',
                name: 'source',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
        ],
        name: 'getSourceDefaultMetadata',
        outputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'value',
                        type: 'string',
                    },
                    {
                        internalType: 'bool',
                        name: 'exists',
                        type: 'bool',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.Metadata',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
        ],
        name: 'getSourceProofs',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'sourceId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'proofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'string',
                        name: 'proofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'publicProofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'metadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'quantity',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockTime',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'state',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'correctedProofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'oldIncorrectProofId',
                        type: 'bytes32',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.ProofObj[]',
                name: 'proofs',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'pageSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'startingIndex',
                type: 'uint256',
            },
        ],
        name: 'getSourceProofsPaged',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'sourceId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'proofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'string',
                        name: 'proofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'publicProofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'metadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'quantity',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockTime',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'state',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'correctedProofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'oldIncorrectProofId',
                        type: 'bytes32',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.ProofObj[]',
                name: 'pagedProofs',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
        ],
        name: 'getSourceProofsUnique',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'sourceId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'proofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'string',
                        name: 'proofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'publicProofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'metadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'quantity',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockTime',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'state',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'correctedProofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'oldIncorrectProofId',
                        type: 'bytes32',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.ProofObj[]',
                name: 'proofs',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'pageSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'startingIndex',
                type: 'uint256',
            },
        ],
        name: 'getSourceProofsUniquePaged',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'sourceId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'proofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'string',
                        name: 'proofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'publicProofHash',
                        type: 'string',
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'metadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'quantity',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockTime',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'state',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'correctedProofId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'oldIncorrectProofId',
                        type: 'bytes32',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.ProofObj[]',
                name: 'pagedProofs',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner_',
                type: 'address',
            },
        ],
        name: 'getSourcesForOwner',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verifierId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'verifierName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'configHash',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: 'ownerAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'readerAddress',
                        type: 'address',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'defaultMetadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalProofs',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'lastProofTimestamp',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'isArchived',
                        type: 'bool',
                    },
                    {
                        internalType: 'string',
                        name: 'lastProofState',
                        type: 'string',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.SourceObj[]',
                name: '_sources',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'pageSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'startingIndex',
                type: 'uint256',
            },
        ],
        name: 'getSourcesPaged',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verifierId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'verifierName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'configHash',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: 'ownerAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'readerAddress',
                        type: 'address',
                    },
                    {
                        components: [
                            {
                                internalType: 'string',
                                name: 'name',
                                type: 'string',
                            },
                            {
                                internalType: 'string',
                                name: 'value',
                                type: 'string',
                            },
                        ],
                        internalType:
                            'struct IJiriLedgerDataStruct.MetadataObj[]',
                        name: 'defaultMetadata',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalProofs',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'lastProofTimestamp',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'isArchived',
                        type: 'bool',
                    },
                    {
                        internalType: 'string',
                        name: 'lastProofState',
                        type: 'string',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.SourceObj[]',
                name: 'pagedSources',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
        ],
        name: 'getVerifierType',
        outputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes',
                        name: 'iconURI',
                        type: 'bytes',
                    },
                    {
                        internalType: 'address[]',
                        name: 'privateViewers',
                        type: 'address[]',
                    },
                    {
                        internalType: 'string[]',
                        name: 'categories',
                        type: 'string[]',
                    },
                    {
                        internalType: 'bool',
                        name: 'exists',
                        type: 'bool',
                    },
                    {
                        internalType: 'string',
                        name: 'formConfigHash',
                        type: 'string',
                    },
                    {
                        internalType: 'bool',
                        name: 'autoArchive',
                        type: 'bool',
                    },
                ],
                internalType: 'struct IJiriLedgerDataStruct.Verifier',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'getVerifierTypesForAccount',
        outputs: [
            {
                components: [
                    {
                        internalType: 'string',
                        name: 'name',
                        type: 'string',
                    },
                    {
                        internalType: 'bytes',
                        name: 'iconURI',
                        type: 'bytes',
                    },
                    {
                        internalType: 'string[]',
                        name: 'categories',
                        type: 'string[]',
                    },
                    {
                        internalType: 'string',
                        name: 'formConfigHash',
                        type: 'string',
                    },
                    {
                        internalType: 'bool',
                        name: 'autoArchive',
                        type: 'bool',
                    },
                    {
                        internalType: 'address[]',
                        name: 'privateViewers',
                        type: 'address[]',
                    },
                    {
                        internalType: 'uint256',
                        name: 'verifierId',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct JiriLedger.VerifierObj[]',
                name: 'verifiers',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'hasRole',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'requiredMetadata',
                type: 'string[]',
            },
            {
                internalType: 'address',
                name: 'teleporterMessengerAddress',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: 'paymentChainId_',
                type: 'bytes32',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'isAuthorizedDecryptor',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
        ],
        name: 'listDecryptAuths',
        outputs: [
            {
                internalType: 'address[]',
                name: '',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxPageSize',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'proxiableUUID',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'originChainID',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'senderAddress',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'message',
                type: 'bytes',
            },
        ],
        name: 'receiveTeleporterMessage',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
        ],
        name: 'removeAllPrivateViewers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'privateViewer',
                type: 'address',
            },
        ],
        name: 'removePrivateViewer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'requiredMetadata',
                type: 'string[]',
            },
        ],
        name: 'replaceRequiredMetadata',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                internalType: 'string[]',
                name: 'categories',
                type: 'string[]',
            },
        ],
        name: 'replaceVerifierCategories',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'jiriProofsContract',
                type: 'address',
            },
        ],
        name: 'setJiriLedgerProofs',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'sourceId_',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'lastState',
                type: 'string',
            },
        ],
        name: 'setLastProofState',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'sourceId',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'sources',
        outputs: [
            {
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'configHash',
                type: 'string',
            },
            {
                internalType: 'address',
                name: 'ownerAddress',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'readerAddress',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'exists',
                type: 'bool',
            },
            {
                internalType: 'bool',
                name: 'isArchived',
                type: 'bool',
            },
            {
                internalType: 'string',
                name: 'lastProofState',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'teleporterMessenger',
        outputs: [
            {
                internalType: 'contract ITeleporterMessenger',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'newAllowedRelayerAddresses',
                type: 'address[]',
            },
        ],
        name: 'updateAllowedRelayerAddresses',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newFeeAmount',
                type: 'uint256',
            },
        ],
        name: 'updateFeeAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newFeeTokenAddress',
                type: 'address',
            },
        ],
        name: 'updateFeeTokenAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'paymentChainId_',
                type: 'bytes32',
            },
        ],
        name: 'updateJiriPaymentChainId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'paymentContractAddress',
                type: 'address',
            },
        ],
        name: 'updateJiriPaymentContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newMaxPageSize',
                type: 'uint256',
            },
        ],
        name: 'updateMaxPageSize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'newOtherBlockchainId',
                type: 'bytes32',
            },
        ],
        name: 'updateOtherBlockchainId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'newPaymentBlockchainId',
                type: 'bytes32',
            },
        ],
        name: 'updatePaymentBlockchainId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newRequiredGasLimit',
                type: 'uint256',
            },
        ],
        name: 'updateRequiredGasLimit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'verifierId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'verifierName',
                type: 'string',
            },
            {
                internalType: 'bytes',
                name: 'iconURI',
                type: 'bytes',
            },
            {
                internalType: 'string',
                name: 'formConfigHash',
                type: 'string',
            },
        ],
        name: 'updateVerifier',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newImplementation',
                type: 'address',
            },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newImplementation',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
];

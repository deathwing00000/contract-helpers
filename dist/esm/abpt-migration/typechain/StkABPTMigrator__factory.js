/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import { utils, Contract, ContractFactory } from 'ethers';
const _abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'stkABPTV2',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'caller',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'token',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'ERC20Rescued',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'caller',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'NativeTokensRescued',
        type: 'event',
    },
    {
        inputs: [],
        name: 'STK_ABPT_V2',
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
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'emergencyEtherTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'erc20Token',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'emergencyTokenTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                internalType: 'uint256[]',
                name: 'tokenOutAmountsMin',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'poolOutAmountMin',
                type: 'uint256',
            },
        ],
        name: 'migrateStkABPT',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
            },
            {
                internalType: 'uint8',
                name: 'v',
                type: 'uint8',
            },
            {
                internalType: 'bytes32',
                name: 'r',
                type: 'bytes32',
            },
            {
                internalType: 'bytes32',
                name: 's',
                type: 'bytes32',
            },
            {
                internalType: 'uint256[]',
                name: 'tokenOutAmountsMin',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'poolOutAmountMin',
                type: 'uint256',
            },
        ],
        name: 'migrateStkABPTWithPermit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'whoCanRescue',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        stateMutability: 'payable',
        type: 'receive',
    },
];
const _bytecode = '0x60a06040523480156200001157600080fd5b506040516200187e3803806200187e833981016040819052620000349162000280565b6200006b737fc66500c84a76ad7e9c93437bfc5ac33e2ddae973ba12222222228d8ba445958a75a0704d566bf2c86000196200010e565b620000a273ae7ab96520de3a18e5e111b5eaab095312d7fe84737f39c581f595b53c5cb19bd0b3f8da6c935e2ca06000196200010e565b620000d9737f39c581f595b53c5cb19bd0b3f8da6c935e2ca073ba12222222228d8ba445958a75a0704d566bf2c86000196200010e565b620000fc733de27efa2f1aa663ae5d458857e731c129069f29826000196200010e565b6001600160a01b0316608052620002f0565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156200015f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001859190620002b2565b1115620002045760405163095ea7b360e01b81526001600160a01b0383811660048301526000602483015284169063095ea7b3906044016020604051808303816000875af1158015620001dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002029190620002cc565b505b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b3906044016020604051808303816000875af115801562000254573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200027a9190620002cc565b50505050565b6000602082840312156200029357600080fd5b81516001600160a01b0381168114620002ab57600080fd5b9392505050565b600060208284031215620002c557600080fd5b5051919050565b600060208284031215620002df57600080fd5b81518015158114620002ab57600080fd5b60805161156c620003126000396000818160b90152610b26015261156c6000f3fe6080604052600436106100595760003560e01c806334ea0957146100655780637c544cc4146100875780637fb64fb2146100a7578063a3d5b255146100f7578063a4757b0f14610117578063eed88b8d1461013e57600080fd5b3661006057005b600080fd5b34801561007157600080fd5b50610085610080366004611136565b61015e565b005b34801561009357600080fd5b506100856100a2366004611189565b610170565b3480156100b357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b34801561010357600080fd5b5061008561011236600461122f565b61020f565b34801561012357600080fd5b50735300a1a15135ea4dc7ad5a167152c01efc9b192a6100db565b34801561014a57600080fd5b5061008561015936600461126b565b6102de565b61016a8484848461042e565b50505050565b60405163d505accf60e01b8152336004820152306024820152604481018990526064810188905260ff8716608482015260a4810186905260c4810185905273a1116930326d21fb917d5a27f1e9943a9595fb479063d505accf9060e401600060405180830381600087803b1580156101e757600080fd5b505af19250505080156101f8575060015b506102058884848461042e565b5050505050505050565b33735300a1a15135ea4dc7ad5a167152c01efc9b192a1461026e5760405162461bcd60e51b815260206004820152601460248201527327a7262cafa922a9a1aaa2afa3aaa0a92224a0a760611b60448201526064015b60405180910390fd5b6102826001600160a01b0384168383610c2c565b816001600160a01b0316836001600160a01b0316336001600160a01b03167fc7af665d489507e14ae25ac7ab0030fc7f570869610bdd32117ea56b60ae5c61846040516102d191815260200190565b60405180910390a4505050565b33735300a1a15135ea4dc7ad5a167152c01efc9b192a146103385760405162461bcd60e51b815260206004820152601460248201527327a7262cafa922a9a1aaa2afa3aaa0a92224a0a760611b6044820152606401610265565b604080516000808252602082019092526001600160a01b03841690839060405161036291906112cf565b60006040518083038185875af1925050503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b50509050806103e95760405162461bcd60e51b815260206004820152601160248201527011551217d514905394d1915497d1905253607a1b6044820152606401610265565b6040518281526001600160a01b0384169033907fb7c602059992183c7b767c08204223afc99f1895fd175adf9ece23ce9f5bb8b79060200160405180910390a3505050565b6040516370a0823160e01b815230600482015260009073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2906370a0823190602401602060405180830381865afa158015610480573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a491906112eb565b6040516370a0823160e01b8152306004820152909150600090737fc66500c84a76ad7e9c93437bfc5ac33e2ddae9906370a0823190602401602060405180830381865afa1580156104f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051d91906112eb565b6040516370a0823160e01b81523060048201529091506000907341a08648c3766f9f9d85598ff102a08f4ef84f84906370a0823190602401602060405180830381865afa158015610572573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059691906112eb565b6040516370a0823160e01b8152306004820152909150600090733de27efa2f1aa663ae5d458857e731c129069f29906370a0823190602401602060405180830381865afa1580156105eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060f91906112eb565b6040516323b872dd60e01b8152336004820152306024820152604481018a905290915073a1116930326d21fb917d5a27f1e9943a9595fb47906323b872dd906064016020604051808303816000875af1158015610670573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106949190611304565b506040516301e9a69560e41b81523060048201526024810189905273a1116930326d21fb917d5a27f1e9943a9595fb4790631e9a695090604401600060405180830381600087803b1580156106e857600080fd5b505af11580156106fc573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092508491507341a08648c3766f9f9d85598ff102a08f4ef84f84906370a0823190602401602060405180830381865afa158015610754573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077891906112eb565b610782919061132d565b60405163b02f0b7360e01b81529091507341a08648c3766f9f9d85598ff102a08f4ef84f849063b02f0b73906107c09084908c908c90600401611354565b600060405180830381600087803b1580156107da57600080fd5b505af11580156107ee573d6000803e3d6000fd5b50506040516370a0823160e01b81523060048201526000925073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc291506370a0823190602401602060405180830381865afa158015610844573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086891906112eb565b6040516370a0823160e01b8152306004820152909150600090737fc66500c84a76ad7e9c93437bfc5ac33e2ddae9906370a0823190602401602060405180830381865afa1580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e191906112eb565b6040805160028082526060820183529293506000929091602083019080368337019050509050737f39c581f595b53c5cb19bd0b3f8da6c935e2ca08160008151811061092f5761092f611395565b60200260200101906001600160a01b031690816001600160a01b031681525050737fc66500c84a76ad7e9c93437bfc5ac33e2ddae98160018151811061097757610977611395565b60200260200101906001600160a01b031690816001600160a01b0316815250506000815167ffffffffffffffff8111156109b3576109b3611295565b6040519080825280602002602001820160405280156109dc578160200160208202803683370190505b5090506109f16109ec8a8661132d565b610c83565b81600081518110610a0457610a04611395565b6020908102919091010152610a19888461132d565b81600181518110610a2c57610a2c611395565b60200260200101818152505060006001828c604051602001610a50939291906113e6565b60408051601f198184030181526080830182528583526020830185905282820181905260006060840152905163172b958560e31b815290925073ba12222222228d8ba445958a75a0704d566bf2c89063b95cac2890610ad9907f3de27efa2f1aa663ae5d458857e731c129069f2900020000000000000000058890309081908790600401611459565b600060405180830381600087803b158015610af357600080fd5b505af1158015610b07573d6000803e3d6000fd5b50506040516370a0823160e01b81523060048201526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016925063adc9772e915033908b90733de27efa2f1aa663ae5d458857e731c129069f29906370a0823190602401602060405180830381865afa158015610b8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb391906112eb565b610bbd919061132d565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610c0357600080fd5b505af1158015610c17573d6000803e3d6000fd5b50505050505050505050505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c7e908490610ef5565b505050565b604051632e1a7d4d60e01b81526004810182905260009073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290632e1a7d4d90602401600060405180830381600087803b158015610cd357600080fd5b505af1158015610ce7573d6000803e3d6000fd5b50506040516370a0823160e01b81523060048201526000925073ae7ab96520de3a18e5e111b5eaab095312d7fe8491506370a0823190602401602060405180830381865afa158015610d3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6191906112eb565b60405163a1903eab60e01b8152735300a1a15135ea4dc7ad5a167152c01efc9b192a600482015290915073ae7ab96520de3a18e5e111b5eaab095312d7fe849063a1903eab90859060240160206040518083038185885af1158015610dca573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610def91906112eb565b506040516370a0823160e01b815230600482015260009073ae7ab96520de3a18e5e111b5eaab095312d7fe84906370a0823190602401602060405180830381865afa158015610e42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6691906112eb565b9050737f39c581f595b53c5cb19bd0b3f8da6c935e2ca063ea598cb0610e8c848461132d565b6040518263ffffffff1660e01b8152600401610eaa91815260200190565b6020604051808303816000875af1158015610ec9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eed91906112eb565b949350505050565b6000610f4a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610fc79092919063ffffffff16565b805190915015610c7e5780806020019051810190610f689190611304565b610c7e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610265565b6060610eed848460008585600080866001600160a01b03168587604051610fee91906112cf565b60006040518083038185875af1925050503d806000811461102b576040519150601f19603f3d011682016040523d82523d6000602084013e611030565b606091505b50915091506110418783838761104c565b979650505050505050565b606083156110bb5782516000036110b4576001600160a01b0385163b6110b45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610265565b5081610eed565b610eed83838151156110d05781518083602001fd5b8060405162461bcd60e51b81526004016102659190611523565b60008083601f8401126110fc57600080fd5b50813567ffffffffffffffff81111561111457600080fd5b6020830191508360208260051b850101111561112f57600080fd5b9250929050565b6000806000806060858703121561114c57600080fd5b84359350602085013567ffffffffffffffff81111561116a57600080fd5b611176878288016110ea565b9598909750949560400135949350505050565b60008060008060008060008060e0898b0312156111a557600080fd5b8835975060208901359650604089013560ff811681146111c457600080fd5b9550606089013594506080890135935060a089013567ffffffffffffffff8111156111ee57600080fd5b6111fa8b828c016110ea565b999c989b50969995989497949560c00135949350505050565b80356001600160a01b038116811461122a57600080fd5b919050565b60008060006060848603121561124457600080fd5b61124d84611213565b925061125b60208501611213565b9150604084013590509250925092565b6000806040838503121561127e57600080fd5b61128783611213565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156112c65781810151838201526020016112ae565b50506000910152565b600082516112e18184602087016112ab565b9190910192915050565b6000602082840312156112fd57600080fd5b5051919050565b60006020828403121561131657600080fd5b8151801515811461132657600080fd5b9392505050565b8181038181111561134e57634e487b7160e01b600052601160045260246000fd5b92915050565b838152604060208201819052810182905260006001600160fb1b0383111561137b57600080fd5b8260051b8085606085013791909101606001949350505050565b634e487b7160e01b600052603260045260246000fd5b600081518084526020808501945080840160005b838110156113db578151875295820195908201906001016113bf565b509495945050505050565b60006002851061140657634e487b7160e01b600052602160045260246000fd5b8482526060602083015261141d60608301856113ab565b9050826040830152949350505050565b600081518084526114458160208601602086016112ab565b601f01601f19169290920160200192915050565b8481526000602060018060a01b038087168285015280861660408501526080606085015261010084018551608080870152818151808452610120880191508583019350600092505b808310156114c3578351851682529285019260019290920191908501906114a1565b50848801519450607f199350838782030160a08801526114e381866113ab565b94505050506040850151818584030160c0860152611501838261142d565b92505050606084015161151860e085018215159052565b509695505050505050565b602081526000611326602083018461142d56fea2646970667358221220b4078261a61bbcb84af497a16bd52e652a994b9068cb8d9bb872cb5659b50dbb64736f6c63430008140033';
const isSuperArgs = (xs) => xs.length > 1;
export class StkABPTMigrator__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(stkABPTV2, overrides) {
        return super.deploy(stkABPTV2, overrides || {});
    }
    getDeployTransaction(stkABPTV2, overrides) {
        return super.getDeployTransaction(stkABPTV2, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
StkABPTMigrator__factory.bytecode = _bytecode;
StkABPTMigrator__factory.abi = _abi;
//# sourceMappingURL=StkABPTMigrator__factory.js.map
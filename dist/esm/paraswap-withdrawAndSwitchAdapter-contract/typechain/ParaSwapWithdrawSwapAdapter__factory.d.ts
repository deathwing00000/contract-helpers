import { Signer, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { ParaSwapWithdrawSwapAdapter, ParaSwapWithdrawSwapAdapterInterface } from './ParaSwapWithdrawSwapAdapter';
export declare class ParaSwapWithdrawSwapAdapter__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(addressesProvider: string, augustusRegistry: string, owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ParaSwapWithdrawSwapAdapter>;
    getDeployTransaction(addressesProvider: string, augustusRegistry: string, owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ParaSwapWithdrawSwapAdapter;
    connect(signer: Signer): ParaSwapWithdrawSwapAdapter__factory;
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162002a8a38038062002a8a833981016040819052620000359162000328565b82828180806001600160a01b03166080816001600160a01b031681525050806001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000092573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000b891906200037c565b6001600160a01b031660a05250600080546001600160a01b0319163390811782556040519091829160008051602062002a6a833981519152908290a350806001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015a91906200037c565b6001600160a01b0390811660c05260405163fb04e17b60e01b815260006004820152908316915063fb04e17b90602401602060405180830381865afa158015620001a8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ce9190620003a3565b15620001d957600080fd5b6001600160a01b031660e0525060018055620001f581620001fe565b505050620003c7565b6000546001600160a01b031633146200025e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620002c55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000255565b600080546040516001600160a01b038085169392169160008051602062002a6a83398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811681146200032557600080fd5b50565b6000806000606084860312156200033e57600080fd5b83516200034b816200030f565b60208501519093506200035e816200030f565b604085015190925062000371816200030f565b809150509250925092565b6000602082840312156200038f57600080fd5b81516200039c816200030f565b9392505050565b600060208284031215620003b657600080fd5b815180151581146200039c57600080fd5b60805160a05160c05160e05161264e6200041c600039600081816101990152610da301526000818161017201526118fc0152600081816101db01528181610ac90152610c7e0152600060e7015261264e6000f3fe608060405234801561001057600080fd5b50600436106100c85760003560e01c80633a829867116100815780637535d2461161005b5780637535d246146101d65780638da5cb5b146101fd578063f2fde38b1461021b57600080fd5b80633a829867146101945780635fd73e07146101bb578063715018a6146101ce57600080fd5b80631b11d0ff116100b25780631b11d0ff1461013357806332e4b2861461015657806338013f021461016d57600080fd5b8062ae3bf8146100cd5780630542975c146100e2575b600080fd5b6100e06100db366004611e98565b61022e565b005b6101097f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610146610141366004611efe565b610385565b604051901515815260200161012a565b61015f610bb881565b60405190815260200161012a565b6101097f000000000000000000000000000000000000000000000000000000000000000081565b6101097f000000000000000000000000000000000000000000000000000000000000000081565b6100e06101c9366004611f7a565b61045b565b6100e061068a565b6101097f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff16610109565b6100e0610229366004611e98565b61077a565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6103826102d660005473ffffffffffffffffffffffffffffffffffffffff1690565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610340573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610364919061204c565b73ffffffffffffffffffffffffffffffffffffffff8416919061092b565b50565b6000600260015414156103f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102ab565b60026001556040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e4f545f535550504f525445440000000000000000000000000000000000000060448201526064016102ab565b600260015414156104c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102ab565b600260015560006104d88a610a04565b6101000151905085156105e5576040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610552573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610576919061204c565b9050888111156105e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f494e53554646494349454e545f414d4f554e545f544f5f53574150000000000060448201526064016102ab565b97505b6106008a82338b6105fb368890038801886120c5565b610b3b565b60006106558787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050868e8e8e8e610d5b565b905061067973ffffffffffffffffffffffffffffffffffffffff8b1630338461154f565b505060018055505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461070b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ab565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ab565b73ffffffffffffffffffffffffffffffffffffffff811661089e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102ab565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff84166004830152602482018390529060008060448382895af161098e573d6000803e3d6000fd5b506109988461162b565b6109fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f475076323a206661696c6564207472616e73666572000000000000000000000060448201526064016102ab565b50505050565b604080516102008101825260006101e08201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c08101919091526040517f35ea6a7500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f000000000000000000000000000000000000000000000000000000000000000016906335ea6a75906024016101e060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b359190612224565b92915050565b602081015115610c0857805160208201516040808401516060850151608086015192517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff89811660048301523060248301526044820196909652606481019490945260ff909116608484015260a483015260c48201529085169063d505accf9060e401600060405180830381600087803b158015610bef57600080fd5b505af1158015610c03573d6000803e3d6000fd5b505050505b610c2a73ffffffffffffffffffffffffffffffffffffffff85168430856116f7565b6040517f69328dec00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526024820184905230604483015283917f0000000000000000000000000000000000000000000000000000000000000000909116906369328dec906064016020604051808303816000875af1158015610cc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ced919061204c565b14610d54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f554e45585045435445445f414d4f554e545f57495448445241574e000000000060448201526064016102ab565b5050505050565b6040517ffb04e17b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063fb04e17b90602401602060405180830381865afa158015610dec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e109190612347565b610e76576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f494e56414c49445f41554755535455530000000000000000000000000000000060448201526064016102ab565b6000610e81866117d2565b60ff1690506000610e91866117d2565b60ff1690506000610ea1886118b4565b90506000610eae886118b4565b90506000610f06610ec3610bb8612710612398565b610f00610edb610ed489600a6124cf565b8690611969565b610efa610ef3610eec8a600a6124cf565b8990611969565b8d90611969565b90611993565b906119a6565b905086811115610f72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4d494e5f414d4f554e545f455843454544535f4d41585f534c4950504147450060448201526064016102ab565b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000935073ffffffffffffffffffffffffffffffffffffffff891692506370a082319150602401602060405180830381865afa158015610fe4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611008919061204c565b905083811015611074576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f494e53554646494349454e545f42414c414e43455f4245464f52455f5357415060448201526064016102ab565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa1580156110e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611105919061204c565b905060008873ffffffffffffffffffffffffffffffffffffffff1663d2c4b5986040518163ffffffff1660e01b8152600401602060405180830381865afa158015611154573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117891906124db565b905061119c73ffffffffffffffffffffffffffffffffffffffff89168260006119e9565b6111bd73ffffffffffffffffffffffffffffffffffffffff891682886119e9565b8a1561124f5760048b101580156111e0575089516111dc906020611b70565b8b11155b611246576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f46524f4d5f414d4f554e545f4f46465345545f4f55545f4f465f52414e47450060448201526064016102ab565b8560208c018b01525b60008973ffffffffffffffffffffffffffffffffffffffff168b6040516112769190612524565b6000604051808303816000865af19150503d80600081146112b3576040519150601f19603f3d011682016040523d82523d6000602084013e6112b8565b606091505b50509050806112cb573d6000803e3d6000fd5b6112d58785612398565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8b16906370a0823190602401602060405180830381865afa15801561133f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611363919061204c565b146113ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f57524f4e475f42414c414e43455f41465445525f53574150000000000000000060448201526064016102ab565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015261146490849073ffffffffffffffffffffffffffffffffffffffff8b16906370a0823190602401602060405180830381865afa15801561143a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145e919061204c565b90611b70565b9450858510156114d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f494e53554646494349454e545f414d4f554e545f52454345495645440000000060448201526064016102ab565b8773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167fa078c4190abe07940190effc1846be0ccf03ad6007bc9e93f9697d0b460befbb8988604051611538929190918252602082015260400190565b60405180910390a350505050979650505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526109fe9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b80565b600061166b565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d80156116aa57602081146116e4576116a57f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611632565b6116f1565b823b6116db576116db7f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611632565b600191506116f1565b3d6000803e600051151591505b50919050565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff8581166004840152841660248301526044820183905290600080606483828a5af1611762573d6000803e3d6000fd5b5061176c8561162b565b610d54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d0000000000000060448201526064016102ab565b6000808273ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611820573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118449190612540565b9050604d8160ff161115610b35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f544f4f5f4d414e595f444543494d414c535f4f4e5f544f4b454e00000000000060448201526064016102ab565b6040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063b3596f0790602401602060405180830381865afa158015611945573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b35919061204c565b600082158061198a575050818102818382816119875761198761255d565b04145b610b3557600080fd5b600061199f828461258c565b9392505050565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec77839004841115176119db57600080fd5b506127109102611388010490565b801580611a8957506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a87919061204c565b155b611b15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016102ab565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611b6b9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115a9565b505050565b80820382811115610b3557600080fd5b6000611be2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c8c9092919063ffffffff16565b805190915015611b6b5780806020019051810190611c009190612347565b611b6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102ab565b6060611c9b8484600085611ca3565b949350505050565b606082471015611d35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102ab565b843b611d9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102ab565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dc69190612524565b60006040518083038185875af1925050503d8060008114611e03576040519150601f19603f3d011682016040523d82523d6000602084013e611e08565b606091505b5091509150611e18828286611e23565b979650505050505050565b60608315611e3257508161199f565b825115611e425782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ab91906125c7565b73ffffffffffffffffffffffffffffffffffffffff8116811461038257600080fd5b600060208284031215611eaa57600080fd5b813561199f81611e76565b60008083601f840112611ec757600080fd5b50813567ffffffffffffffff811115611edf57600080fd5b602083019150836020828501011115611ef757600080fd5b9250929050565b60008060008060008060a08789031215611f1757600080fd5b8635611f2281611e76565b955060208701359450604087013593506060870135611f4081611e76565b9250608087013567ffffffffffffffff811115611f5c57600080fd5b611f6889828a01611eb5565b979a9699509497509295939492505050565b6000806000806000806000806000898b03610180811215611f9a57600080fd5b8a35611fa581611e76565b995060208b0135611fb581611e76565b985060408b0135975060608b0135965060808b0135955060a08b013567ffffffffffffffff811115611fe657600080fd5b611ff28d828e01611eb5565b90965094505060c08b013561200681611e76565b925060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff208201121561203857600080fd5b5060e08a0190509295985092959850929598565b60006020828403121561205e57600080fd5b5051919050565b6040516101e0810167ffffffffffffffff811182821017156120b0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b60ff8116811461038257600080fd5b600060a082840312156120d757600080fd5b60405160a0810181811067ffffffffffffffff82111715612121577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b806040525082358152602083013560208201526040830135612142816120b6565b6040820152606083810135908201526080928301359281019290925250919050565b60006020828403121561217657600080fd5b6040516020810181811067ffffffffffffffff821117156121c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff811681146121ed57600080fd5b919050565b805164ffffffffff811681146121ed57600080fd5b805161ffff811681146121ed57600080fd5b80516121ed81611e76565b60006101e0828403121561223757600080fd5b61223f612065565b6122498484612164565b8152612257602084016121cd565b6020820152612268604084016121cd565b6040820152612279606084016121cd565b606082015261228a608084016121cd565b608082015261229b60a084016121cd565b60a08201526122ac60c084016121f2565b60c08201526122bd60e08401612207565b60e08201526101006122d0818501612219565b908201526101206122e2848201612219565b908201526101406122f4848201612219565b90820152610160612306848201612219565b908201526101806123188482016121cd565b908201526101a061232a8482016121cd565b908201526101c061233c8482016121cd565b908201529392505050565b60006020828403121561235957600080fd5b8151801515811461199f57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156123aa576123aa612369565b500390565b600181815b8085111561240857817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156123ee576123ee612369565b808516156123fb57918102915b93841c93908002906123b4565b509250929050565b60008261241f57506001610b35565b8161242c57506000610b35565b8160018114612442576002811461244c57612468565b6001915050610b35565b60ff84111561245d5761245d612369565b50506001821b610b35565b5060208310610133831016604e8410600b841016171561248b575081810a610b35565b61249583836123af565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156124c7576124c7612369565b029392505050565b600061199f8383612410565b6000602082840312156124ed57600080fd5b815161199f81611e76565b60005b838110156125135781810151838201526020016124fb565b838111156109fe5750506000910152565b600082516125368184602087016124f8565b9190910192915050565b60006020828403121561255257600080fd5b815161199f816120b6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826125c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60208152600082518060208401526125e68160408501602087016124f8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122053173fbb394766c5e4c941a26d39593c45f08f8884a8df45392aa618f2c613ab64736f6c634300080a00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ParaSwapWithdrawSwapAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ParaSwapWithdrawSwapAdapter;
}
//# sourceMappingURL=ParaSwapWithdrawSwapAdapter__factory.d.ts.map
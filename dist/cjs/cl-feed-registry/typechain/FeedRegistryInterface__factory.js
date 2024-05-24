"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedRegistryInterface__factory = void 0;
const ethers_1 = require("ethers");
class FeedRegistryInterface__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FeedRegistryInterface__factory = FeedRegistryInterface__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'base',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'quote',
                type: 'address',
            },
        ],
        name: 'decimals',
        outputs: [
            {
                internalType: 'uint8',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'base',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'quote',
                type: 'address',
            },
        ],
        name: 'description',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'base',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'quote',
                type: 'address',
            },
        ],
        name: 'latestRoundData',
        outputs: [
            {
                internalType: 'uint80',
                name: 'roundId',
                type: 'uint80',
            },
            {
                internalType: 'int256',
                name: 'answer',
                type: 'int256',
            },
            {
                internalType: 'uint256',
                name: 'startedAt',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'updatedAt',
                type: 'uint256',
            },
            {
                internalType: 'uint80',
                name: 'answeredInRound',
                type: 'uint80',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=FeedRegistryInterface__factory.js.map
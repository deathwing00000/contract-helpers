import { __decorate, __metadata, __param } from "tslib";
import { constants, utils } from 'ethers';
import BaseService from '../commons/BaseService';
import { eEthereumTxType, ProtocolAction, } from '../commons/types';
import { DEFAULT_APPROVE_AMOUNT, valueToWei } from '../commons/utils';
import { SignStakingValidator, StakingValidator, } from '../commons/validators/methodValidators';
import { isEthAddress, isPositiveAmount, isPositiveOrMinusOneAmount, } from '../commons/validators/paramValidators';
import { ERC20_2612Service } from '../erc20-2612';
import { ERC20Service } from '../erc20-contract';
import { AaveTokenV3Service } from '../governance-v3/aave-token-v3';
import { StakedAaveV3__factory } from './typechain/IStakedAaveV3__factory';
export class StakingService extends BaseService {
    constructor(provider, stakingServiceConfig) {
        super(provider, StakedAaveV3__factory);
        this.erc20Service = new ERC20Service(provider);
        this.erc20_2612Service = new ERC20_2612Service(provider);
        this.stakingContractAddress = stakingServiceConfig.TOKEN_STAKING_ADDRESS;
    }
    async signStaking(user, amount, deadline) {
        const { getTokenData } = this.erc20Service;
        const stakingContract = this.getContractInstance(this.stakingContractAddress);
        // eslint-disable-next-line new-cap
        const stakedToken = await stakingContract.STAKED_TOKEN();
        const { decimals } = await getTokenData(stakedToken);
        const convertedAmount = valueToWei(amount, decimals);
        const { chainId } = await this.provider.getNetwork();
        const aaveTokenV3Service = new AaveTokenV3Service(stakedToken, this.provider);
        const { name, version } = await aaveTokenV3Service.getEip712Domain();
        const nonce = await this.erc20_2612Service.getNonce({
            token: stakedToken,
            owner: user,
        });
        if (nonce === null) {
            return '';
        }
        const typeData = {
            types: {
                EIP712Domain: [
                    { name: 'name', type: 'string' },
                    { name: 'version', type: 'string' },
                    { name: 'chainId', type: 'uint256' },
                    { name: 'verifyingContract', type: 'address' },
                ],
                Permit: [
                    { name: 'owner', type: 'address' },
                    { name: 'spender', type: 'address' },
                    { name: 'value', type: 'uint256' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'deadline', type: 'uint256' },
                ],
            },
            primaryType: 'Permit',
            domain: {
                name,
                version,
                chainId,
                verifyingContract: stakedToken,
            },
            message: {
                owner: user,
                spender: this.stakingContractAddress,
                value: convertedAmount,
                nonce,
                deadline,
            },
        };
        return JSON.stringify(typeData);
    }
    async stakeWithPermit(user, amount, signature, deadline) {
        const txs = [];
        const { decimalsOf } = this.erc20Service;
        const stakingContract = this.getContractInstance(this.stakingContractAddress);
        // eslint-disable-next-line new-cap
        const stakedToken = await stakingContract.STAKED_TOKEN();
        const stakedTokenDecimals = await decimalsOf(stakedToken);
        const convertedAmount = valueToWei(amount, stakedTokenDecimals);
        const sig = utils.splitSignature(signature);
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => stakingContract.populateTransaction.stakeWithPermit(convertedAmount, deadline, sig.v, sig.r, sig.s),
            from: user,
        });
        txs.push({
            tx: txCallback,
            txType: eEthereumTxType.STAKE_ACTION,
            gas: this.generateTxPriceEstimation(txs, txCallback, ProtocolAction.stakeWithPermit),
        });
        return txs;
    }
    async stake(user, amount, onBehalfOf) {
        const txs = [];
        const { decimalsOf, isApproved, approve } = this.erc20Service;
        const stakingContract = this.getContractInstance(this.stakingContractAddress);
        // eslint-disable-next-line new-cap
        const stakedToken = await stakingContract.STAKED_TOKEN();
        const stakedTokenDecimals = await decimalsOf(stakedToken);
        const convertedAmount = valueToWei(amount, stakedTokenDecimals);
        const approved = await isApproved({
            token: stakedToken,
            user,
            spender: this.stakingContractAddress,
            amount,
        });
        if (!approved) {
            const approveTx = approve({
                user,
                token: stakedToken,
                spender: this.stakingContractAddress,
                amount: DEFAULT_APPROVE_AMOUNT,
            });
            txs.push(approveTx);
        }
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => stakingContract.populateTransaction.stake(onBehalfOf !== null && onBehalfOf !== void 0 ? onBehalfOf : user, convertedAmount),
            from: user,
            action: ProtocolAction.stake,
        });
        txs.push({
            tx: txCallback,
            txType: eEthereumTxType.STAKE_ACTION,
            gas: this.generateTxPriceEstimation(txs, txCallback, ProtocolAction.stake),
        });
        return txs;
    }
    async redeem(user, amount) {
        let convertedAmount;
        const stakingContract = this.getContractInstance(this.stakingContractAddress);
        if (amount === '-1') {
            convertedAmount = constants.MaxUint256.toString();
        }
        else {
            const { decimalsOf } = this.erc20Service;
            // eslint-disable-next-line new-cap
            const stakedToken = await stakingContract.STAKED_TOKEN();
            const stakedTokenDecimals = await decimalsOf(stakedToken);
            convertedAmount = valueToWei(amount, stakedTokenDecimals);
        }
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => stakingContract.populateTransaction.redeem(user, convertedAmount),
            from: user,
            gasSurplus: 20,
        });
        return [
            {
                tx: txCallback,
                txType: eEthereumTxType.STAKE_ACTION,
                gas: this.generateTxPriceEstimation([], txCallback),
            },
        ];
    }
    cooldown(user) {
        const stakingContract = this.getContractInstance(this.stakingContractAddress);
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => stakingContract.populateTransaction.cooldown(),
            from: user,
        });
        return [
            {
                tx: txCallback,
                txType: eEthereumTxType.STAKE_ACTION,
                gas: this.generateTxPriceEstimation([], txCallback),
            },
        ];
    }
    async claimRewards(user, amount) {
        let convertedAmount;
        const stakingContract = this.getContractInstance(this.stakingContractAddress);
        if (amount === '-1') {
            convertedAmount = constants.MaxUint256.toString();
        }
        else {
            const { decimalsOf } = this.erc20Service;
            // eslint-disable-next-line new-cap
            const stakedToken = await stakingContract.REWARD_TOKEN();
            const stakedTokenDecimals = await decimalsOf(stakedToken);
            convertedAmount = valueToWei(amount, stakedTokenDecimals);
        }
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => stakingContract.populateTransaction.claimRewards(user, convertedAmount),
            from: user,
            gasSurplus: 20,
            action: ProtocolAction.claimRewards,
        });
        return [
            {
                tx: txCallback,
                txType: eEthereumTxType.STAKE_ACTION,
                gas: this.generateTxPriceEstimation([], txCallback, ProtocolAction.claimRewards),
            },
        ];
    }
    async claimRewardsAndStake(user, amount) {
        let convertedAmount;
        const stakingContract = this.getContractInstance(this.stakingContractAddress);
        if (amount === '-1') {
            convertedAmount = constants.MaxUint256.toString();
        }
        else {
            const { decimalsOf } = this.erc20Service;
            // eslint-disable-next-line new-cap
            const stakedToken = await stakingContract.STAKED_TOKEN();
            const stakedTokenDecimals = await decimalsOf(stakedToken);
            convertedAmount = valueToWei(amount, stakedTokenDecimals);
        }
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => stakingContract.populateTransaction.claimRewardsAndStake(user, convertedAmount),
            from: user,
            gasSurplus: 20,
            action: ProtocolAction.claimRewardsAndStake,
        });
        return [
            {
                tx: txCallback,
                txType: eEthereumTxType.STAKE_ACTION,
                gas: this.generateTxPriceEstimation([], txCallback, ProtocolAction.claimRewardsAndStake),
            },
        ];
    }
}
__decorate([
    SignStakingValidator,
    __param(0, isEthAddress()),
    __param(1, isPositiveAmount()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StakingService.prototype, "signStaking", null);
__decorate([
    SignStakingValidator,
    __param(0, isEthAddress()),
    __param(1, isPositiveAmount()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, String]),
    __metadata("design:returntype", Promise)
], StakingService.prototype, "stakeWithPermit", null);
__decorate([
    StakingValidator,
    __param(0, isEthAddress()),
    __param(1, isPositiveAmount()),
    __param(2, isEthAddress()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StakingService.prototype, "stake", null);
__decorate([
    StakingValidator,
    __param(0, isEthAddress()),
    __param(1, isPositiveOrMinusOneAmount()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StakingService.prototype, "redeem", null);
__decorate([
    StakingValidator,
    __param(0, isEthAddress()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], StakingService.prototype, "cooldown", null);
__decorate([
    StakingValidator,
    __param(0, isEthAddress()),
    __param(1, isPositiveOrMinusOneAmount()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StakingService.prototype, "claimRewards", null);
__decorate([
    StakingValidator,
    __param(0, isEthAddress()),
    __param(1, isPositiveOrMinusOneAmount()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StakingService.prototype, "claimRewardsAndStake", null);
//# sourceMappingURL=index.js.map
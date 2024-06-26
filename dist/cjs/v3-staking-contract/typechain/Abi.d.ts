import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';
export declare namespace DistributionTypes {
    type AssetConfigInputStruct = {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
    };
    type AssetConfigInputStructOutput = [BigNumber, BigNumber, string] & {
        emissionPerSecond: BigNumber;
        totalStaked: BigNumber;
        underlyingAsset: string;
    };
}
export interface AbiInterface extends utils.Interface {
    functions: {
        'CLAIM_HELPER_ROLE()': FunctionFragment;
        'COOLDOWN_ADMIN_ROLE()': FunctionFragment;
        'DOMAIN_SEPARATOR()': FunctionFragment;
        'EMISSION_MANAGER()': FunctionFragment;
        'EXCHANGE_RATE_UNIT()': FunctionFragment;
        'INITIAL_EXCHANGE_RATE()': FunctionFragment;
        'LOWER_BOUND()': FunctionFragment;
        'PRECISION()': FunctionFragment;
        'REWARDS_VAULT()': FunctionFragment;
        'REWARD_TOKEN()': FunctionFragment;
        'SLASH_ADMIN_ROLE()': FunctionFragment;
        'STAKED_TOKEN()': FunctionFragment;
        'UNSTAKE_WINDOW()': FunctionFragment;
        'allowance(address,address)': FunctionFragment;
        'approve(address,uint256)': FunctionFragment;
        'assets(address)': FunctionFragment;
        'balanceOf(address)': FunctionFragment;
        'claimRewards(address,uint256)': FunctionFragment;
        'claimRewardsAndRedeem(address,uint256,uint256)': FunctionFragment;
        'claimRewardsAndRedeemOnBehalf(address,address,uint256,uint256)': FunctionFragment;
        'claimRewardsOnBehalf(address,address,uint256)': FunctionFragment;
        'claimRoleAdmin(uint256)': FunctionFragment;
        'configureAssets((uint128,uint256,address)[])': FunctionFragment;
        'cooldown()': FunctionFragment;
        'cooldownOnBehalfOf(address)': FunctionFragment;
        'decimals()': FunctionFragment;
        'distributionEnd()': FunctionFragment;
        'eip712Domain()': FunctionFragment;
        'getAdmin(uint256)': FunctionFragment;
        'getCooldownSeconds()': FunctionFragment;
        'getExchangeRate()': FunctionFragment;
        'getMaxSlashablePercentage()': FunctionFragment;
        'getPendingAdmin(uint256)': FunctionFragment;
        'getTotalRewardsBalance(address)': FunctionFragment;
        'getUserAssetData(address,address)': FunctionFragment;
        'inPostSlashingPeriod()': FunctionFragment;
        'initialize(string,string,address,address,address,uint256,uint256)': FunctionFragment;
        'name()': FunctionFragment;
        'nonces(address)': FunctionFragment;
        'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
        'previewRedeem(uint256)': FunctionFragment;
        'previewStake(uint256)': FunctionFragment;
        'redeem(address,uint256)': FunctionFragment;
        'redeemOnBehalf(address,address,uint256)': FunctionFragment;
        'returnFunds(uint256)': FunctionFragment;
        'setCooldownSeconds(uint256)': FunctionFragment;
        'setDistributionEnd(uint256)': FunctionFragment;
        'setMaxSlashablePercentage(uint256)': FunctionFragment;
        'setPendingAdmin(uint256,address)': FunctionFragment;
        'settleSlashing()': FunctionFragment;
        'slash(address,uint256)': FunctionFragment;
        'stake(address,uint256)': FunctionFragment;
        'stakeWithPermit(uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
        'stakerRewardsToClaim(address)': FunctionFragment;
        'stakersCooldowns(address)': FunctionFragment;
        'symbol()': FunctionFragment;
        'totalSupply()': FunctionFragment;
        'transfer(address,uint256)': FunctionFragment;
        'transferFrom(address,address,uint256)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'CLAIM_HELPER_ROLE' | 'COOLDOWN_ADMIN_ROLE' | 'DOMAIN_SEPARATOR' | 'EMISSION_MANAGER' | 'EXCHANGE_RATE_UNIT' | 'INITIAL_EXCHANGE_RATE' | 'LOWER_BOUND' | 'PRECISION' | 'REWARDS_VAULT' | 'REWARD_TOKEN' | 'SLASH_ADMIN_ROLE' | 'STAKED_TOKEN' | 'UNSTAKE_WINDOW' | 'allowance' | 'approve' | 'assets' | 'balanceOf' | 'claimRewards' | 'claimRewardsAndRedeem' | 'claimRewardsAndRedeemOnBehalf' | 'claimRewardsOnBehalf' | 'claimRoleAdmin' | 'configureAssets' | 'cooldown' | 'cooldownOnBehalfOf' | 'decimals' | 'distributionEnd' | 'eip712Domain' | 'getAdmin' | 'getCooldownSeconds' | 'getExchangeRate' | 'getMaxSlashablePercentage' | 'getPendingAdmin' | 'getTotalRewardsBalance' | 'getUserAssetData' | 'inPostSlashingPeriod' | 'initialize' | 'name' | 'nonces' | 'permit' | 'previewRedeem' | 'previewStake' | 'redeem' | 'redeemOnBehalf' | 'returnFunds' | 'setCooldownSeconds' | 'setDistributionEnd' | 'setMaxSlashablePercentage' | 'setPendingAdmin' | 'settleSlashing' | 'slash' | 'stake' | 'stakeWithPermit' | 'stakerRewardsToClaim' | 'stakersCooldowns' | 'symbol' | 'totalSupply' | 'transfer' | 'transferFrom'): FunctionFragment;
    encodeFunctionData(functionFragment: 'CLAIM_HELPER_ROLE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'COOLDOWN_ADMIN_ROLE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'DOMAIN_SEPARATOR', values?: undefined): string;
    encodeFunctionData(functionFragment: 'EMISSION_MANAGER', values?: undefined): string;
    encodeFunctionData(functionFragment: 'EXCHANGE_RATE_UNIT', values?: undefined): string;
    encodeFunctionData(functionFragment: 'INITIAL_EXCHANGE_RATE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'LOWER_BOUND', values?: undefined): string;
    encodeFunctionData(functionFragment: 'PRECISION', values?: undefined): string;
    encodeFunctionData(functionFragment: 'REWARDS_VAULT', values?: undefined): string;
    encodeFunctionData(functionFragment: 'REWARD_TOKEN', values?: undefined): string;
    encodeFunctionData(functionFragment: 'SLASH_ADMIN_ROLE', values?: undefined): string;
    encodeFunctionData(functionFragment: 'STAKED_TOKEN', values?: undefined): string;
    encodeFunctionData(functionFragment: 'UNSTAKE_WINDOW', values?: undefined): string;
    encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'assets', values: [string]): string;
    encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
    encodeFunctionData(functionFragment: 'claimRewards', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'claimRewardsAndRedeem', values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'claimRewardsAndRedeemOnBehalf', values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'claimRewardsOnBehalf', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'claimRoleAdmin', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'configureAssets', values: [DistributionTypes.AssetConfigInputStruct[]]): string;
    encodeFunctionData(functionFragment: 'cooldown', values?: undefined): string;
    encodeFunctionData(functionFragment: 'cooldownOnBehalfOf', values: [string]): string;
    encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
    encodeFunctionData(functionFragment: 'distributionEnd', values?: undefined): string;
    encodeFunctionData(functionFragment: 'eip712Domain', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getAdmin', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getCooldownSeconds', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getExchangeRate', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getMaxSlashablePercentage', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getPendingAdmin', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getTotalRewardsBalance', values: [string]): string;
    encodeFunctionData(functionFragment: 'getUserAssetData', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'inPostSlashingPeriod', values?: undefined): string;
    encodeFunctionData(functionFragment: 'initialize', values: [
        string,
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: 'name', values?: undefined): string;
    encodeFunctionData(functionFragment: 'nonces', values: [string]): string;
    encodeFunctionData(functionFragment: 'permit', values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: 'previewRedeem', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'previewStake', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'redeem', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'redeemOnBehalf', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'returnFunds', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setCooldownSeconds', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setDistributionEnd', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setMaxSlashablePercentage', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setPendingAdmin', values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: 'settleSlashing', values?: undefined): string;
    encodeFunctionData(functionFragment: 'slash', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'stake', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'stakeWithPermit', values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: 'stakerRewardsToClaim', values: [string]): string;
    encodeFunctionData(functionFragment: 'stakersCooldowns', values: [string]): string;
    encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: 'CLAIM_HELPER_ROLE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'COOLDOWN_ADMIN_ROLE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'DOMAIN_SEPARATOR', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'EMISSION_MANAGER', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'EXCHANGE_RATE_UNIT', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'INITIAL_EXCHANGE_RATE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'LOWER_BOUND', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'PRECISION', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'REWARDS_VAULT', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'REWARD_TOKEN', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'SLASH_ADMIN_ROLE', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'STAKED_TOKEN', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'UNSTAKE_WINDOW', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'assets', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimRewards', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimRewardsAndRedeem', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimRewardsAndRedeemOnBehalf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimRewardsOnBehalf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimRoleAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'configureAssets', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cooldown', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cooldownOnBehalfOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'distributionEnd', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'eip712Domain', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCooldownSeconds', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getExchangeRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getMaxSlashablePercentage', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getPendingAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getTotalRewardsBalance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getUserAssetData', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'inPostSlashingPeriod', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'previewRedeem', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'previewStake', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'redeemOnBehalf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'returnFunds', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setCooldownSeconds', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setDistributionEnd', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setMaxSlashablePercentage', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setPendingAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'settleSlashing', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'slash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'stakeWithPermit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'stakerRewardsToClaim', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'stakersCooldowns', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
    events: {
        'Approval(address,address,uint256)': EventFragment;
        'AssetConfigUpdated(address,uint256)': EventFragment;
        'AssetIndexUpdated(address,uint256)': EventFragment;
        'Cooldown(address,uint256)': EventFragment;
        'CooldownSecondsChanged(uint256)': EventFragment;
        'DistributionEndChanged(uint256)': EventFragment;
        'EIP712DomainChanged()': EventFragment;
        'ExchangeRateChanged(uint216)': EventFragment;
        'FundsReturned(uint256)': EventFragment;
        'Initialized(uint64)': EventFragment;
        'MaxSlashablePercentageChanged(uint256)': EventFragment;
        'PendingAdminChanged(address,uint256)': EventFragment;
        'Redeem(address,address,uint256,uint256)': EventFragment;
        'RewardsAccrued(address,uint256)': EventFragment;
        'RewardsClaimed(address,address,uint256)': EventFragment;
        'RoleClaimed(address,uint256)': EventFragment;
        'Slashed(address,uint256)': EventFragment;
        'SlashingExitWindowDurationChanged(uint256)': EventFragment;
        'SlashingSettled()': EventFragment;
        'Staked(address,address,uint256,uint256)': EventFragment;
        'Transfer(address,address,uint256)': EventFragment;
        'UserIndexUpdated(address,address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'AssetConfigUpdated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'AssetIndexUpdated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Cooldown'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'CooldownSecondsChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'DistributionEndChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'EIP712DomainChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ExchangeRateChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'FundsReturned'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'MaxSlashablePercentageChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PendingAdminChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Redeem'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RewardsAccrued'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RewardsClaimed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RoleClaimed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Slashed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SlashingExitWindowDurationChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SlashingSettled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'UserIndexUpdated'): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface AssetConfigUpdatedEventObject {
    asset: string;
    emission: BigNumber;
}
export declare type AssetConfigUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], AssetConfigUpdatedEventObject>;
export declare type AssetConfigUpdatedEventFilter = TypedEventFilter<AssetConfigUpdatedEvent>;
export interface AssetIndexUpdatedEventObject {
    asset: string;
    index: BigNumber;
}
export declare type AssetIndexUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], AssetIndexUpdatedEventObject>;
export declare type AssetIndexUpdatedEventFilter = TypedEventFilter<AssetIndexUpdatedEvent>;
export interface CooldownEventObject {
    user: string;
    amount: BigNumber;
}
export declare type CooldownEvent = TypedEvent<[
    string,
    BigNumber
], CooldownEventObject>;
export declare type CooldownEventFilter = TypedEventFilter<CooldownEvent>;
export interface CooldownSecondsChangedEventObject {
    cooldownSeconds: BigNumber;
}
export declare type CooldownSecondsChangedEvent = TypedEvent<[
    BigNumber
], CooldownSecondsChangedEventObject>;
export declare type CooldownSecondsChangedEventFilter = TypedEventFilter<CooldownSecondsChangedEvent>;
export interface DistributionEndChangedEventObject {
    endTimestamp: BigNumber;
}
export declare type DistributionEndChangedEvent = TypedEvent<[
    BigNumber
], DistributionEndChangedEventObject>;
export declare type DistributionEndChangedEventFilter = TypedEventFilter<DistributionEndChangedEvent>;
export interface EIP712DomainChangedEventObject {
}
export declare type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export declare type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
export interface ExchangeRateChangedEventObject {
    exchangeRate: BigNumber;
}
export declare type ExchangeRateChangedEvent = TypedEvent<[
    BigNumber
], ExchangeRateChangedEventObject>;
export declare type ExchangeRateChangedEventFilter = TypedEventFilter<ExchangeRateChangedEvent>;
export interface FundsReturnedEventObject {
    amount: BigNumber;
}
export declare type FundsReturnedEvent = TypedEvent<[
    BigNumber
], FundsReturnedEventObject>;
export declare type FundsReturnedEventFilter = TypedEventFilter<FundsReturnedEvent>;
export interface InitializedEventObject {
    version: BigNumber;
}
export declare type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MaxSlashablePercentageChangedEventObject {
    newPercentage: BigNumber;
}
export declare type MaxSlashablePercentageChangedEvent = TypedEvent<[
    BigNumber
], MaxSlashablePercentageChangedEventObject>;
export declare type MaxSlashablePercentageChangedEventFilter = TypedEventFilter<MaxSlashablePercentageChangedEvent>;
export interface PendingAdminChangedEventObject {
    newPendingAdmin: string;
    role: BigNumber;
}
export declare type PendingAdminChangedEvent = TypedEvent<[
    string,
    BigNumber
], PendingAdminChangedEventObject>;
export declare type PendingAdminChangedEventFilter = TypedEventFilter<PendingAdminChangedEvent>;
export interface RedeemEventObject {
    from: string;
    to: string;
    assets: BigNumber;
    shares: BigNumber;
}
export declare type RedeemEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], RedeemEventObject>;
export declare type RedeemEventFilter = TypedEventFilter<RedeemEvent>;
export interface RewardsAccruedEventObject {
    user: string;
    amount: BigNumber;
}
export declare type RewardsAccruedEvent = TypedEvent<[
    string,
    BigNumber
], RewardsAccruedEventObject>;
export declare type RewardsAccruedEventFilter = TypedEventFilter<RewardsAccruedEvent>;
export interface RewardsClaimedEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export declare type RewardsClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RewardsClaimedEventObject>;
export declare type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;
export interface RoleClaimedEventObject {
    newAdmin: string;
    role: BigNumber;
}
export declare type RoleClaimedEvent = TypedEvent<[
    string,
    BigNumber
], RoleClaimedEventObject>;
export declare type RoleClaimedEventFilter = TypedEventFilter<RoleClaimedEvent>;
export interface SlashedEventObject {
    destination: string;
    amount: BigNumber;
}
export declare type SlashedEvent = TypedEvent<[string, BigNumber], SlashedEventObject>;
export declare type SlashedEventFilter = TypedEventFilter<SlashedEvent>;
export interface SlashingExitWindowDurationChangedEventObject {
    windowSeconds: BigNumber;
}
export declare type SlashingExitWindowDurationChangedEvent = TypedEvent<[
    BigNumber
], SlashingExitWindowDurationChangedEventObject>;
export declare type SlashingExitWindowDurationChangedEventFilter = TypedEventFilter<SlashingExitWindowDurationChangedEvent>;
export interface SlashingSettledEventObject {
}
export declare type SlashingSettledEvent = TypedEvent<[], SlashingSettledEventObject>;
export declare type SlashingSettledEventFilter = TypedEventFilter<SlashingSettledEvent>;
export interface StakedEventObject {
    from: string;
    to: string;
    assets: BigNumber;
    shares: BigNumber;
}
export declare type StakedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], StakedEventObject>;
export declare type StakedEventFilter = TypedEventFilter<StakedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UserIndexUpdatedEventObject {
    user: string;
    asset: string;
    index: BigNumber;
}
export declare type UserIndexUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], UserIndexUpdatedEventObject>;
export declare type UserIndexUpdatedEventFilter = TypedEventFilter<UserIndexUpdatedEvent>;
export interface Abi extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AbiInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        CLAIM_HELPER_ROLE(overrides?: CallOverrides): Promise<[BigNumber]>;
        COOLDOWN_ADMIN_ROLE(overrides?: CallOverrides): Promise<[BigNumber]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        EXCHANGE_RATE_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        INITIAL_EXCHANGE_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;
        LOWER_BOUND(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRECISION(overrides?: CallOverrides): Promise<[number]>;
        REWARDS_VAULT(overrides?: CallOverrides): Promise<[string]>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        SLASH_ADMIN_ROLE(overrides?: CallOverrides): Promise<[BigNumber]>;
        STAKED_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        assets(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            emissionPerSecond: BigNumber;
            lastUpdateTimestamp: BigNumber;
            index: BigNumber;
        }>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimRewards(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimRewardsAndRedeem(to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimRewardsAndRedeemOnBehalf(from: string, to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimRewardsOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimRoleAdmin(role: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cooldown(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cooldownOnBehalfOf(from: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        distributionEnd(overrides?: CallOverrides): Promise<[BigNumber]>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        getAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getCooldownSeconds(overrides?: CallOverrides): Promise<[BigNumber]>;
        getExchangeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMaxSlashablePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPendingAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getTotalRewardsBalance(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        inPostSlashingPeriod(overrides?: CallOverrides): Promise<[boolean]>;
        initialize(name: string, symbol: string, slashingAdmin: string, cooldownPauseAdmin: string, claimHelper: string, maxSlashablePercentage: BigNumberish, cooldownSeconds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewStake(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        redeem(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        returnFunds(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCooldownSeconds(cooldownSeconds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setDistributionEnd(newDistributionEnd: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMaxSlashablePercentage(percentage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPendingAdmin(role: BigNumberish, newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        settleSlashing(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        slash(destination: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stake(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stakeWithPermit(amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stakerRewardsToClaim(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stakersCooldowns(arg0: string, overrides?: CallOverrides): Promise<[number, BigNumber] & {
            timestamp: number;
            amount: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    CLAIM_HELPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
    COOLDOWN_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;
    EXCHANGE_RATE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
    INITIAL_EXCHANGE_RATE(overrides?: CallOverrides): Promise<BigNumber>;
    LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
    PRECISION(overrides?: CallOverrides): Promise<number>;
    REWARDS_VAULT(overrides?: CallOverrides): Promise<string>;
    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
    SLASH_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
    STAKED_TOKEN(overrides?: CallOverrides): Promise<string>;
    UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    assets(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        emissionPerSecond: BigNumber;
        lastUpdateTimestamp: BigNumber;
        index: BigNumber;
    }>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimRewards(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimRewardsAndRedeem(to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimRewardsAndRedeemOnBehalf(from: string, to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimRewardsOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimRoleAdmin(role: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cooldown(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cooldownOnBehalfOf(from: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    distributionEnd(overrides?: CallOverrides): Promise<BigNumber>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    getAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getCooldownSeconds(overrides?: CallOverrides): Promise<BigNumber>;
    getExchangeRate(overrides?: CallOverrides): Promise<BigNumber>;
    getMaxSlashablePercentage(overrides?: CallOverrides): Promise<BigNumber>;
    getPendingAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getTotalRewardsBalance(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    inPostSlashingPeriod(overrides?: CallOverrides): Promise<boolean>;
    initialize(name: string, symbol: string, slashingAdmin: string, cooldownPauseAdmin: string, claimHelper: string, maxSlashablePercentage: BigNumberish, cooldownSeconds: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewStake(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    redeem(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    returnFunds(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCooldownSeconds(cooldownSeconds: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setDistributionEnd(newDistributionEnd: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMaxSlashablePercentage(percentage: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPendingAdmin(role: BigNumberish, newPendingAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    settleSlashing(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    slash(destination: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stake(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stakeWithPermit(amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stakerRewardsToClaim(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    stakersCooldowns(arg0: string, overrides?: CallOverrides): Promise<[number, BigNumber] & {
        timestamp: number;
        amount: BigNumber;
    }>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        CLAIM_HELPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        COOLDOWN_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;
        EXCHANGE_RATE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        INITIAL_EXCHANGE_RATE(overrides?: CallOverrides): Promise<BigNumber>;
        LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION(overrides?: CallOverrides): Promise<number>;
        REWARDS_VAULT(overrides?: CallOverrides): Promise<string>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
        SLASH_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        STAKED_TOKEN(overrides?: CallOverrides): Promise<string>;
        UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        assets(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            emissionPerSecond: BigNumber;
            lastUpdateTimestamp: BigNumber;
            index: BigNumber;
        }>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimRewardsAndRedeem(to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimRewardsAndRedeemOnBehalf(from: string, to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimRewardsOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimRoleAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<void>;
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: CallOverrides): Promise<void>;
        cooldown(overrides?: CallOverrides): Promise<void>;
        cooldownOnBehalfOf(from: string, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        distributionEnd(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        getAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getCooldownSeconds(overrides?: CallOverrides): Promise<BigNumber>;
        getExchangeRate(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxSlashablePercentage(overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getTotalRewardsBalance(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        inPostSlashingPeriod(overrides?: CallOverrides): Promise<boolean>;
        initialize(name: string, symbol: string, slashingAdmin: string, cooldownPauseAdmin: string, claimHelper: string, maxSlashablePercentage: BigNumberish, cooldownSeconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewStake(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        redeemOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        returnFunds(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setCooldownSeconds(cooldownSeconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDistributionEnd(newDistributionEnd: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxSlashablePercentage(percentage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPendingAdmin(role: BigNumberish, newPendingAdmin: string, overrides?: CallOverrides): Promise<void>;
        settleSlashing(overrides?: CallOverrides): Promise<void>;
        slash(destination: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        stake(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stakeWithPermit(amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        stakerRewardsToClaim(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakersCooldowns(arg0: string, overrides?: CallOverrides): Promise<[number, BigNumber] & {
            timestamp: number;
            amount: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        'Approval(address,address,uint256)'(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        'AssetConfigUpdated(address,uint256)'(asset?: string | null, emission?: null): AssetConfigUpdatedEventFilter;
        AssetConfigUpdated(asset?: string | null, emission?: null): AssetConfigUpdatedEventFilter;
        'AssetIndexUpdated(address,uint256)'(asset?: string | null, index?: null): AssetIndexUpdatedEventFilter;
        AssetIndexUpdated(asset?: string | null, index?: null): AssetIndexUpdatedEventFilter;
        'Cooldown(address,uint256)'(user?: string | null, amount?: null): CooldownEventFilter;
        Cooldown(user?: string | null, amount?: null): CooldownEventFilter;
        'CooldownSecondsChanged(uint256)'(cooldownSeconds?: null): CooldownSecondsChangedEventFilter;
        CooldownSecondsChanged(cooldownSeconds?: null): CooldownSecondsChangedEventFilter;
        'DistributionEndChanged(uint256)'(endTimestamp?: null): DistributionEndChangedEventFilter;
        DistributionEndChanged(endTimestamp?: null): DistributionEndChangedEventFilter;
        'EIP712DomainChanged()'(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        'ExchangeRateChanged(uint216)'(exchangeRate?: null): ExchangeRateChangedEventFilter;
        ExchangeRateChanged(exchangeRate?: null): ExchangeRateChangedEventFilter;
        'FundsReturned(uint256)'(amount?: null): FundsReturnedEventFilter;
        FundsReturned(amount?: null): FundsReturnedEventFilter;
        'Initialized(uint64)'(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        'MaxSlashablePercentageChanged(uint256)'(newPercentage?: null): MaxSlashablePercentageChangedEventFilter;
        MaxSlashablePercentageChanged(newPercentage?: null): MaxSlashablePercentageChangedEventFilter;
        'PendingAdminChanged(address,uint256)'(newPendingAdmin?: string | null, role?: null): PendingAdminChangedEventFilter;
        PendingAdminChanged(newPendingAdmin?: string | null, role?: null): PendingAdminChangedEventFilter;
        'Redeem(address,address,uint256,uint256)'(from?: string | null, to?: string | null, assets?: null, shares?: null): RedeemEventFilter;
        Redeem(from?: string | null, to?: string | null, assets?: null, shares?: null): RedeemEventFilter;
        'RewardsAccrued(address,uint256)'(user?: null, amount?: null): RewardsAccruedEventFilter;
        RewardsAccrued(user?: null, amount?: null): RewardsAccruedEventFilter;
        'RewardsClaimed(address,address,uint256)'(from?: string | null, to?: string | null, amount?: null): RewardsClaimedEventFilter;
        RewardsClaimed(from?: string | null, to?: string | null, amount?: null): RewardsClaimedEventFilter;
        'RoleClaimed(address,uint256)'(newAdmin?: string | null, role?: null): RoleClaimedEventFilter;
        RoleClaimed(newAdmin?: string | null, role?: null): RoleClaimedEventFilter;
        'Slashed(address,uint256)'(destination?: string | null, amount?: null): SlashedEventFilter;
        Slashed(destination?: string | null, amount?: null): SlashedEventFilter;
        'SlashingExitWindowDurationChanged(uint256)'(windowSeconds?: null): SlashingExitWindowDurationChangedEventFilter;
        SlashingExitWindowDurationChanged(windowSeconds?: null): SlashingExitWindowDurationChangedEventFilter;
        'SlashingSettled()'(): SlashingSettledEventFilter;
        SlashingSettled(): SlashingSettledEventFilter;
        'Staked(address,address,uint256,uint256)'(from?: string | null, to?: string | null, assets?: null, shares?: null): StakedEventFilter;
        Staked(from?: string | null, to?: string | null, assets?: null, shares?: null): StakedEventFilter;
        'Transfer(address,address,uint256)'(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        'UserIndexUpdated(address,address,uint256)'(user?: string | null, asset?: string | null, index?: null): UserIndexUpdatedEventFilter;
        UserIndexUpdated(user?: string | null, asset?: string | null, index?: null): UserIndexUpdatedEventFilter;
    };
    estimateGas: {
        CLAIM_HELPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        COOLDOWN_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        EXCHANGE_RATE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        INITIAL_EXCHANGE_RATE(overrides?: CallOverrides): Promise<BigNumber>;
        LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        REWARDS_VAULT(overrides?: CallOverrides): Promise<BigNumber>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        SLASH_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        STAKED_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        assets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimRewardsAndRedeem(to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimRewardsAndRedeemOnBehalf(from: string, to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimRewardsOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimRoleAdmin(role: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cooldown(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cooldownOnBehalfOf(from: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        distributionEnd(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        getAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCooldownSeconds(overrides?: CallOverrides): Promise<BigNumber>;
        getExchangeRate(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxSlashablePercentage(overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalRewardsBalance(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        inPostSlashingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(name: string, symbol: string, slashingAdmin: string, cooldownPauseAdmin: string, claimHelper: string, maxSlashablePercentage: BigNumberish, cooldownSeconds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewStake(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        returnFunds(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCooldownSeconds(cooldownSeconds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setDistributionEnd(newDistributionEnd: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMaxSlashablePercentage(percentage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPendingAdmin(role: BigNumberish, newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        settleSlashing(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        slash(destination: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stake(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stakeWithPermit(amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stakerRewardsToClaim(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakersCooldowns(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CLAIM_HELPER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COOLDOWN_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EXCHANGE_RATE_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INITIAL_EXCHANGE_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LOWER_BOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REWARDS_VAULT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SLASH_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKED_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        assets(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimRewardsAndRedeem(to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimRewardsAndRedeemOnBehalf(from: string, to: string, claimAmount: BigNumberish, redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimRewardsOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimRoleAdmin(role: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cooldown(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cooldownOnBehalfOf(from: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        distributionEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCooldownSeconds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExchangeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxSlashablePercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingAdmin(role: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalRewardsBalance(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inPostSlashingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(name: string, symbol: string, slashingAdmin: string, cooldownPauseAdmin: string, claimHelper: string, maxSlashablePercentage: BigNumberish, cooldownSeconds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewStake(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemOnBehalf(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        returnFunds(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCooldownSeconds(cooldownSeconds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setDistributionEnd(newDistributionEnd: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMaxSlashablePercentage(percentage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPendingAdmin(role: BigNumberish, newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        settleSlashing(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        slash(destination: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stake(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stakeWithPermit(amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stakerRewardsToClaim(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakersCooldowns(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Abi.d.ts.map
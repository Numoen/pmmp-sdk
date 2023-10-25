import { BaseERC20, ERC20Amount, Price } from "reverse-mirage";
import { Address } from "viem";
import { ERC20 } from "./erc20";

export type LendgineLP = BaseERC20<"lendgineLP">;

export type Lendgine = {
  token0: ERC20;
  token1: ERC20;

  lendgine: LendgineLP;

  bound: Price<ERC20, ERC20>;

  token0Exp: number;
  token1Exp: number;

  address: Address;
};

export type LendginePosition<L extends Lendgine> = {
  size: ERC20Amount<L["lendgine"]>;
  rewardPerPositionPaid: Price<L["lendgine"], L["token1"]>;
  tokensOwed: ERC20Amount<L["token1"]>;
};

export type LendgineInfo<L extends Lendgine> = {
  totalPositionSize: ERC20Amount<L["lendgine"]>;
  totalLiquidityBorrowed: ERC20Amount<L["lendgine"]>;
  rewardPerPositionStored: Price<L["lendgine"], L["token1"]>;
  lastUpdate: number;

  totalSupply: ERC20Amount<L["lendgine"]>;

  reserve0: ERC20Amount<L["token0"]>;
  reserve1: ERC20Amount<L["token1"]>;
  totalLiquidity: ERC20Amount<L["lendgine"]>;
};

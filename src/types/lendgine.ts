import { BaseERC20, Price } from "reverse-mirage";
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

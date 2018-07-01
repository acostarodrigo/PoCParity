pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

/**
 * @dev Simple SmartValor mintable token to perform tests with parity.
 * @dev This is a mintable token by owner. Owner is miner from Node0 on the PoA consensus mechanism.
*/
contract SmartValorToken is MintableToken{
  string public constant name = "SmartValorToken";
  string public constant symbol = "SVT";
  uint8 public constant decimals = 18;
}

pragma solidity ^0.8.28;

// SPDX-License-Identifier: UNLICENSED
contract SimpleStorage {
    uint256 private value;
    function set(uint256 v) external { value = v; }
    function get() external view returns (uint256) { return value; }
}
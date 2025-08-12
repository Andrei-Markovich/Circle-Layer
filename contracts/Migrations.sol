// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Migrations {
    address public owner = msg.sender;
    uint public last_completed_migration;
    modifier restricted() { require(msg.sender == owner, "restricted"); _; }
    function setCompleted(uint completed) public restricted { last_completed_migration = completed; }
}
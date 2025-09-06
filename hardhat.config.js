require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { CIRCLE_RPC_URL, PRIVATE_KEY, CHAIN_ID } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    circleLayerTestnet: {
      url: CIRCLE_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: CHAIN_ID ? Number(CHAIN_ID) : undefined
    }
  }
};

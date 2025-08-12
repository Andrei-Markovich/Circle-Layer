require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: { optimizer: { enabled: true, runs: 200 } }
  },
  networks: {
    circleLayerTestnet: {
      url: "https://testnet-rpc.circlelayer.com",
      chainId: 28525,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};

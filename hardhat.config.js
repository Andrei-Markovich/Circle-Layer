require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { CIRCLE_RPC_URL, PRIVATE_KEY, CHAIN_ID } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // Поддерживаем все встречающиеся pragma
  solidity: {
    compilers: [
      { version: "0.8.28", settings: { optimizer: { enabled: true, runs: 200 } } },
      { version: "0.8.24", settings: { optimizer: { enabled: true, runs: 200 } } }
    ]
  },
  networks: {
    circleLayerTestnet: {
      url: CIRCLE_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: CHAIN_ID ? Number(CHAIN_ID) : undefined
    }
  }
};

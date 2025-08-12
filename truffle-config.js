require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const rawPK = process.env.PRIVATE_KEY || "";
const PK = rawPK.startsWith("0x") ? rawPK.slice(2) : rawPK;

module.exports = {
  networks: {
    circleLayerTestnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [PK],
          providerOrUrl: "https://testnet-rpc.circlelayer.com",
          pollingInterval: 15000
        }),
      network_id: 28525,
      gas: 5_000_000,
      maxFeePerGas: 50_000_000_000,
      maxPriorityFeePerGas: 2_000_000_000,
      networkCheckTimeout: 120000,
      timeoutBlocks: 500,
      confirmations: 1,
      skipDryRun: true
    }
  },
  compilers: {
  solc: {
    version: "0.8.28",
    settings: {
      evmVersion: "paris",
      optimizer: { enabled: true, runs: 200 }
    }
  }
}
};
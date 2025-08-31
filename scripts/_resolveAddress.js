const fs = require("fs");
const path = require("path");

async function resolveAddress() {
  // 1) .env
  const envAddr = process.env.SIMPLE_STORAGE;
  if (envAddr && /^0x[a-fA-F0-9]{40}$/.test(envAddr)) return envAddr;

  // 2) deployments/<network>/SimpleStorage.json
  const network = process.env.HARDHAT_NETWORK || "circleLayerTestnet";
  const file = path.join(__dirname, "..", "deployments", network, "SimpleStorage.json");
  if (fs.existsSync(file)) {
    const { address } = JSON.parse(fs.readFileSync(file, "utf8"));
    if (address && /^0x[a-fA-F0-9]{40}$/.test(address)) return address;
  }

  throw new Error(
    "SimpleStorage address not found. Set SIMPLE_STORAGE in .env or create deployments/<network>/SimpleStorage.json"
  );
}

module.exports = { resolveAddress };

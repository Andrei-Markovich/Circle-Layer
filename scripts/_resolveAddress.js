const fs = require("fs");
const path = require("path");

function resolveSimpleStorageAddress() {
  // 1) из .env (если есть)
  if (process.env.SIMPLE_STORAGE && /^0x[0-9a-fA-F]{40}$/.test(process.env.SIMPLE_STORAGE)) {
    return process.env.SIMPLE_STORAGE;
  }
  // 2) из deployments JSON
  const p = path.join(__dirname, "..", "deployments", "circleLayerTestnet", "SimpleStorage.json");
  const raw = fs.readFileSync(p, "utf8");
  const { address } = JSON.parse(raw);
  if (!address || !/^0x[0-9a-fA-F]{40}$/.test(address)) {
    throw new Error("SimpleStorage address not found or invalid in deployments JSON");
  }
  return address;
}

module.exports = { resolveSimpleStorageAddress };

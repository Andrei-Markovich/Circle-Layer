const fs = require("fs");
const path = require("path");

function resolveAddress() {
  // 1) из переменных окружения
  const envs = [process.env.SIMPLE_STORAGE, process.env.TRUFFLE_SIMPLE_STORAGE];
  for (const v of envs) {
    if (v && /^0x[a-fA-F0-9]{40}$/.test(v)) return v;
  }

  // 2) из deployments
  const p = path.join(__dirname, "..", "deployments", "circleLayerTestnet", "SimpleStorage.json");
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    if (data.address && /^0x[a-fA-F0-9]{40}$/.test(data.address)) return data.address;
  }

  throw new Error("SimpleStorage address not found. Set SIMPLE_STORAGE in .env or deploy first.");
}

module.exports = resolveAddress;

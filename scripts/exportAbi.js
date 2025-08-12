const fs = require("fs");
const path = require("path");
require("dotenv").config();

const addr = process.env.SIMPLE_STORAGE;
if (!addr) throw new Error("SIMPLE_STORAGE not set in .env");

const artifactPath = path.join(__dirname, "..", "artifacts", "contracts", "SimpleStorage.sol", "SimpleStorage.json");
const outDir = path.join(__dirname, "..", "deployments", "circleLayerTestnet");
const outFile = path.join(outDir, "SimpleStorage.json");

const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
const out = {
  address: addr,
  abi: artifact.abi
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(out, null, 2), "utf8");
console.log("Written:", outFile);

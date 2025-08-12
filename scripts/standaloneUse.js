require("dotenv").config();
const { JsonRpcProvider, Wallet, Contract } = require("ethers");
const path = require("path");
const fs = require("fs");

const rpc = "https://testnet-rpc.circlelayer.com";
const provider = new JsonRpcProvider(rpc);

const { PRIVATE_KEY } = process.env;
if (!PRIVATE_KEY) throw new Error("PRIVATE_KEY not set");

const meta = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "deployments", "circleLayerTestnet", "SimpleStorage.json"), "utf8")
);

async function main() {
  const wallet = new Wallet(PRIVATE_KEY, provider);
  const c = new Contract(meta.address, meta.abi, wallet);

  const before = await c.get();
  console.log("Before:", before.toString());

  const tx = await c.set(1234);
  console.log("tx:", tx.hash);
  await tx.wait();

  const after = await c.get();
  console.log("After:", after.toString());
}
main().catch(e => { console.error(e); process.exit(1); });

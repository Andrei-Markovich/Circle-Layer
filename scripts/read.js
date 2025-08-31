require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const addr = process.env.SIMPLE_STORAGE;
  if (!addr) throw new Error("SIMPLE_STORAGE not set in .env");

  const simple = await hre.ethers.getContractAt("SimpleStorage", addr);
  const v = await simple.get();
  console.log(String(v));
}

main().catch(e => { console.error(e); process.exit(1); });

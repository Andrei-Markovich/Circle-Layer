require("dotenv").config();
const { ethers } = require("hardhat");
const { resolveSimpleStorageAddress } = require("./_resolveAddress");

async function main() {
  const addr = resolveSimpleStorageAddress();
  const c = await ethers.getContractAt("SimpleStorage", addr);

  const before = await c.get();
  console.log("Before:", before.toString());

  const tx = await c.set(777);
  console.log("tx hash:", tx.hash);
  await tx.wait();

  const after = await c.get();
  console.log("After:", after.toString());
}

main().catch((e) => { console.error(e); process.exit(1); });

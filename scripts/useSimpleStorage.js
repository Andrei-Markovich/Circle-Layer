require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const addr = process.env.SIMPLE_STORAGE;
  if (!addr) throw new Error("SIMPLE_STORAGE not set");

  const c = await ethers.getContractAt("SimpleStorage", addr);

  const before = await c.get();
  console.log("Before:", before.toString());

  const tx = await c.set(777);
  console.log("tx hash:", tx.hash);
  await tx.wait();

  const after = await c.get();
  console.log("After:", after.toString());
}
main().catch(e => { console.error(e); process.exit(1); });
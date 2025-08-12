const { ethers } = require("hardhat");

async function main() {
  const c = await ethers.deployContract("SimpleStorage");
  await c.waitForDeployment();
  console.log("SimpleStorage address:", await c.getAddress());
}

main().catch((e) => { console.error(e); process.exit(1); });
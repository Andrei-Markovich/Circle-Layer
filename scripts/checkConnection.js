const { ethers } = require("hardhat");

async function main() {
  const net = await ethers.provider.getNetwork();
  const bn = await ethers.provider.getBlockNumber();
  console.log("Network chainId:", net.chainId);
  console.log("Latest block:", bn);
}

main().catch((e) => { console.error(e); process.exit(1); });

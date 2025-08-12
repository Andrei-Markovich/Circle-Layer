const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();
  const addr = await signer.getAddress();
  const bal = await ethers.provider.getBalance(addr);
  console.log("Address:", addr);
  console.log("Balance (CLAYER):", ethers.formatEther(bal));
}

main().catch((e) => { console.error(e); process.exit(1); });

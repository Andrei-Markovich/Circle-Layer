// scripts/whoami.js
require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, hre.ethers.provider);
  const addr = await wallet.getAddress();
  const bal  = await hre.ethers.provider.getBalance(addr);
  console.log(`Deployer: ${addr}`);
  console.log(`Balance: ${hre.ethers.formatEther(bal)} CLAYER`);
}

main().catch((e) => { console.error(e); process.exit(1); });

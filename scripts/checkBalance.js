require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const addr = (await hre.ethers.getSigners())[0].address;
  const bal = await hre.ethers.provider.getBalance(addr);
  console.log(`Address: ${addr}`);
  console.log(`Balance (CLAYER): ${hre.ethers.formatEther(bal)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

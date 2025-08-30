const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const bal = await hre.ethers.provider.getBalance(signer.address);
  console.log(`Deployer: ${signer.address}`);
  console.log(`Balance: ${hre.ethers.formatEther(bal)} CLAYER`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

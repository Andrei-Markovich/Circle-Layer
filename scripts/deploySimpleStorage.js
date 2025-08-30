const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log(`Deployer: ${deployer.address}`);

  const Factory = await hre.ethers.getContractFactory("SimpleStorage");
  const contract = await Factory.deploy();
  await contract.waitForDeployment();

  const addr = await contract.getAddress();
  console.log(`SimpleStorage address: ${addr}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

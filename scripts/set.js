const hre = require("hardhat");
const { resolveAddress } = require("./_resolveAddress");

async function main() {
  const value = process.env.VALUE ?? process.argv[2];
  if (value === undefined) {
    throw new Error("No value provided. Use env VALUE or pass as arg: `npx hardhat run scripts/set.js 4242`");
  }

  const addr = await resolveAddress();

  // привяжем контракта к деплоеру (на всякий случай)
  const [deployer] = await hre.ethers.getSigners();
  const storage = await hre.ethers.getContractAt("SimpleStorage", addr, deployer);

  console.log("Contract:", addr);
  console.log("Setter:", await deployer.getAddress());
  console.log("Setting value:", value);

  const tx = await storage.set(value);
  console.log("tx:", tx.hash);
  await tx.wait();

  console.log(" set() completed");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

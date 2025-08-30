const hre = require("hardhat");
const resolveAddress = require("./_resolveAddress");

async function main() {
  const addr = resolveAddress();
  const c = await hre.ethers.getContractAt("SimpleStorage", addr);
  const v = await c.get();
  console.log(v.toString());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

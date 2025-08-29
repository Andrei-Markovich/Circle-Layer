// scripts/deploySimpleStorage.js
const { ethers } = require("hardhat");

async function main() {
  const F = await ethers.getContractFactory("SimpleStorage");
  const c = await F.deploy();
  await c.waitForDeployment();

  const addr = await c.getAddress();
  console.log("SimpleStorage address:", addr);

  // NEW: прокинуть адрес в переменные окружения GitHub Actions
  if (process.env.GITHUB_ENV) {
    const fs = require("fs");
    fs.appendFileSync(
      process.env.GITHUB_ENV,
      `SIMPLE_STORAGE=${addr}\nTRUFFLE_SIMPLE_STORAGE=${addr}\n`
    );
    console.log("Exported SIMPLE_STORAGE to GITHUB_ENV");
  }

}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

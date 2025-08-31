// scripts/deploySimpleStorage.js
// Полный скрипт деплоя с автосохранением адреса в deployments/<network>/SimpleStorage.json

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers, network } = hre;

async function main() {
  console.log("▶ Deploying SimpleStorage…");
  const Factory = await ethers.getContractFactory("SimpleStorage");
  const contract = await Factory.deploy();

  // ethers v6: ждём финального деплоя
  if (typeof contract.waitForDeployment === "function") {
    await contract.waitForDeployment();
  } else if (typeof contract.deployed === "function") {
    // fallback для ethers v5
    await contract.deployed();
  }

  const deployedAddress = contract.target ?? contract.address;
  console.log("Deploy summary");
  console.log("Deployed SimpleStorage");
  console.log(`Address: ${deployedAddress}`);

  // === Автосохранение адреса ===
  const outDir = path.join(__dirname, "..", "deployments", network.name);
  fs.mkdirSync(outDir, { recursive: true });

  const meta = {
    address: deployedAddress,
    network: network.name,
    updated: new Date().toISOString(),
  };

  const outFile = path.join(outDir, "SimpleStorage.json");
  fs.writeFileSync(outFile, JSON.stringify(meta, null, 2), "utf8");
  console.log(`Saved: deployments/${network.name}/SimpleStorage.json`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// scripts/deploy.js
// Деплой контракта SimpleStorage и вывод адреса в stdout.

const hre = require("hardhat");

async function main() {
  console.log("Network:", hre.network.name);

  // Фабрика контракта по имени из artifacts
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");

  // Если у контракта нет конструктора — просто deploy()
  const contract = await SimpleStorage.deploy();

  // Для ethers v6:
  await contract.waitForDeployment();
  const address = await contract.getAddress();

  console.log("SimpleStorage deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

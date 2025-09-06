// scripts/read.js
// Читает значение из уже задеплоенного SimpleStorage.
// Адрес берём из env.SIMPLE_STORAGE или из argv[2].

const hre = require("hardhat");

async function main() {
  const addr = (process.env.SIMPLE_STORAGE || process.argv[2] || "").trim();
  if (!addr) {
    throw new Error("Provide contract address via SIMPLE_STORAGE env or as an argument.");
  }
  console.log("Reading from:", addr, "on", hre.network.name);

  // Берём контракт по имени из артефактов
  const simple = await hre.ethers.getContractAt("SimpleStorage", addr);
  const value = await simple.get(); // метод get() должен быть в вашем контракте
  console.log("Stored value:", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

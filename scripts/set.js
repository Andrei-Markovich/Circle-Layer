require("dotenv").config();
const { ethers, network } = require("hardhat");
const { resolveAddress } = require("./_resolveAddress");

async function main() {
  // Значение берём из переменной окружения VALUE (на Windows так удобнее)
  const value = process.env.VALUE;
  if (value === undefined) {
    throw new Error("Set VALUE env var first, e.g. $env:VALUE=\"4242\"");
  }

  const addr = await resolveAddress(network.name);
  const [signer] = await ethers.getSigners();
  const simple = await ethers.getContractAt("SimpleStorage", addr, signer);

  const before = await simple.get();
  console.log("Before:", before.toString());

  const tx = await simple.set(value);
  console.log("tx:", tx.hash);
  await tx.wait();

  const after = await simple.get();
  console.log("After:", after.toString());
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

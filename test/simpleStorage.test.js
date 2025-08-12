const { expect } = require("chai");

describe("SimpleStorage", function () {
  it("set/get", async function () {
    const F = await ethers.getContractFactory("SimpleStorage");
    const c = await F.deploy();
    await c.waitForDeployment();

    expect(await c.get()).to.equal(0n);

    const tx = await c.set(555);
    await tx.wait();

    expect(await c.get()).to.equal(555n);
  });
});
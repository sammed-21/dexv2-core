const { ethers } = require("hardhat");

const main = async () => {
  const [owner] = await ethers.getSigners();

  console.log(owner.address);

  const weth = await ethers.getContractFactory("WETH9");
  const wethInstance = await weth.deploy();

  await wethInstance.waitForDeployment();

  const wethAddress = await wethInstance.getAddress();

  console.log("weth smart contract adddress: ", wethAddress);
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

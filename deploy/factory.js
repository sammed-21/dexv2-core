const { ethers } = require("hardhat");

const main = async () => {
  const [owner] = await ethers.getSigners();

  console.log(owner.address);

  const factory = await ethers.getContractFactory("UniswapV2Factory");
  const factoryInstance = await factory.deploy(
    "0x74D75f13c39014Dd1515758bF66ba46571B73F2E"
  );

  await factoryInstance.waitForDeployment();

  const factoryAddress = await factoryInstance.getAddress();

  console.log("factory smart contract adddress: ", factoryAddress);
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

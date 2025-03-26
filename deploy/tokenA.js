const { ethers } = require("hardhat");

const main = async () => {
  const [owner] = await ethers.getSigners();

  console.log(owner.address);

  const router = await ethers.getContractFactory("ERC20");
  const initialSupply = 50000000000000000000000n;
  const routerInstance = await router.deploy(initialSupply);

  await routerInstance.waitForDeployment();

  const routerAddress = await routerInstance.getAddress();

  console.log("token A smart contract adddress: ", routerAddress);
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

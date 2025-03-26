const { ethers } = require("hardhat");

const main = async () => {
  const [owner] = await ethers.getSigners();

  console.log(owner.address);

  const router = await ethers.getContractFactory("UniswapV2Router02");
  const routerInstance = await router.deploy(
    "0xD73c96023dd38ceF2fB7bc6A5dF7C99E734cb471",
    "0x426F9Db3fbb9247B8Bf7cEF1A6cf1b2E9f250EE9"
  );

  await routerInstance.waitForDeployment();

  const routerAddress = await routerInstance.getAddress();

  console.log("router smart contract adddress: ", routerAddress);
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

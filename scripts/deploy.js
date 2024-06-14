const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.provider.getBalance(deployer.address);
  console.log("Account balance:", balance.toString());

  console.log("Getting contract factory...");
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  console.log("Contract factory:", SimpleStorage);

  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorage.deploy();

  // Wait for the deployment to be mined
  await simpleStorage.waitForDeployment();

  console.log("SimpleStorage deployed to:", simpleStorage.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });














const hre = require("hardhat");

async function main() {
  const blc=await hre.ethers.getContractFactory("blc");
  const blcContract=await blc.deploy();
  await blcContract.deployed();
  console.log("blc deployed to:",blcContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

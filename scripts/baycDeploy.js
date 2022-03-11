const { ethers } = require("hardhat");

const NAME = "BAYC-RINKEBY";
const SYMBOL = "BR";
const MAX_NFT_SUPPLY = 1000;
const SALE_START = 0;


// 0.8361 ETH

// 0.8317 ETH




async function main() {
  const BAYCContract = await ethers.getContractFactory("BoredApeYachtClub");

  const deployedBAYCContract = await BAYCContract.deploy(NAME, SYMBOL, MAX_NFT_SUPPLY, SALE_START);

  console.log("Contract Address:", deployedBAYCContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

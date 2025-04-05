const hre = require("hardhat")

async function main() {
    const contract = await hre.ethers.deployContract("MECHANICUS")
    
    await contract.waitForDeployment()
    console.log(`Deployed to ${contract.target}`);
}


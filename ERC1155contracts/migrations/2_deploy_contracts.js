const RR = artifacts.require('RobotRequest.sol');
const RD = artifacts.require('RobotData.sol');
const RRR=artifacts.require('RobotRequestToken.sol');


function deployContracts(deployer, network) {

    deployer.then(async () => {
      
     
    await deployer.deploy(RR)
   let Contract= await deployer.deploy(RD)
   await deployer.deploy(RRR,Contract.address)
     
      
    })
  }
  module.exports = deployContracts;
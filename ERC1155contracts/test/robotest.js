let robotController=artifacts.require('RobotRequest');
let Token=artifacts.require("RobotData")
let contractInstance;
contract('Robot data - tests all core  functionality.', (accounts) => {
    before(async () => {
         contractInstance=await robotController.new()
    });
    
    it("registers a robot ",async()=>{
        await contractInstance.RegisterRobot([100,100],[120,120],"0x0012")
    })
    it("registers a robot ",async()=>{
        await contractInstance.activateRobot(1,0,{from:accounts[1],value:100})
       result =await contractInstance.Robots(1)
       console.log(result)
       console.log(await contractInstance.getRobotPrices(1) )
      
    })
    it("registers a robot ",async()=>{

    })

})
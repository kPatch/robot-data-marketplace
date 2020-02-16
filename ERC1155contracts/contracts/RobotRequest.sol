pragma solidity ^0.5.16;



contract RobotRequest{


struct RobotInfo{
bytes32 id;
uint active;
uint  startTime;
uint[] sessionOptions;
uint[] sessionPrices;

}
uint public totalRobots;
mapping (uint=>RobotInfo) public Robots;
mapping(uint=>address) public RobotOwners;
mapping(address=>uint) public OwnerBalances;

event RobotActivate(bytes32 robotID,uint length,address user);
event DataRequested(address user,uint robotID,uint DataType);
event RobotCreated(bytes32 robotID,address creator);

function RegisterRobot(uint[] memory _prices,uint[] memory _times,bytes32 _id) public {
    require(_prices.length==_times.length,"");
     totalRobots+=1;
     RobotInfo memory R= RobotInfo(_id,0,0,_times,_prices);
     Robots[totalRobots]=R;
     RobotOwners[totalRobots]=msg.sender;
     emit RobotCreated(_id,msg.sender);
}

function activateRobot(uint _robot,uint _type) public payable{
    RobotInfo memory r=Robots[_robot];
    require(r.sessionOptions[_type]>0,"session length must exist");
    require(now-r.startTime>r.sessionOptions[_type],"robot is currently  active");
    require(msg.value>=r.sessionPrices[_type],"must pay valid amount");
    r.startTime=now;
    r.active=_type;
    Robots[_robot]=r;
    emit RobotActivate(r.id,r.sessionOptions[_type],msg.sender);
    OwnerBalances[RobotOwners[_robot]]+=msg.value;
}
function getRobotPrices(uint r) public view returns(uint[] memory) {
    return Robots[r].sessionPrices;
}
function getRobotTimes(uint r) public view returns(uint[] memory) {
    return Robots[r].sessionOptions;
}
function getRobotData(uint _id, uint _type) public {
    emit DataRequested(msg.sender,_id ,_type);
}

function withdrawEarning() public {
    require(OwnerBalances[msg.sender]>0);
    msg.sender.transfer(OwnerBalances[msg.sender]);
}





}
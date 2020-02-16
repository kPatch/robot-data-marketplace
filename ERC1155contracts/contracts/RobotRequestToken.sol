pragma solidity ^0.5.16;

import "./RobotData.sol";
import "multi-token-standard/contracts/mocks/ERC1155ReceiverMock.sol";
contract RobotRequestToken is ERC1155ReceiverMock{
RobotData Rtoken;

constructor(address token) public{
    Rtoken=RobotData(token);
}

struct RobotInfo{
    bytes32 id;
    uint active;
    uint  startTime;
    uint[] sessionOptions;
    uint[] sessionPrices;
    uint[] sessionTokenPrices;
    uint tokenType;
}

uint public totalRobots;
mapping (uint=>RobotInfo) public Robots;
mapping(uint=>address) public RobotOwners;
mapping(address=>mapping(uint=>uint)) public OwnerBalances;
mapping(address=>uint) OwnerEthBalances;
event RobotActivate(bytes32 robotID,uint length,address user);
event DataRequested(address user,uint robotID,uint DataType);
event RobotCreated(bytes32 robotID,address creator);



function RegisterRobot(uint[] memory _prices,uint[] memory _tokenprices,uint[] memory _times,bytes32 _id,uint _tokenType) public {
    require(_prices.length==_times.length,"");
     totalRobots+=1;
     RobotInfo memory R= RobotInfo(_id,0,0,_times,_prices,_tokenprices,_tokenType);
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
    OwnerEthBalances[RobotOwners[_robot]]+=msg.value;
}
function activateRobotwithToken(uint _robot,uint _type) public payable{
    RobotInfo memory r=Robots[_robot];
    require(r.sessionOptions[_type]>0,"session length must exist");
    require(now-r.startTime>r.sessionOptions[_type],"robot is currently  active");
    //require(msg.value>=r.sessionPrices[_type],"must pay valid amount");
    Rtoken.safeTransferFrom(msg.sender,address(this),r.tokenType,r.sessionTokenPrices[_type],"");
    r.startTime=now;
    r.active=_type;
    Robots[_robot]=r;
    emit RobotActivate(r.id,r.sessionOptions[_type],msg.sender);
    OwnerBalances[RobotOwners[_robot]][r.tokenType]+=r.sessionPrices[_type];
}
function getRobotPrices(uint r) public view returns(uint[] memory) {
    return Robots[r].sessionPrices;
}
function getRobotTokenPrices(uint r) public view returns(uint[] memory) {
    return Robots[r].sessionPrices;
}
function getRobotTimes(uint r) public view returns(uint[] memory) {
    return Robots[r].sessionOptions;
}
function getRobotData(uint _id, uint _type) public {
    emit DataRequested(msg.sender,_id ,_type);
}

function withdrawEarning(uint _type) public {
    //require(OwnerBalances[msg.sender]>0);
    Rtoken.safeTransferFrom(address(this),msg.sender,_type,OwnerBalances[msg.sender][_type],"");
}





}
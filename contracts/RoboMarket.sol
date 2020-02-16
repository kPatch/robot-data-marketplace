pragma solidity ^0.5.0;

contract ERC20{
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract RoboMarket{

    uint public price1 = 10**8;

    address public roboCoin;
    constructor(address tokenAddress) public {
        roboCoin = tokenAddress;
    }

    mapping (address=>bool) public permissions1;

    function buy1() public{
        ERC20(roboCoin).transferFrom(msg.sender,address(this),price1);
        permissions1[msg.sender] = true;
    }
}

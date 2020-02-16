pragma solidity ^0.5.16;

import "./Context.sol";
import "./Roles.sol";
import "./Ownable.sol";

contract AdminRoles is Context,Ownable {
    using Roles for Roles.Role;

    event MinterAdded(address indexed account);
    event MinterRemoved(address indexed account);
    event BurnerAdded(address indexed account);
    event BurnerRemoved(address indexed account);
    event TransferAdminAdded(address indexed account);
    event TransferAdminRemoved(address indexed account);
    Roles.Role private _minters;
    Roles.Role private _admins;
    Roles.Role private _burners;

    /**Minter Adminstration Functions */
    constructor () internal {
       // _addMinter(_msgSender());
    }

    modifier onlyMinter() {
        require(isMinter(_msgSender()), "MinterRole: caller does not have the Minter role");
        _;
    }

    function isMinter(address account) public view returns (bool) {
        return _minters.has(account);
    }

    function addMinter(address account) public onlyOwner {
        _addMinter(account);
    }

    function renounceMinter() public {
        _removeMinter(_msgSender());
    }
     function removeMinter(address a) public onlyOwner{
        _removeMinter(a);
    }
    function _addMinter(address account) internal {
        _minters.add(account);
        emit MinterAdded(account);
    }

    function _removeMinter(address account) internal {
        _minters.remove(account);
        emit MinterRemoved(account);
    }


    /**Burner  Administratioin Functions*/
    
    modifier onlyBurner() {
        require(isBurner(_msgSender()), "BurnerRole: caller does not have the Burner role");
        _;
    }

    function isBurner(address account) public view returns (bool) {
        return _burners.has(account);
    }

   
    function renounceBurner() public {
        _removeBurner(_msgSender());
    }
     function removeBurner(address a) public onlyOwner{
        _removeBurner(a);
    }
    function addBurner(address account) public onlyOwner {
        _addBurner(account);
    }

    function _addBurner(address account) internal {
        _burners.add(account);
        emit BurnerAdded(account);
    }

    function _removeBurner(address account) internal {
        _burners.remove(account);
        emit BurnerRemoved(account);
    }

   /**Transfer Administration Functions*/
     modifier onlyAdmin() {
        require(isAdmin(_msgSender()), "MinterRole: caller does not have the Minter role");
        _;
    }

    function isAdmin(address account) public view returns (bool) {
        return _admins.has(account);
    }

    function addAdmin(address account) public onlyOwner {
        _addAdmin(account);
    }

    function renounceAdmin() public {
        _removeAdmin(_msgSender());
    }
     function removeAdmin(address a) public onlyOwner{
        _removeAdmin(a);
    }

    function _addAdmin(address account) internal {
        _admins.add(account);
        emit TransferAdminAdded(account);
    }

    function _removeAdmin(address account) internal {
        _admins.remove(account);
        emit TransferAdminRemoved(account);
    }
}
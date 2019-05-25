pragma solidity ^0.4.22;

contract blockchainFederal {

    address owner;
    mapping (address => Estation) estations;
    mapping (string => Product) products;
    
    struct Estation {
        string nameStation;
        uint id;
        string description;
    }

    struct Product {
        address estationOwner;
        string nameProduct;
        
    }
    
  
    constructor(){
        owner = msg.sender;
    }
    
    
   modifier onlyOwner {
    require(msg.sender == owner);
    _;
    }

    function destroy() public onlyOwner {
        selfdestruct(owner);
    }
    
    function addEstation (string _nameStation, uint _id, string _desc) public returns (bool success)  {
        // validate null data and overwritting
        if (bytes(_nameStation).length != 0){
            estations[msg.sender].nameStation = _nameStation;
            estations[msg.sender].id = _id;
            estations[msg.sender].description = _desc;
            return true;
        } else {
            return false;
        }
    }
    
    function findEstation (address _estation) public constant returns (string, uint, string){
        return (
            estations[_estation].nameStation,
            estations[_estation].id,
            estations[_estation].description
            );
    }
        
    
    function addProduct (string _codQr, string _nameProduct)  public returns (bool success){
        
        if (products[_codQr].estationOwner == 0x0 && bytes(_codQr).length != 0){
            products[_codQr].estationOwner = msg.sender;
            products[_codQr].nameProduct = _nameProduct;
            return true;
        } else {
            return false;
        }
    }
    
    function findProduct (string _codQr)  public constant returns (address, string){
        return (
            products[_codQr].estationOwner,
            products[_codQr].nameProduct
            );
    }
    
    
}
